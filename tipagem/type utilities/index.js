var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Fazendo comque todas as propriedades sejam apenas lidas
var todo = {
    title: "Assistir Dark denovo",
    description: "Relembrar detalhes",
    completed: false
};
console.log(todo);
// todo.completed = true // Não se pode editar
// console.log(todo)
// Partial diz que alguns atributos de Todo podem ser informado, 
// sem ser obrigado a informar todos atributos
function updateTodo(todo, fieldsToUpdate) {
    // fieldsToUpdate será feito merge comtodo no retorno
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
var todo4 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
