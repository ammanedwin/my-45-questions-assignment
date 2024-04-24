// // question- 

// console.log  ("Hello world");

// //  question- 
// let myname: string = "Amman"; 

// console.log(`Hello ${myname}, would you like to learn some TypeScript today?`); 

// //  question- 
// let name: string = "\t\n Amman \t\n"; 

// console.log(name); 
// console.log(name.trim()); 

// //  question- 
// let name: string = "Amman"; 

// console.log(name.toLowerCase());  
// console.log(name.toUpperCase());  
// console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

//  question- 01: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// Question 02: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;

console.log(message);
// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
let myname: string = "\t\n Amman \t\n"; 

console.log(myname); 
console.log(myname.trim()); 

// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.

console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division

// Question 8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4); // Addition
console.log(12 - 4); // Subtraction
console.log(8 * 1); // Multiplication
console.log(16 / 2); // Division

// Question 9: Favorite Number: Store your favorite number in a variable. Then, 
// create a message revealing your favorite number. Print that message.

let favoriteNumber: number = 8; 
console.log(`My favorite number is ${favoriteNumber}.`); 

// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, 
// write one sentence describing what the program does.

// Amman, 03/11/2024
// This program prints a personal message.
let myName: string = "Amman";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// Question 11: Names: Store the names of a few of your friends in an array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["sunil", "habil", "jasper"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
// print a message to them. The message should be the same for each person, but personalized with their name.

let personnames: string[] = ["sunil", "habil", "jasper"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Honda motorcycle", "Tesla car", "Hodnda bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ["sunil", "Habil", "Jasper"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, 
// so you need to send out a new set of invitations with a replacement guest.

let unableToAttend = "Sunil";
console.log(`${unableToAttend} can't make it to dinner.`);


let newGuest = "Habil";
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let Myguests: string[] = ["samson", "sharoon", "sky"];
console.log("Great news! I found a bigger dinner table!");


guests.unshift("Sameer");
guests.splice(guests.length / 2, 0, "Sager");
guests.push("Dawood");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); 

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let places: string[] = ["germany", "Iceland", "U.S.A", "canada", "Itly"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to 
// print a message indicating the number of people you are inviting to dinner.

 let Myguests2 : string[] = ["sunil", "habil", "jasper", "sky", "sameer"];
 console.log(`I am inviting ${guests.length} people to dinner.`);

// Question 20: Think of something you could store in an array. For example, you could make a list of 
// mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
// containing these items.

let countries: string[] = ["india", "dubai", "New Zealand", "korea", "africa"];
console.log("Countries I'd like to visit:", countries);

// Question 21: Think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

// Question 22: Intentional Error: Try to produce an array index error in one of your programs. 
// Correct the error before finishing.

let friends: string[] = ["sameer", "sky", "jasper"];

console.log(friends[3]); 
friends[2] = "jasper"; 

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car = 'tasla';

console.log("Is car == 'tasla'? I predict True.");
console.log(car == 'tasla'); 

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); 


// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log(`"apple" == "Apple"`); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); 

// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. 
// Assign 'green', 'yellow', or 'red' to a variable called alien_color.


let alien_color = "red";
if (alien_color == "red") {
  console.log("You just earned 2.5 points!");
}

alien_color = "red";
if (alien_color == "yellow") {
    console.log("Try one more time");
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

// Version that passes:
let alien_colors = "red";

alien_color = "red";
if (alien_color == "red") {
  console.log("You just earned 2.5 points for shooting the alien");
} else {
  console.log("You just earned 5 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 2.5 points for shooting the alien!");
} else {
  console.log("You just earned 5 points!");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.



// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

export {} 

// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 90;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favorite_fruits: string[] = ["peach", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("peach")) {
  console.log("You really like peach!");
}
if (favorite_fruits.includes("cherries")) {
    console.log("You really like cherries!");
  }

//   Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});

// Question 31: No Users: Ensure your user list isn’t empty.

let myusernames: string[] = [];

if (myusernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.

// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9","User10"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzas: string[] = ["pepperoni", "tikka", "fajita" ,"meat pizza"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// Question 35: Animals: Highlight animals with a common trait.

let animals: string[] = ["dog", "loin", "horse"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

// Question 36: T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("small", "Coding is my passion");

// Question 37: Large Shirts: Default values in make_shirt().
function my_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

my_shirt(); 
my_shirt("medium"); 
my_shirt("small", "Dive into Coding"); 

// Question 39: City Names: Formatting city-country pairs.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

// Question 40: Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        let album: {
    artist: string;
    title: string;
}
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", ));

// Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["David Blaine", "Derren Brown", "Teller","Apollo"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

// Question 42: Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
show_magicians(magicians); 

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians2: string[] = ["David Blaine", "Derren Brown", "Teller","Apollo"];

function make_great2(magicians: string[]): string[] {
    let greatMagicians2: string[] = []; // Removed the extra colon
    magicians.forEach(magician => {
        greatMagicians2.push(`${magician} the Great`);
    });
    return greatMagicians2;
}

let greatMagicians2 = make_great2(magicians2.slice()); // Use make_great2 and magicians2

// Assuming show_magicians is defined like this:
function show_magicians2(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

console.log("Original magicians:");
show_magicians(magicians2); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians2); // Shows modified names

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("turkey meat", "cheese" ," garlic sauce");
make_sandwich("veg's", "lettuce", "tomato");
make_sandwich("chicken sources", "chicken tikka", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: any = { manufacturer, model }; // Corrected object declaration and property assignment
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "black"], ["year", 2024]));
console.log(make_car("Honda", "civic", ["color", "blue"], ["sunroof", true]));
