export class Repository<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    remove(predicate: (item: T) => boolean): void {
        this.data = this.data.filter(item => !predicate(item));
    }

    getAll(): T[] {
        return this.data;
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.data.find(predicate);
    }
}
