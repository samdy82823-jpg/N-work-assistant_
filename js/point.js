
const messageTotal = document.getElementById("messageTotal");

const discountPoint = document.getElementById("discountPoint");

const discountMoney = document.getElementById("discountMoney");
const normalDate = document.getElementById("normalDate");

const eventDate = document.getElementById("eventDate");

const clear = document.getElementById("clear");

console.log("point.js 已載入");

console.log(eventDate);

const money = document.getElementById("money");

const totalPoint = document.getElementById("totalPoint");

const normalPoint = document.getElementById("normalPoint");

const eventPoint = document.getElementById("eventPoint");

console.log("eventDate =", eventDate);

const calculate = document.getElementById("calculate");

const messagePoint = document.getElementById("messagePoint");

calculate.onclick = function(){

    let price = Number(money.value);

    // 先取滿100元
let validAmount = Math.floor(price / 100) * 100;

// 再計算10%點數
let total = validAmount * 0.1;

    let normal = Math.floor(total*0.2);

    let event = total - normal;

    totalPoint.innerText = total;

    normalPoint.innerText = normal;

    eventPoint.innerText = event;

    messageTotal.innerText = total;

clear.onclick = function(){

    money.value = "";

    totalPoint.innerText = 0;
    normalPoint.innerText = 0;
    eventPoint.innerText = 0;

    messageTotal.innerText = 0;
    messagePoint.innerText = 0;

    discountPoint.innerText = 0;
    discountMoney.innerText = 0;

    normalDate.innerHTML = "下次消費即可折抵";

    console.log(eventStart);
    console.log(eventEnd);
    eventDate.innerHTML = eventStart + " ～ " + eventEnd;

    money.focus();

}
discountPoint.innerText = normal;

discountMoney.innerText = normal;
    
normalDate.innerHTML = "下次消費即可折抵";

eventDate.innerHTML = eventStart + " ~ " + eventEnd;

messagePoint.innerText = total;

}