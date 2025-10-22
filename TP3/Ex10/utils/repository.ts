export class Repository<T> {
    private arr: T[];

    constructor();
    constructor(arr: T[]);

    constructor(arr?: T[]) {
        this.arr = (arr)?arr:[];
    }

    add(item: T): void {
        this.arr.push(item);
    }

    remove(item: T): void {
        let i: number = 0;
        for(; i < this.arr.length; i++) {
            if(this.arr[i] == item) {
                this.arr.splice(i, 1);
                break;
            }
        }
        if(i == this.arr.length)
            throw new Error("cet élèment n'existe pas dans le repo !");
    }

    getAll(): T[] {
        return this.arr;
    }
}