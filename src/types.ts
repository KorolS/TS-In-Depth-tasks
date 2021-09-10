import { getBooksByCategoryPromise } from "./functions";
import { Author, Book, Person } from "./interfaces";
// type Book = {
//     id: number,
//     title: string,
//     author: string,
//     available: boolean,
//     category: Category
// }

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type BookRequiredFields = Required<Book>;
type UpdateBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'email'>;
type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;
type fn = (param1: string, param2: number, param3: boolean) => symbol;
type Param1<T> = T extends (param1: infer R, param2: number, param3: boolean) => symbol ? R : never;
type Param2<T> = T extends (param1: string, param2: infer R, param3: boolean) => symbol ? R : never;
type Param3<T> = T extends (param1: string, param2: number, param3: infer R) => symbol ? R : never;
export type P1 = Param1<fn>;
export type P2 = Param2<fn>
export type P3 = Param3<fn>

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type PromiseReturnType = ReturnType<typeof getBooksByCategoryPromise>;
export type UnpromisifyReturnType = Unpromisify<PromiseReturnType>;

export { BookOrUndefined, BookProperties, PersonBook, BookRequiredFields, UpdateBook, AuthorWoEmail, СreateCustomerFunctionType, fn }