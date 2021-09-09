import { ShelfItem } from "../interfaces";

export default class Shelf<T extends ShelfItem>{
    private items: T[] = [];
    add(item: T) {
        this.items.push(item)
    }
    getFirst(): T {
        return this.items[0];
    }
    find(title: string): T {
        return this.items.find(i => i.title === title);
    }
    printItems() {
        this.items.forEach(i => console.log(i.title));
    }
}