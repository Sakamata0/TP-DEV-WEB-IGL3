// 1)
var Name = "Skander";
var age = 21;
var isAdmin = false;
// 2)
var scores = [70, 120, 194];
// 3)
var etudiant;
etudiant = [Name, age];
// 4)
var Role;
(function (Role) {
    Role[Role["User"] = 2] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
})(Role || (Role = {}));
;
var userRole = Role.Admin;
console.log(userRole);
