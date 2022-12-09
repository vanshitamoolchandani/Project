var quantity = document.querySelectorAll('#quantity');
var amount = document.querySelectorAll('#amount');
var inc = document.querySelectorAll('#inc');
var dec = document.querySelectorAll('#dec');
var tot = document.querySelector('#total');

for (let i = 0; i < quantity.length; i++) {
    inc[i].addEventListener('click', () => {

        var q = Number(quantity[i].innerHTML) + 1;
        quantity[i].innerHTML = q;
        amount[i].innerHTML = calAmt(q);
        var ct = calTotal();

    });
}
for (let i = 0; i < quantity.length; i++) {
    dec[i].addEventListener('click', () => {

        var q = Number(quantity[i].innerHTML) - 1;
        quantity[i].innerHTML = q;
        amount[i].innerHTML = calAmt(q);
        var ct = calTotal();
    });
}

function calAmt(q) {
    var a =  23 * q;
    
    return a
}

function calTotal (){
    console.log("clicked");
    var t = Number(tot.innerHTML);
    console.log(t);
    for (let i = 0; i < amount.length; i++) {
        t = t+Number(amount[i].innerHTML);
    }
    tot.innerHTML = t;
}


function changeIcon(x) {
    x.classList.toggle("fa-solid");
  }