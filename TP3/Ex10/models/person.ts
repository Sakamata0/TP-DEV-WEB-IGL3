export abstract class Person {
    id: string;
    name: string;
    role: number;

    constructor(id: string, name: string, role: number) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}