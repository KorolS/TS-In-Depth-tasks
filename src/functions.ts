import { Category } from "./enums";
import { Book, LibMgrCallback } from "./interfaces";
import { BookProperties, BookOrUndefined } from "./types";
import RefBook from "./classes/encyclopedia";

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name']
    }
    else {
        return obj[prop]
    }
}


export function getAllBooks(): readonly Book[] {
    const books: ReadonlyArray<Book> = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ]
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books ${books.length}`)
    const firstAvailable = books.find(b => b.available)?.title;
    console.log(`First available ${firstAvailable}`);
}


export function getBookTitleByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(b => b.category === category).map(b => b.title);
}


export function logBooksTitles(titles: string[]): void {
    titles.forEach(
        title => { console.log(`Title ${title}`) }
    )
}



export function getBooksAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author]
}


export function calcTotalPages(): bigint {
    const data = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
    return data.reduce((sum: bigint, item) => { return sum + BigInt(item.books) * BigInt(item.avgPagesPerBook); }, BigInt(0))
}



export function createCustomerID(name: string, id: number) {
    return (name + id);
}


export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Name ${name} ${age ? 'Age ' + age : ''} ${city ? 'City ' + city : ''}`)
}



export function getBookByID(id: number): BookOrUndefined {
    return getAllBooks().find(b => b.id === id);
}

export function printBook(book: Book) {
    console.log(book.title + " by " + book.author);
}




export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const titlesAvailable = bookIDs.map(id => getBookByID(id)).filter(b => b.available).map(b => b.title);
    console.log(`Customer ${customer}`)
    return titlesAvailable;
}



export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...props: any[]): string[] {
    if (props.length === 1) {
        const [prop] = props;
        if (typeof prop === 'string') {
            return getAllBooks().filter(b => b.author === prop).map(b => b.title)
        }
        if (typeof prop === 'boolean') {
            return getAllBooks().filter(b => b.available === prop).map(b => b.title)
        }
    }
    else if (typeof props[0] === 'number' && typeof props[1] === 'boolean') {
        return getAllBooks().filter(b => b.available === props[1] && b.id === props[0]).map(b => b.title)
    }
}


export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error("value should have been a string");

    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error("It is not instance of RefBook")
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    // return [...title].reverse().join('');
    return '';
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitleByCategory(category)
            if (titles.length > 0) {
                callback(null, titles)
            }
            else { throw new Error('No books found.') }
        }
        catch (err) {
            callback(err, null)
        }
    }, 1000)

}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error: ${err}`)
    }
    else {
        console.log("Titles", titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            {
                const titles = getBookTitleByCategory(category)
                if (titles.length > 0) {
                    resolve(titles)
                }
                else { reject('No books found.') }
            }

        }, 1000)
    })
}

export async function logSearchResults(category: Category) {
    const books = await getBooksByCategoryPromise(category);
    console.log("Books amount", books.length);
}




