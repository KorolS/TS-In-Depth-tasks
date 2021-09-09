/* eslint-disable no-redeclare */
import { Category } from "./enums";
import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { Author, Book, Librarian, Logger, Magazine } from "./interfaces";
import { BookRequiredFields, PersonBook, UpdateBook, СreateCustomerFunctionType } from "./types";
import * as functions from "./functions";
import type { Library } from "./classes";
import Encyclopedia from "./classes/encyclopedia";


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}



const favoriteAuthor: Author = {
    name: "Anna",
    email: "abc@abc.com",
    numBooksPublished: 5,
}

// const favoriteLibrarian: Librarian = {
//     name: "Anna",
//     email: "abc@abc.com",
//     department: "Dep A",
//     assistCustomer: (name) => { console.log(name) }
// }

const AnnBook: PersonBook = {
    name: 'Anna',
    email: 'abc@abc.com',
    id: 1,
    title: "Typescript",
    available: true,
    author: "Some author",
    category: Category.TypeScript

}

// const ref = new ReferenceItem(1, "New", 2021);
// ref.printItem();
// ref.publisher = "Some publisher";
// console.log(ref.publisher);
// console.log(ref.getID());
const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer("Tom");

const refBook = new RefBook(1, "New", 2021, 1);
//console.log(refBook);
//refBook.printItem();
//refBook.printCitation();
functions.printRefBook(refBook);

const universityLibrarian = new UL.UniversityLibrarian();
//functions.printRefBook(universityLibrarian);
//logFirstAvailable(books);
//logFirstAvailable();

//console.log(getBookTitleByCategory());

//logBooksTitles(getBookTitleByCategory(Category.JavaScript));

//console.log(getBooksAuthorByIndex(0));

//console.log(calcTotalPages());

let myID: string = functions.createCustomerID("Ann", 10);
//console.log(myID);

let idGenerator: typeof functions.createCustomerID;
idGenerator = (name: string, id: number) => (name + id)
idGenerator = functions.createCustomerID;
//console.log(idGenerator("Ann", 10));

//createCustomer("Anna");
//createCustomer("Anna", 20);
//createCustomer("Anna", 20, "Some city");

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    //copies: 3
    pages: 200,
    markDamaged: (reason) => console.log(`Damaged: ${reason}`),
}

//printBook(myBook);
//myBook.markDamaged("missing back cover");

//const logDamage: Logger = (reason: string) => { console.log(`Damaged: ${reason}`) }
//logDamage("missing back cover");

//console.log(getBookByID(1));

//const myBooks = сheckoutBooks("Anna", 1, 2, 4);
//console.log(myBooks);

//const checkedOutBooks = getTitles(false);
//console.log(checkedOutBooks);

//bookTitleTransform("123");
//bookTitleTransform(123);

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

console.log(functions.getProperty(myBook, 'title'));
console.log(functions.getProperty(myBook, 'markDamaged'));
//console.log(getProperty(myBook, 'isbn'));

const flag = true;
if (flag) {
    const module = await import('./classes');
    const reader = new module.Reader();
    console.log(`READER ${reader}`);
}

//const library:Library = new Library();
const library: Library = { id: 1, name: 'Anna', address: "Abc city" };

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// console.log(functions.purge<Book>(inventory));

// console.log(functions.purge([1, 2, 3]));

const bookShelf = new Shelf<Book>()
inventory.forEach(b => bookShelf.add(b));
console.log(`First book ${bookShelf.getFirst().title}`);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>()
magazines.forEach(m => magazineShelf.add(m));
console.log(`First magazine ${magazineShelf.getFirst().title}`);
magazineShelf.printItems();
console.log(magazineShelf.find('Five Points'));
console.log(functions.getProperty<Book, 'title'>(functions.getAllBooks()[0], 'title'));

const requiredBook: BookRequiredFields = {
    author: 'Anna',
    available: true,
    category: Category.TypeScript,
    id: 1,
    markDamaged: null,
    pages: 100,
    title: "Good book"
}

const updateBook: UpdateBook = {
    author: "Anna"
}

const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
functions.createCustomer(...params);

const librarian = new UL.UniversityLibrarian();
console.log(librarian);
librarian.name = "Anna";
//librarian['printLibrarian']();
//librarian.assistFaculty = () => { };
//librarian.teachCommunity = () => { };
//console.log(librarian);

//const encyclopedia = new Encyclopedia(1, 'some book', 2021, 10);
//encyclopedia.printItem();
librarian.assistCustomer("Tom");

