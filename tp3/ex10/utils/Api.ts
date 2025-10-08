import { Book } from "../models/Book";

export function fetchBooks(): Book[] {
    return [
        { id: 1, title: "Book 1", author: "Auteur 1", year: 2000, available: true },
        { id: 2, title: "Book 2", author: "Auteur 2", year: 2010, available: true },
    ];
}
