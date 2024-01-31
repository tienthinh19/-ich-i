const wallet = require("./wallet");
const ticket = require("./ticket");
const game = require("./game");
const delay = require("./delay");
let myWallet = new wallet.Wallet("thinh", 10000);

console.log(myWallet.toString());
/**
 * 
 * @param {wallet.Wallet} wallet 
 * @returns {ticket.Ticket[]}
 */



async function muaVe(wallet) {
    let tickets = []
    tickets.push(new ticket.Ticket("n1", "vé thường", 10));
    tickets.push(new ticket.Ticket("v1", "vé vip", 20));
    tickets.push(new ticket.Ticket("v2", "vé supper vip", 30));

    await delay(2000);
    if (!wallet.pay(
        tickets[0].price + tickets[1].price + tickets[2].price
    )

    ) {
        console.log("không đủ tiền");
        return;
    }
    console.log(" mua vé thành công");
    console.log(wallet.toString());
    return tickets;
}
async function xoatVe(tickets) {
    for (let i = 0; i < tickets.length; i++) {
        await delay(1000);
        tickets[i].process = true;
        console.log("Đã xoát vé : " + tickets[i].name);
    }

    return tickets;
}

async function timGame(tickets) {
    await delay(1000);
    return new game.Game("1","game kinh dị", tickets);

}

async function xepHang() {
    await delay(1000);
    return new game.Game("1a", "xepHang", 10);
}

async function choi(vitri, theLoaiGame) {
    if (vitri.id != "1a") {
        console.log(theLoaiGame.toString(), 'check');
        // console.log(vitri.id)
        console.log("không có game");
        return  ticket;
    }
    await delay(1000);
    console.log("chơi game " + theLoaiGame + "vị trí đầu tiên");
}

(async () => {
    console.time("xem thời gian");
    let myTickets = await muaVe(myWallet);
    await xoatVe(myTickets);
    let myGame = await timGame(myTickets);
    console.log(myGame.toString());
    console.log(myWallet.toString());
    let myViTri = await xepHang();
    await choi(myViTri, myGame);
    console.timeEnd("xem thời gian");
})()

