//  1) Create an object representing a car with properties make, model, and year.
// Use Object.freeze() to prevent modifications, then try to change the model and display the result.

var car={
    make:'abc',
    model:'old',
    year:1999
}
console.log(car);
Object.freeze(car);
car.model='new'
console.log(car);
console.log(Object.isFrozen(car));

// 2) Create an object representing a user with properties name, age, and email.
// Use Object.isFrozen() to check if the object is frozen and display the result.

var user={
Name:'shiva',
age:21,
email:'shivareddy0855@gmail.com'
}
console.log(Object.isFrozen(user));
console.log(user);

// 3) Create an object representing a product with properties name, category, and price.
// Use Object.isSealed() to check if the object is sealed and display the result.


let product={
    Name:'santoor',
    category:'soap',
    price:50
}
console.log(Object.isSealed(product));
console.log(product);

//4) Create an object representing a laptop with properties brand, model, and price.
//Use Object.keys() to list all the keys in the object and display them.

let laptop={
    brand:"dell",
    model:'intel5',
    price:'70000'
}
console.log(Object.keys(laptop));

//5) Create an object representing a house with properties location, size, and price.
// Use Object.values() to retrieve all values from the object and display them.

var house={
    location:'hyderabad',
    size:'189',
    price:'20000000'
}
console.log(Object.values(house));

// 6) Create an object representing a smartphone with properties brand, model, and price. 
// Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
 var smartphone={
    brand:'oneplus',
    model:'2t5g',
    price:30000
 }
 Object.seal(smartphone);
 smartphone.price=50000
 console.log(Object.isSealed(smartphone));
 console.log(smartphone);
 
 // 7) Create an object representing a book with properties title, author, and publishedYear. 
 // Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().

var book={
    title:'python',
    author:'gauido van',
    publishedyear:1969
}
Object.freeze(book)
book.publishedyear=1999
console.log(Object.isFrozen(book));
console.log(book);

// 8) Create an object representing a person with properties firstName, lastName, and age. 
// Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.

var person={
    firstname:'shiva',
    lastname:'reddy',
    age:21
}
console.log(Object.keys(person));
console.log(Object.values(person));

// 9) Create an object representing a course with properties title, instructor, and duration. 
// Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.

var course={
    title:'fullstack',
    instructor:'vamsi sir',
    duration:'6 months'
}
console.log(Object.entries(course));
delete course.duration
console.log(course);

// 10) Create an object representing an employee with properties name, position, and salary. 
// Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.

var employees={
    NAME:'shiva',
    position:'developer',
    salary:50000
}
Object.seal(employees);
employees.position='hr'
employees.transport="cab"
console.log(employees);
console.log(Object.keys(employees));

// string methods

// 1) Write a program where you need to extract the middle part of the string and converted it to upperacse
var extract='shivareddy';
console.log(extract.slice(3,7).toUpperCase());

// 2) Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var string='shiva';
console.log(string.toUpperCase()+" "+string.length);

// 3) Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
var n='shiva';
console.log(n.charAt(2)+" "+n.charCodeAt(2));

// 4) Write a program that removes extra spaces from the start and end of a string,
// and then slices a portion of the string starting from the second character to the fourth character.
var prog=' shivareddy ';
var trimmed=prog.trim();
console.log(trimmed.slice(2,5));

// 5)Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
 var var1='SHIVA';
 var var2='REDDY';
console.log(var1.concat(var2.toLowerCase()));

// 6) Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
 var var3='  shivareddy';
 var trimm=var3.trimStart();
 console.log(trimm.slice(2));
  
 // 7) Write a program that retrieves a specific character from a string and converts it to uppercase.

var var4='shiva';
console.log(var4.charAt(1).toUpperCase());

// 8) Write a program that removes trailing spaces from a string and then concatenates it with another string.
var var5='  shiva';
var var6='reddy';
console.log(var5.trim().concat(var6));

// 9) Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.

var input='  helloworld  ';
console.log(input.trim().toUpperCase().slice(2,6));

// 10) Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.

var string1='HELLO';
var string2='WORLD';
var lower1=string1.toLowerCase();
var lower2=string2.toLowerCase();
var concat=string1+' '+string2;
console.log(concat," ",concat.charAt(0));

