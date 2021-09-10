import { positiveInteger } from "../decorators";
import { ReferenceItem } from "./referenceItem";

export default class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number, private _copies: number) {
        super(id, title, year);
    }

    @positiveInteger
    get copies(): number {
        return this._copies
    }
    set copies(value: number) {
        this._copies = value;
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition ${this.edition} ${this.year}`)
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}
