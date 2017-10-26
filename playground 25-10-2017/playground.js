function add (a, b) {
return a + b 
}



pole = [23, 4, 8, 5]
/*for (var i = 0; i <= (pole.length); i++) {
    debugger
console.log(pole[i]); 
}*/ 


/*pole = [23, 4, 8, 5]

function isEven () {
    for (var i = 0; i < (pole.length); i++) {
    debugger
    var even = pole[i] % 2;
    console.log(even);
};
} */



/*pole.forEach(iter)

function iter (elem, index, arr) {
    debugger
    console.log(elem, index, arr);
}*/


/*pole2  = [3, 7, 8, 15]; 

var result = pole2.map(function(e) {
return e*2; 
});*/


/*var numbers = [10, 8, 6, 4, 50, 70, 100, 4, 200];

var smallerThanFifty = numbers.filter(function(number) {
    return number < 50;
});*/ 


function divideByTwo (n) {
    return n / 2; 
};

pole = [4, 6, 7, 8];

var result = pole.filter(function(e) {
return e % 2 === 0;
})
.map(divideByTwo)
.forEach(function(elem) {
    console.log(elem);
});



// tasks: 
fluent interface 
learn reduce 

