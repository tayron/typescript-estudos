class UserAccount {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const pessoa = new UserAccount("Tayron", 23)
console.log(pessoa)
console.log(pessoa.age)

