// Union (number | string) Usar o pipe para juntar vários valores

// type alias
type Uid = number | string 

function logDetails(uid: Uid, item: string) {
    console.log(`a product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} hash a name as ${user}`)
}

logDetails(123, "sapato")
logDetails("213", "sapato")

type Plataform = 'Windows' | 'Linux' | 'Mac OS'
function renderPlataform(plataform: Plataform) {
    return plataform
}

// renderPlataform('asdf') // Valida o tipo de inforamçaõ
renderPlataform('Linux')