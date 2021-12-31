//FINDING THE SOLUTIONS TO THE DIOPHANTINE EQUATION
let x, y;
function diophantineEquation(a,b) {
// Base Case
    if (b == 0) {
        x = 1;
        y = 0;
        return a;
    }

    // Recursively find the gcd
    else {
        let g = diophantineEquation(b, a % b);
        let x1 = x, y1 = y;
        x = y1;
        y = x1 - Math.floor(a / b) * y1;
        return g;
    }
}

function updateDE(a,b,c) {
    var ade = parseInt(a.value);
    var bde = parseInt(b.value);
    var cde = parseInt(c.value);
    console.log(ade,bde,cde);
    console.log(a.value, b.value, c.value);
    if (c.value === "" || a.value === "" || b.value === "") {
        document.getElementById("cursed-img").innerHTML = ("There is no solutions for the given set");
    }
    else if (cde % diophantineEquation(ade,bde) !== 0) {
        document.getElementById("cursed-img").innerHTML = "There is no solutions for the given set of values."
    }
    else if (cde % diophantineEquation(ade,bde) === 0) {
        document.getElementById("cursed-img").innerHTML = ("A particular solution set for this set is x= "+ x*(cde / diophantineEquation(ade,bde)) + " and y= "+ y*(cde / diophantineEquation(ade,bde)));
        document.getElementById("set-of-all-xsoln").innerHTML = ("x= "+ x*(cde / diophantineEquation(ade,bde)) +" + " + (bde/findGCD(ade,bde)) + "n");
        document.getElementById("set-of-all-ysoln").innerHTML = ("y= " + y*(cde / diophantineEquation(ade,bde)) + " - " + (ade/findGCD(ade,bde)) + "n");
    }
}

//FINDING GCD OF TWO NUMBERS
function findGCD(agcd,bgcd) {
    agcd = Math.abs(agcd);
    bgcd = Math.abs(bgcd);
    while(bgcd) {
        var q = bgcd;
        bgcd = agcd % bgcd;
        agcd = q;
    }
    return agcd;
}

function updateFindGCD(gcda,gcdb) {
    if(gcda.value === "" && gcdb.value !== "") {
        var x1val = 1;
        var x2val = parseInt(gcdb.value);
        document.getElementById("ansgcd").innerHTML = ("The gcd of "+x1val+" and "+x2val+" is "+findGCD(x1val,x2val));
    }
    else if (findGCD(parseInt(gcda.value),parseInt(gcdb.value)) === 105) {
        playsuperidol();
        var x1val = parseInt(gcda.value);
        var x2val = parseInt(gcdb.value);
        document.getElementById("ansgcd").innerHTML = ("The gcd of "+x1val+" and "+x2val+" is "+findGCD(x1val,x2val));
    }
    else if(gcdb.value === "" && gcda.value !== "") {
        var x1val = parseInt(gcda.value);
        var x2val = 1;
        document.getElementById("ansgcd").innerHTML = ("The gcd of "+x1val+" and "+x2val+" is "+findGCD(x1val,x2val));
    }
    else if (gcda.value === "" && gcdb.value === "") {
        var x1val = 1;
        var x2val = 1;
        document.getElementById("ansgcd").innerHTML = ("The gcd of "+x1val+" and "+x2val+" is "+findGCD(x1val,x2val));
    }
    else {
        var x1val = parseInt(gcda.value);
        var x2val = parseInt(gcdb.value);
        document.getElementById("ansgcd").innerHTML = ("The gcd of "+x1val+" and "+x2val+" is "+findGCD(x1val,x2val));
    }
}


//FINDING LINEAR CONGRUENCES
const numsinrange = [];
function linearCongruences(alc, blc, mlc) {
    for (let index = 0; index < mlc; index++) {
        if ((index*alc) % mlc === blc) {
            numsinrange.push(index);
        }
    }
}

