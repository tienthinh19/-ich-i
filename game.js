class Game{
    constructor(id, name,tickets)
    {
        this.id = id;
        this.name = name;
        this.tickets = tickets;
    }
    toString(){
        return `Game: ${this.name}  `;
    }
}
module.exports = { Game,};