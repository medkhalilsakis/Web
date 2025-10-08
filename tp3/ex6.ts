class Person {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(`Bonjour, je suis ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, public school: string) {
        super(name, age);
    }
}

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    drive(): void {
        console.log("La voiture roule");
    }
}
