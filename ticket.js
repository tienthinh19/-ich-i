class Ticket{
    constructor(id,name,price,process=false){

        this.id = id;
        this.name = name;
        this.price = price;
        this.process = process;

    }
}
module.exports = { Ticket,};