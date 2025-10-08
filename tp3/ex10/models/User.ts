import { Person } from "./Person";

export type Role = "User" | "Admin";

export class User extends Person {
    constructor(id: number, name: string, public role: Role) {
        super(id, name);
    }
}
