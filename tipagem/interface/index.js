var tlou = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    // platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
// tlou.genre = "teste" // Não é possível modificar, pois está como readonly
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehing = {
    title: "The Last of Us - Left Begind",
    description: "You play as Elli before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characetrs"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
