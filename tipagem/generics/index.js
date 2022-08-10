// S => State
// T => type
// K => Key
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState(); // Definido que o state será do tipo string
newState.setState("6545"); // é uma string
console.log(newState.getState());
newState.setState(123); // se adicionar um numero deve dar erro 
console.log(newState.getState());
