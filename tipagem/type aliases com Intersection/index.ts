// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string; // Email é opcional bastando usar (?)
}

const account: AccountInfo = {
    id: 123,
    name: "Tayron",
    email: "teste@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "Kayzen",
    level: 100
}

// Intersection
// PlayerInfo fazendo interceção (&) - composição
type PlayerInfo = AccountInfo & CharInfo 

const player: PlayerInfo = {
    id: 123,
    name: "tayron",
    nickname: "Kayzen",
    level: 100
}