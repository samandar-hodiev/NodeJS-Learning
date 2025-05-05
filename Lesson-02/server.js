
// const {info:{id, fName, phone:[uzb, ru]}} = require('./data');

// console.log(id);
// console.log(fName);
// console.log(uzb);
// console.log(ru);




// import a from './data.js';

// console.log(a);



function user(fname, lName, age){
    this.lName = lName;
    this.fname = fname;
    this.age = age;
};

function user2(fname, lName, age) {
    this.lName = lName;
    this.fname = fname;
    this.age = age;
};


console.log(new user('Samandar', 'Hodiev', 22) instanceof user2);