function updateLC(a,b,m) {
    var avars = parseInt(a.value);
    var bvars = parseInt(b.value);
    var mmodv = parseInt(m.value);
    if (m.value === "" || a.value === "") {
        document.getElementById("anslc").innerHTML = "No specified modulous or a value, please enter values."
        while(numsinrange.length > 0) {
            numsinrange.pop();
        }
    }
    else if (bvars > mmodv) {
        console.log(a.value,b.value,m.value);
        document.getElementById('anslc').innerHTML = "Your congruence 'c' value is bigger than modulous 'm', please enter a valid congruence."
    }
    else {
        console.log(b.value, m.value);
        linearCongruences(avars, bvars, mmodv);
        document.getElementById("anslc").innerHTML = ("The set of x that satisfy the congruence are x=" + numsinrange.toString());
        while(numsinrange.length > 0) {
            numsinrange.pop();
        }
    }
}

//ADDING TWO NUMS
function addingTwoNum(x1,x2) {
    return x1 + x2;
}

function updateAnsa2(x1,x2) {
    if (x1.value === "" && x2.value !== "") {
        var x1val = 0;
        var x2val = parseInt(x2.value);
        document.getElementById("ansa2").innerHTML = (x1val+" + "+x2val+" = "+addingTwoNum(x1val,x2val));
    }
    else if(x2.value === "" && x1.value !== "") {
        var x1val = parseInt(x1.value);
        var x2val = 0;
        document.getElementById("ansa2").innerHTML = (x1val+" + "+x2val+" = "+addingTwoNum(x1val,x2val));
    }
    else if (x1.value === "" && x2.value === "") {
        var x1val = 0;
        var x2val = 0;
        document.getElementById("ansa2").innerHTML = (x1val+" + "+x2val+" = "+addingTwoNum(x1val,x2val));
    }
    else {
        var x1val = parseInt(x1.value);
        var x2val = parseInt(x2.value);
        document.getElementById("ansa2").innerHTML = (x1val+" + "+x2val+" = "+addingTwoNum(x1val,x2val));
    }
}


// SUBTRACTING TWO INTEGERS
function subtractingTwoNum(sx1,sx2) {
    return sx1 - sx2;
}

function updateAnsS2(sx1,sx2) {
    if(sx1.value === "" && sx2.value !== "") {
        var sx1val = 0;
        var sx2val = parseInt(sx2.value);
        document.getElementById("anss2").innerHTML = (sx1val+" - "+sx2val+" = "+subtractingTwoNum(sx1val,sx2val));
    }
    else if(sx2.value === "" && sx1.value !== "") {
        var sx1val = parseInt(sx1.value);
        var sx2val = 0;
        document.getElementById("anss2").innerHTML = (sx1val+" - "+sx2val+" = "+subtractingTwoNum(sx1val,sx2val));
    }
    else if (sx1.value === "" && sx2.value === "") {
        var sx1val = 0;
        var sx2val = 0;
        document.getElementById("anss2").innerHTML = (sx1val+" - "+sx2val+" = "+subtractingTwoNum(sx1val,sx2val));
    }
    else {
        var sx1val = parseInt(sx1.value);
        var sx2val = parseInt(sx2.value);
        document.getElementById("anss2").innerHTML = (sx1val+" - "+sx2val+" = "+subtractingTwoNum(sx1val,sx2val));
    } 
}







//AUDIOS AND LITTLE EASTER EGGS!
var audio3 = new Audio();
function playsuperidol() {
    audio3.src = './superidol.mp3';
    audio3.play();
}

var audio2 = new Audio();
function lowerVol() {
    if (audio2.volume === 0) {
        return;
    }
    else {
        audio2.volume -= 0.1;
    }
}

function increaseVol() {
    if (audio2.volume === 1) {
        return;
    }
    else {
        audio2.volume += 0.1;
    }
}

function playshrek() {
    var audio = new Audio();
    audio.src = './kekw2.mp3';
    audio.play();
}

function playcringenaynay() {
    audio2.src = './kekw.mp3';
    audio2.play();
}

function updateimage() {
    var myimg = new Image();
    myimg.src = './wronginput.jpg';
    playshrek();
    document.getElementById("cursed-img").appendChild(myimg);
}