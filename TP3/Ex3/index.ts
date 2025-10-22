let id: number | string;
id = 21;
id = "21";

type A = {name: string};
type B = {age: number};

type C = A & B;

let value: C = {
    name: 'skander',
    age: 21
};

type Status = "pending" | "done" | "canceled";

let unknownVar: unknown = "skander is legend";

if(typeof unknownVar == "string") {
    console.log("Longueur: ", (unknownVar as string).length);
}