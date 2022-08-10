type Todo = {
    title: string
    description: string
    completed: boolean
}

// Fazendo comque todas as propriedades sejam apenas lidas
const todo: Readonly<Todo> = {
    title: "Assistir Dark denovo",
    description: "Relembrar detalhes",
    completed: false
}

console.log(todo)

// todo.completed = true // Não se pode editar
// console.log(todo)

// Partial diz que alguns atributos de Todo podem ser informado, 
// sem ser obrigado a informar todos atributos
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>)  {
    // fieldsToUpdate será feito merge comtodo no retorno
    return { ...todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, {completed: true})
console.log(todo2)


// Pick
// Pegando a propriedade de Todo, title e description
type TodoPeview = Pick<Todo, "title" | "completed">
const todo3: TodoPeview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

// Omit
// Omitindo atributo description
type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPeview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}