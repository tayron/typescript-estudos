// S => State
// T => type
// K => Key
// E => Element

// por default é string ( = string)
type numOrStr = number | string
function useState<S extends numOrStr = string>() { // S pode ser numero ou string, valor default casonão informado tipo será string e não aceita passar tipo como boolean, objeto, etc..
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState<string>() // Definido que o state será do tipo string

newState.setState("6545") // é uma string
console.log(newState.getState())

newState.setState(123) // se adicionar um numero deve dar erro 
console.log(newState.getState())