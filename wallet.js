class Wallet {
    constructor(uid,money){

        this.uid = uid;
        this.money = money;

    }
    toString(){
        return `Wallet: ${this.uid} , ${this.money} `;
    }
pay(amount) {

        if (this.money >= amount) {
            this.money -= amount;
            return true;
        } 
        return false;
}
}

module.exports = { Wallet,};
