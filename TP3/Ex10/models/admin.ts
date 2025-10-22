import { Person } from "./person";
import { Role } from "./role";

export class Admin extends Person {
    constructor(id: string, name: string) {
        super(id, name, Role.Admin);
    }
}