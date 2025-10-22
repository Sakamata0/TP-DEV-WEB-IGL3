export class Livre {
    id: string;
    title: string;
    author: string;
    year: number;
    available: boolean;

    constructor(
        id: string,
        title: string,
        author: string, 
        year: number,
        available: boolean
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }
}