// 1)
let Name: string = "Skander";
let age: number = 21;
let isAdmin: boolean = false;

// 2)
let scores: number[] = [70, 120, 194];

// 3)
let etudiant: [string, number];
etudiant = [Name, age];

// 4)
enum Role {
    User = 2,
    Admin = 1,
    SuperAdmin = 0
};

let userRole: Role = Role.Admin;
console.log(userRole);