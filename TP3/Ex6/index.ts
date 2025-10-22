// 1)
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    greet(): void {
        console.log(`Bonjour je suis ${this.name} et j'ai ${this.age} ans`)
    };
};

// 2)
class Student extends Person {
    school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    };
}

// 3)
abstract class Shape {
    abstract area(): number;
}

class Circle {
    perim: number;
    constructor(perim: number) {
        this.perim = perim;
    }
    area(): number {
        return this.perim ** 2 * 3.14;
    }
}

class Rectangle {
    hauteur: number;
    longueur: number;
    constructor(hauteur: number, longueur: number) {
        this.hauteur = hauteur;
        this.longueur = longueur;
    }
    area():number {
        return this.hauteur * this.longueur;
    }
}

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    marque: string;

    constructor(marque: string) {
        this.marque = marque;
    }

    drive(): void {
        console.log("Veennnnnnnnnnnnnnn...");
    }
}