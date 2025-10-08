function identity<T>(value: T): T {
    return value;
}

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(index: number): void {
        this.items.splice(index, 1);
    }

    getAll(): T[] {
        return this.items;
    }
}

interface ApiResponse<T> {
    data: T;
    error?: string;
}
