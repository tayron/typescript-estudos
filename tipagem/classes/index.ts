abstract class UserAccount {
    public name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    private level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }


    get getLevel() {
        console.log("----GET----")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails() : void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
}

// Não se pode instanciar classe abstrata
// const pessoa = new UserAccount("Tayron", 23) 
// console.log(pessoa)
// console.log(pessoa.age) // Não se pode ler uma propriedade privada
// pessoa.logDetails()

const pessoa2 = new CharAccount("Tayron", 27, "kayzen", 80)
// pessoa2.nickname = "Pedro" // Não consegue modificar propriedade privada
// pessoa2.level = 45 // Não consegue alterar pois a propriedade só pode ser lida
console.log(pessoa2)
pessoa2.logDetails()
pessoa2.logCharDetails()
pessoa2.setLevel = 499
console.log(pessoa2.getLevel)