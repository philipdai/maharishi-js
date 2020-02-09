// Functions are Objects
var report1 = function(val) {
  console.log(val);  
};

var report2 = new Function("val", "console.log(val);");
// report1("Expression");
// report2("Constructror");

report1.userName = 'Cen Dai';

var report3 = report1;
report3.userName = 'Philip Dai';
report3.showUser = function() {
    console.log(this.userName);
}

// dir(report1);

// First Class Functions
var sum = function(x, y) {
    return x + y;
};

var run = function(fn, a, b) {
    console.log(fn(a, b));
}

// run(sum, 3, 5);

// run(function(x, y) {
//     return x * y;
// }, 3, 5);

// Invoking Functions
var test = function(val) {
    console.log(this);
    console.log(arguments);
    console.log(val);
};

// test();
// test(1);
// test(1, 2, 3);

var sumIt = function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("sum:::", sum);
    return sum;
}

// Create Objects
var me = {
    firstName: 'Cen',
    lastName: 'Dai'
};
me.greeting = function() {
    console.log(this);
    console.log(arguments);
    console.log('Hello ' + this.firstName);
};

delete me.lastName;

'lastName' in me;
'greeting' in me;
'toString' in me;
me.hasOwnProperty('lastName');
me.hasOwnProperty('greeting');
me.hasOwnProperty('toString');

// Understanding this
// Examing this with Normal Function Invocation
var name = 'global';

var fun1 = function() {
    var name = 'fun1';
    console.log('From fun1 ---');
    console.log(this);
    console.log(this.name);
    fun2();

    return function fun3() {
        var name = 'fun3';
        console.log('From fun3 ---');
        console.log(this);
        console.log(this.name);
    }
}

var fun2 = function() {
    var name = 'fun2';
    console.log('From fun2 ---');
    console.log(this);
    console.log(this.name);
}

var runIt2 = function(fn) {
    var name = 'runIt2';
    console.log('From runIt2 ---');
    console.log(this);
    console.log(this.name);
    fn();
} 

// this with Method Invocation
var name11 = 'global';
var obj11 = {
    name11: 'obj11',
    fun11: function() {
        console.log('From fun11 ---');
        console.log(this);
        console.log(this.name11);
    }
};

var obj22 = {
    name11: 'obj22',
    fun22: obj11.fun11
};

var fun3 = function() {
    var name = 'fun3';
    console.log('From fun3 ---');
    console.log(this);
    console.log(this.name);
}

// this.fun3();

var obj33 = {
    name: 'obj33',
    fun33: fun3
};

var obj44 = {
    name: 'obj44',
    obj55: {
        name: 'obj55',
        fun55: function() {
            console.log('From fun5 ---');
            console.log(this);
            console.log(this.name);
        }
    }
};

var fun66 = function() {
    console.log('fun66');
};

fun66.name = 'fun66';

fun66.fun77 = function() {
    console.log('From fun77 ---');
    console.log(this);
    console.log(this.name);
};

var obj4 = {};
'toString' in obj4;
obj4.hasOwnProperty('toString');
obj4;

var arr = [1, 2, 3];
arr;

var date = new Date();
date;

obj4.toString = function() {
    console.log('This is obj4');
};

'toString' in obj4;
obj4.hasOwnProperty('toString');

delete obj4.toString;

'toString' in obj4;
obj4.hasOwnProperty('toString');


// The Prototype of Functions
var testFun = function() {
    console.log('testFun');
};
// dir(testFun);

// call and appy
var greetingFunc = function() {
    console.log('Good morning');
};

// greetingFunc.call();
// greetingFunc.apply();

var user1 = {
    firstName: 'John',
    lastName: 'Anderson',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var user2 = {
    firstName: 'Sara',
    lastName: 'West',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var greetingUser = function(term, punctuation) {
    console.log(term + ', ' + this.firstName + punctuation);
}

// greetingUser.call(user1, 'Good evening', '!');
// greetingUser.call(user2, 'Good morning', '.');
// greetingUser.apply(user1, ['Good evening', '!']);
// greetingUser.apply(user2, ['Good morning', '.']);

// console.log(user1.fullName.call({
//     firstName: 'Cen',
//     lastName: 'Dai'
// }));

// console.log(user1.fullName.call(user2));

// bind method
var greetingJohn = greetingUser.bind(user1, 'Good morning', '!');
// greetingJohn();

var greetingMe = greetingUser.bind({
    firstName: 'Cen',
    lastName: 'Dai'
}, 'Good afternoon');
// greetingMe('!');

// greetingMe.call(user1, '.');
// greetingJohn.call(user2);


//Invoking Function as Constructor: new
var o = new Object();

var Greeting = function() {
    console.log(this);
};

// var greet1 = new Greeting();
// var greet2 = new Greeting();

// greet1 === greet2;

// greet1 instanceof Greeting;
// greet2 instanceof Greeting;

// dir(Greeting);

// Constructor Invocation and the Value of this
Greeting();
new Greeting();

function User(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

User.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

var u1 = new User('Tom', 'Young');
var u2 = new User('Mary', 'King');

User('Miao', 'Wow');

// Detecting properties of object
var person1 = {
    firstName: 'Philip',
    lastName: 'Dai',
    email: 'philip.cen.dai@gmail.com',
    type: 'admin',
    active: true,
    address: {
        steet: '1000 N, Faifield',
        zip: '43212'
    }
};

for (var prop in person1) {
//     console.log("Name: " + prop);
//     console.log("Value: " + person1[prop]);
}

person1.propertyIsEnumerable('firstName');
person1.propertyIsEnumerable('toString');
Object.keys(person1);
Object.values(person1);
Object.entries(person1);

// Changing property of object
var obj = {
    height: 5,
    type: 'rectangle',
    width: 10
};

obj.propertyIsEnumerable('type');
Object.defineProperty(obj, 'type', {enumerable: false});
obj.propertyIsEnumerable('type');
Object.keys(obj);
Object.defineProperty(obj, 'type', {configurable: false});
delete obj.width;
obj;
delete obj.type;
obj;

// Making Objects Immutable
var obj1 = {
    firstName: 'Philip',
    lastName: 'Dai',
    startDate: 'Feb 08, 2020',
    type: 'admin',
};

Object.defineProperty(obj1, 'startDate', {
    writable: false
});

obj1.firstName = 'Yartoo';
obj1.startDate = 'Dec 25, 2019';
obj1;

Object.seal(obj1);

obj1.newProp = true;
delete obj1.type;
obj1;

obj1.firstName = 'Cen';
obj1;

Object.freeze(obj1);

obj1.newProp = 'xyz';
delete obj1.type;
obj1.firstName = 'Steve';
obj1;

// ES6 Object Features
var multiple = 5;
var obj2 = {
    start: 1,
    end: 100,
    multiple
};

var person2 = {
    firstName: 'Cen',
    lastName: 'Dai',
    fullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

var objProto = {
    fullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

var obj3 = {
    firstName: 'Cen',
    lastName: 'Dai'
}

Object.setPrototypeOf(obj3, objProto);

obj3;

var objA = {
    a: 0
};

var objB = {
    b: 5
};

var objC = {
    c: 10
};

var objX = {
    x: 8
};

// Object.assign(objX, objA, objB, objC); //assign will not copy the properties imutable or not owned
// objX;