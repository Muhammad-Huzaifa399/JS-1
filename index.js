// chpter 1:

// q1
// alert ("welcome");

// q2
// alert ("Error! Please enter a valid password.");

// q3
// alert ("Welcome to JS Land...\nHappy Coding!");

// q4
// alert ("Welcome to JS Land...");
// alert ("Happy Coding!\nPrevent this page from creating additional dialogs.");

// q5
// console.log("Hello... I can run JS through my web browser's console");

// q6
// alert ("greetings");



// chapter2:

// q1
// var myName="username";
// console.log(myName);

// q2
// var myName="Muhammad Huzaifa";
// console.log(myName);

// q3
// var message;
// message="Hello World";
// alert(message);

// q4
// name
// var myName;
// myName="jhone Doe"; 
// alert(myName);

// // age
// var age;
// age="15 years old"; 
// alert(age);

// // certificate
// var certif;
// certif="Certified Mobile Application Development"; 
// alert(certif);

// q5
// var data;
// data="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(data);

// q6
// var email="my email address xyz@gmail.com";
// alert(email);

// q7
// var book;
// book="A samrter Way to learn JavaScript";
// alert(book);

// q8
// document.write("Yah! I can write HTML content through JavaScript");

// q9
// alert ("------------------ஐ۩۞۩ஐ------------------");


// chapter 3

// q1
// var age;
// age="I am 15 years old";
// alert(age);

// q2
// var visit;
// visit="You have visited this site 14 times";
// alert(visit);

// q3
// var dOB="My Birth year is 1990 <br> Data type of my declared variable is number";
// document.write(dOB);

// q4
// var data="<b>John Doe </b> ordered <b>5 T-shirt</b>(s) on XYZ Clothing store.";
// document.write(data);

// chapter 4

// q1
// // part-1
// var myName;
// var age;
// var eamil;

// // part-2
// // legal
// var my;
// var myname;
// var myName;
// var my_name;
// var my3;

// // illegal
// var My;
// var my name;
// var 3my;
// var my@name;
// var 3254;

// part-3
// // a
// var head = "<h1>Rules of naming JS variables</h1>";
// document.write(head);

// // b
// var legal = "Variable names can only contain , numbers, $ and _. For example : $my_1stVariable";
// document.write(legal+"<br>");

// // c
// var legal2 = "Variable must begin with a letter, $ or _ . For example: $name, _name or name <br>";
// document.write(legal2);

// // d
// var var_name = "Variable names are case sensitive <br>";
// document.write(var_name);

// // e
// var key = "Variable names should not be JS keywords";
// document.write(key);

// chapter 5

// q1
// var sum = "Sum of 3 and 5 is 8";
// document.write(sum + "<br>");

// q2
// // subtraction
// var sub = "subtraction of 3 and 5 is 2";
// document.write(sub + "<br>");

// // multiplication
// var multi = "multiplication of 3 and 5 is 15";
// document.write(multi + "<br>");

// // division
// var divi = "division of 3 and 5 is 0.6";
// document.write(divi + "<br>");

// // modulus
// var modu = "modulus of 3 and 5 is 3";
// document.write(modu + "<br>");

// q3
// // a
// var declare;

// // b
// document.write("Value after variable declaration is: " + declare + "<br>");

// // c
// declare = 5 ;

// // d
// document.write("Initial value:" + declare + "<br>");

// // e
// declare++;

// // f
// document.write("Value after increment is: " + declare + "<br>");

// // g
// declare += 7;

// // h
// document.write("Value after addition is: " + declare + "<br>");

// // i
// declare--;

// // j
// document.write("value after decrement is: " + declare + "<br>")

// // k
// var remain = declare % 3

// // l
// document.write("The remainder is: " + remain + "<br>")

// q4
// var ticketprice = 600;
// var nOT = 5;
// var total = ticketprice * nOT ;
// // output
// document.write("total cost to buy " + nOT + " ticket to a movie is " + total + " PKR");

// q5
// // var table = "table of 4";
// document.write("Table of 4 <br> 4x1=4 <br> 4x2=8 <br> 4x3=12 <br> 4x4=16 <br> 4x5=20 <br> 4x6=24 <br> 4x7=28 <br> 4x8=32 <br> 4x9=36 <br> 4x10=40 ")

// q6
// // a
// var celsius = 25 ;
// // b
// var cToF = ((celsius*9) / 5 + 32 );
// document.write(celsius + "°C is " + cToF + "°F<br>" );
// // c
// var fahrenheit = 70 ;
// // d
// var fToC = ((fahrenheit - 32) * 5 / 9);
// // output
// document.write(fahrenheit + "°F is " + fToC + "°C<br>" );

// q7
// document.write("<h1>Shopping Cart</h1> <br>");
// // a
// var item1 = 650;
// var quan1 = item1 * 3;
// document.write("Price of item 1 is " + item1 + "<br> Quantity of item 1 is 3 <br>");

// // b
// var item2 = 100;
// var quan2 = item2*7;
// document.write("Price of item 2 is " + item2 + "<br> Quantity of item 2 is 7 <br>");


// // c
// var charges = 100;
// document.write("Shipping Charges " + charges + "<br> <br>");
// var total = quan1 + quan2 + charges;
// document.write("Total cost of your order is " + total);

// q8
// document.write("<h1>Mark Sheet</h1> <br>");

// var total = 980;
// var marks = 804;
// var percent = marks/total *100;
// document.write("Total marks: " + total);
// document.write("<br> Marks obtained: " + marks);
// document.write("<br> Percentage: " + percent + "%");

// q9
// document.write("<h1>Currency in PKR</h1> <br>");
// var usd = 10;
// var usdToPkr = 104.80;

// var riyal = 25;
// var riyalToPkr = 28;

// var total = usd * usdToPkr + riyal * riyalToPkr;
// document.write("Total Currency in PKR: " + total);

// q10
// var program = ((2+5) *10) /2;
// document.write(program);

// q11
// document.write("<h1>Age Calculator</h1>");
// // current year
// var current = 2016;
// document.write("Current Year: " + current + "<br>");
// // birth year
// var birth = 1992;
// document.write("birth Year: " + birth + "<br>");
// // total
// var total = current - birth;
// document.write("Your age is: " + total);

// q12
// document.write("<h1>The Geometrizer</h1>");
// // a
// var radius = 20;
// document.write("Radius of a circle: " + radius + "<br>");

// // b
// // circumference
// var circumference = 2*3.142*20;
// document.write("The circumference is: " + circumference + "<br>");
// // area
// var area = 3.142 * 20**2;
// document.write("The area is: " + area + "<br>");

// q13
// document.write("<h1>The Life Time Supply Calculator</h1>");
// // a
// var snack = "chocolate chip";
// document.write("Favourite Snack: " + snack + "<br>");
// // b
// var age = 15;
// document.write("Current age: " + age + "<br>");
// // c
// var max_age = 65;
// document.write("Estimated Maximum Age: " + max_age + "<br>");
// // d
// var per_day = 3;
// document.write("Amount of snacks per day: " + per_day + "<br>");
// // e
// var rOL = (max_age - age) *3;
// document.write("you will need " + rOL + " chocolate chip to last you until the ripe old age of " + max_age);


