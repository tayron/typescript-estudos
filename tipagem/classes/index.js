var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var pessoa = new UserAccount("Tayron", 23);
console.log(pessoa);
console.log(pessoa.age);
