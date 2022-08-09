interface InterfaceGame {
    id?: string | number;
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[]; // Opcional
    getSimilars?: (title: string) => void;
}

const tlou: InterfaceGame = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    // platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

// tlou.genre = "teste" // Não é possível modificar, pois está como readonly
console.log(tlou.genre)

if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}

interface InterfaceDLC extends InterfaceGame {
    originalGame: InterfaceGame;
    newContent: string[];
}

const leftbehing: InterfaceDLC = {
    title: "The Last of Us - Left Begind",
    description: "You play as Elli before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characetrs"]
}

class CreateGame implements InterfaceGame {
    title: string;
    description: string;
    genre: string;

    constructor (title: string, description: string, genre: string) {
        this.title= title;
        this.description= description;
        this.genre= genre;
    }    
}
