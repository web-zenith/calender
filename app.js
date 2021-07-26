// Code By Zenith From Np Codes Youtube Channel
let monthName = document.querySelector(".month-name");
let prev = document.querySelector(".prev");
let months = document.querySelector(".months");
let nos = document.querySelector(".num");
let jan = document.querySelector(".jan");
let feb = document.querySelector(".feb");
let mar = document.querySelector(".mar");
let apr = document.querySelector(".apr");
let may = document.querySelector(".may");
let jun = document.querySelector(".jun");
let jul = document.querySelector(".jul");
let aug = document.querySelector(".aug");
let sep = document.querySelector(".sep");
let oct = document.querySelector(".oct");
let nov = document.querySelector(".nov");
let dec = document.querySelector(".dec");
let usrDate = new Date().getMonth();
usrDate ++
check()
function check() {
    if (monthName.innerText === "January") {
        nos.innerHTML = "1";
        jan.style.display = "block";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";

    }
    else if (monthName.innerText === "February") {
        nos.innerHTML = "2";
        jan.style.display = "none";
        feb.style.display = "block";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "March") {
        nos.innerHTML = "3";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "block";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "April") {
        nos.innerHTML = "4";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "block";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "May") {
        nos.innerHTML = "5";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "block";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";

    }
    else if (monthName.innerText === "June") {
        nos.innerHTML = "6";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "block";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";

    }
    else if (monthName.innerText === "July") {
        nos.innerHTML = "7";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "block";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "August") {
        nos.innerHTML = "8";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "block";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "September") {
        nos.innerHTML = "9";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "block";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "October") {
        nos.innerHTML = "10";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "block";
        nov.style.display = "none";
        dec.style.display = "none";

    }
    else if (monthName.innerText === "November") {
        nos.innerHTML = "11";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "block";
        dec.style.display = "none";
    }
    else if (monthName.innerText === "December") {
        nos.innerHTML = "12";
        jan.style.display = "none";
        feb.style.display = "none";
        mar.style.display = "none";
        apr.style.display = "none";
        may.style.display = "none";
        jun.style.display = "none";
        jul.style.display = "none";
        aug.style.display = "none";
        sep.style.display = "none";
        oct.style.display = "none";
        nov.style.display = "none";
        dec.style.display = "block";
    }
        
}


prev.onclick = function () {
    if (monthName.innerText === "February") {
        monthName.innerText = "January";
        check()
    }
    else if (monthName.innerText === "March") {
        monthName.innerText = "February";
        check()
    }
    else if (monthName.innerText === "April") {
        monthName.innerText = "March";
        check()
    }
    else if (monthName.innerText === "May") {
        monthName.innerText = "April";
        check()
    }
    else if (monthName.innerText === "June") {
        monthName.innerText = "May";
        check()
    }
    else if (monthName.innerText === "July") {
        monthName.innerText = "June";
        check()
    }
    else if (monthName.innerText === "August") {
        monthName.innerText = "July";
        check()
    }
    else if (monthName.innerText === "September") {
        monthName.innerText = "August";
        check()
    }
    else if (monthName.innerText === "October") {
        monthName.innerText = "September";
        check()
    }
    else if (monthName.innerText === "November") {
        monthName.innerText = "October";
        check()
    }
    else if (monthName.innerText === "December") {
        monthName.innerText = "November";
        check()
    }
    else if (monthName.innerText === "January") {
        monthName.innerText = "December";
        check()
    }
}

let next = document.querySelector(".next");
next.onclick = function () {
    if (monthName.innerText === "January") {
        monthName.innerText = "February";
        check()
    }
    else if (monthName.innerText === "February") {
        monthName.innerText = "March";
        check()
    }
    else if (monthName.innerText === "March") {
        monthName.innerText = "April";
        check()
    }
    else if (monthName.innerText === "April") {
        monthName.innerText = "May";
        check()
    }
    else if (monthName.innerText === "May") {
        monthName.innerText = "June";
        check()
    }
    else if (monthName.innerText === "June") {
        monthName.innerText = "July";
        check()
    }
    else if (monthName.innerText === "July") {
        monthName.innerText = "August";
        check()
    }
    else if (monthName.innerText === "August") {
        monthName.innerText = "September";
        check()
    }
    else if (monthName.innerText === "September") {
        monthName.innerText = "October";
        check()
    }
    else if (monthName.innerText === "October") {
        monthName.innerText = "November";
        check()
    }
    else if (monthName.innerText === "November") {
        monthName.innerText = "December";
        check()
    }
    else if (monthName.innerText === "December") {
        monthName.innerText = "January";
        check()
    }
    
    
}