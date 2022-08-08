// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `teste ${isOpen}`

// number (int, float, exadecimal, binário, etc)
let total: number
total = 20.3

// array (number[], string[], Array<number>, Array<string>)
let items: number[]
items = [1,2,3]

let values: Array<number>
values = [1, 1, 3]

// tuple (ja sabe tipo e o número de elementos que a lita vai ter)
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
    white = "#FFF",
    black = "#000"
}

// any (qualquer coisa) NÃO É LEGAL!!!
let  coisa: any
coisa = "foo"
coisa = 2
coisa = [1]

// void (para retorno vazio)
function logger(): void { // também não precisa tipar
    console.log('foo')
}

// null e undefined
type bla = string | undefined // string ou undefined e não é aconselhavel a utilização como tipo primitivo, dar preferenia ao undefined em relação ao null

// never  (diz que a função não vai retornar nada)
function error(): never {
    throw new Error("error")
}

// object (qualquer tipo de objeto)
let cart: object
cart = {
    nome: "Pedro"
}

// type Inference (Tipagem conforme valor da variavel)
let message2 = "mensagem definida"
// message2 = 2
message2 = "string novb"

window.addEventListener("click", (e) => {
    console.log(e.target)
})