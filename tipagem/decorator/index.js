// @Component
// @Selector
// @useState("dasdas")
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Acessor decorator
// Class decorator ---------------------
// Factory
function logger(prefix) {
    return function (constructor) {
        console.log(prefix + " - " + constructor);
    };
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        logger("teste")
    ], Foo);
    return Foo;
}());
// decorator para anotar versão da API
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion("1.0.0")
    ], API);
    return API;
}());
console.log(new API());
function minLength(length) {
    return function (target, key) {
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Error: Voc\u00EA n\u00E3o pode criar " + key + " menor que " + length);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
// Property decorator ---------------------
var Movie = /** @class */ (function () {
    function Movie(newTitle) {
        this.title = newTitle;
    }
    __decorate([
        minLength(5)
    ], Movie.prototype, "title");
    return Movie;
}());
var movie = new Movie("Interstellar");
console.log(movie);
console.log(movie.title);
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
