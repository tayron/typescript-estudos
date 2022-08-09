var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("----GET----");
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: true,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level);
    };
    return CharAccount;
}(UserAccount));
// Não se pode instanciar classe abstrata
// const pessoa = new UserAccount("Tayron", 23) 
// console.log(pessoa)
// console.log(pessoa.age) // Não se pode ler uma propriedade privada
// pessoa.logDetails()
var pessoa2 = new CharAccount("Tayron", 27, "kayzen", 80);
// pessoa2.nickname = "Pedro" // Não consegue modificar propriedade privada
// pessoa2.level = 45 // Não consegue alterar pois a propriedade só pode ser lida
console.log(pessoa2);
pessoa2.logDetails();
pessoa2.logCharDetails();
pessoa2.setLevel = 499;
console.log(pessoa2.getLevel);
