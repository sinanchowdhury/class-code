
// ver ki type er jante chaile

var price = 10;
console.log(typeof price);

// ............................


// var er text choto thke boro korte hoi

var nameis = "sinan CHOWDhury" 
console.log(nameis. toUpperCase());
 console.log(nameis. toLowerCase());   //boro theke choto korte chaile

 // ............................


// kono var ke 2 bhage alada korte chaile

var promise = "I give you promise"
console.log(promise.split('I'));

// ............................


// parseFloat - (dosmik  ke songkhai rupentor kore  number and string ke jog kora)

var number1 = 10;
var number2 ='10.5';

number2 = parseFloat(number2)
console.log(number1 + number2);

// ............................


// parseInt - ( dosomik er por sob kete fela)

var number3 = 10;
var number4 = 10.10;
number4 = parseInt(number4)
console.log(number3 + number4)

// ............................ (ata age a dewa uchit)


// kono dosomik wala manke 3 gorer modde dekhate chaile

var number5 = 10.0980989;
var number6 = 12.9820930;
var total = number5 + number6
total = total.toFixed(3);  // akhane dosomik er por joto lagbe lekha jabe . amer ta ta lagbe tai ami 3 laksi
console.log(total);

// ............................


//  vhagfol/vhagses nirnoi


var n1 = 25;
var n2 = 5;
var total = n1 / n2;       // bhagses bahir korte chaile (%) <- aita use korte hobe
console.log(total);

// ............................



// abs - ( kono rinattok manke dhonattok korte chaile)

var cc = -5;
var result = Math.abs(cc);
console.log(result);


// ............................


// round -(jodi kono sonkha purno korte hoi taile aita use korte hobe)

 var numm = 5.56;
 var result = Math.round(numm)
 console.log(result);
                                  // half er age and pore thkle ki hobe 2 ta ui dekhano holo
 var numm = 5.46;
 var result = Math.round(numm)
 console.log(result);

 // ............................

 // ceil - dosomil ke bariye purno sonkhai rupantor kora


 var nimm = 9.56;
 var result = Math.ceil(nimm)
 console.log(result);

 //..........................


  // floor - dosomil ke komiue purno sonkhai rupantor kora


  var niimm = 9.56;
  var result = Math.floor(niimm)
  console.log(result);
 
  //..........................


// random number ( lotary er time a use korte parbo)

var numberL = Math.random()*10;
var result = Math.round(numberL);
console.log(result)

//.........................

// Array //
// kono array er position bahir korte chaile 

var friendAge1 = [11,12];
var in1 = friendAge1.indexOf(1);
console.log(in1);


//position er value change korte chaile 

var fri = [11,12]
fri [0]= 13
console.log(fri)


            // push-- array te position add korte chaile

            var addd = [11,111,1111];
            addd.push(111111);
            console.log(addd);
                                                
            //pop--array te kisu bahir korte chaile

            var addd = [11,111,1111];
            addd.pop(11111);
            console.log(addd);
// 2tar ui last thke kete jabe


//  shift -- array er prothm thke bad dite chaile shift use korte hoi

var fri = [11,12]
fri.shift();
console.log(fri);

//  unshift -- array er prothom thke add dite chaile sunhift use korte hoi
var friiii = [11,12]
friiii.unshift(14);
console.log(friiii);

//kono array te 11 ta element ase and frist 3 ta and last 3 ta bad dite chaile

var slices = [11,12,13,14,15,16,17,18,18,19,10]
var slicee = slices.slice (2,9 )
console.log(slicee)


//...................


// while loop type style 


var valueIs = 10
while (valueIs <= 10){
    console.log(valueIs)
    valueIs++;
}

//forloop type style 

var forit = 10;
for( var i = 0 ; i < 10 ; i++){
    console.log(forit);
}


//....................

// swap - var er man poriborton korte chaile 

//1st system 
// var temp= a;
// a=b;
// b=temp;
// console.log("after swap: a=", a, "b=",b);

//2nd system

 var p=5;
 var q=6;
 [p,q]=[q,p];
 console.log("after swap:p=",p, "q=",q);

 //3rd systam

 var x = 5
 var y =10;
 x= x+y;
 y= x-y;
 x=x-y;
 console.log("after swap:x=",x, "y=",y);

 //.........................

 //max -- onk gulo maner sob thke boro ta bahir korte chaile

  var man = 10
  var woman = 30
 var girl = 40
 var max = Math.max (man , woman , girl);
 console.log(max)

 // find thke largest element of an array (sob thke boro man bahir kora )

  var mark = [23,21,56,67,23,]
  var max = mark[0];
  for(var i = 0; i<mark.length; i++){
    var element = mark[i]
    if(element>max){
        max=element;
    }
  }
  console.log("higerest value is:",max);

  //............................
