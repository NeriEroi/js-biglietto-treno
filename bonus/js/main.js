// Quanti chilometri?

var howLong = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

console.log(howLong);


// Quanti anni hai?

var yourAge = parseInt(prompt("Quanti anni hai?"));

console.log(yourAge);


// Prezzo biglietto

var price = 0.21 * howLong;


// Sconto minorenni

var discount_min = 0.8;


//Sconto over 65

var discount_over = 0.4;


// Condizioni

if (yourAge < 18)
{
    price = price * discount_min;
}
else if (yourAge > 65)
{
    price = price * discount_over;
}
else if (18 < yourAge < 65)
{
    price = price;
}

// document.writeln(price);

document.getElementById("ticket").innerHTML="Prezzo del biglietto: " + price;







