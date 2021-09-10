import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }
    // title: string;
    //year: number;
    #id: number;
    static department: string = "Dep A";
    private _publisher: string;
    get publisher(): string { return this._publisher.toUpperCase() }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
    getID(): number {
        return this.#id;
    }
    // @timeout(1000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year} year`);
        console.log(`Department ${ReferenceItem.department}`);
    }
}