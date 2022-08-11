// @Component
// @Selector
// @useState("dasdas")

// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Acessor decorator


// Class decorator ---------------------

// Factory
function logger(prefix: string) {
    return (constructor) => {
        console.log(`${prefix} - ${constructor}`)
    }
}

@logger("teste")
class Foo {}



// decorator para anotar versão da API
function setAPIVersion(apiVersion: string) {
    return (constructor) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion("1.0.0")
class API {}

console.log(new API())

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`Error: Você não pode criar ${key} menor que ${length}`)
            } else {                
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

// Property decorator ---------------------
class Movie {
    // validação - sefor menor que 5 caracteres- error
    @minLength(5)
    title: string

    constructor(newTitle: string){
        this.title = newTitle
    }
}

const movie = new Movie("Interstellar")
console.log(movie)
console.log(movie.title)



// Method decorator ------------------------------
// Função implementada  não funciona devido parametro descriptor não ser passado 
// Talvez devido versão do typescript atual ???

/*
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {        
        const originalMethod = descriptor.value

        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`)
            setTimeout(()=>{
                originalMethod.apply(this, args)
            }, ms)
        }
        
        return descriptor
    }
}

class Greeter {
    greeting: string

    constructor(greeting: string) {
        this.greeting = greeting
    }

    // esperar um tempo e vai rodar o método (ms) - delay
    @delay(1000)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoa1 = new Greeter("Pessoa!")
pessoa1.greet()
*/