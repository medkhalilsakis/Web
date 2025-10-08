import { Book } from "../models/Book";
import { Repository } from "../utils/Repository";

export class Library {
    private books = new Repository<Book>();

    addBook(book: Book): void {
        this.books.add(book);
    }

    removeBook(id: number): void {
        this.books.remove(b => b.id === id);
    }

    searchBook(title: string): Book[] {
        return this.books.getAll().filter(b => b.title.includes(title));
    }

    borrowBook(id: number): boolean {
        const book = this.books.find(b => b.id === id && b.available);
        if (book) {
            book.available = false;
            return true;
        }
        return false;
    }

    returnBook(id: number): void {
        const book = this.books.find(b => b.id === id);
        if (book) book.available = true;
    }
}
