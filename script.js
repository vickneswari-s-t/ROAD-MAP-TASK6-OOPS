
// task -a
class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  get ratingmovie() {
    return this.rating
  }
}

const movie1 = new movie("")
const movie2 = new movie("leo", "seven green studio", "PG13")
console.log(movie1.rating);
console.log(movie2.title);
console.log(movie2.studio);
console.log(movie2.rating);


// task b:
class circle {
  constructor(radius, colour) {
    this.radius = radius;
    this.colour = colour;
  }
  get radiuscircle() {
    return this.radius;
  }
  set radiuscircle(radius) {
    this.radius = radius;
  }
  get colourcircle() {
    return this.color
  }

  set colourcircle(colour) {
    this.colour = colour;
  }

  get tostring() {
    return `"circle[radius=${this.radius},color=${this.color}]"`
  }

  get areacircle() {
    return Math.PI * this.radius * this.radius;
  }
  getcircumferencecircle() {
    return 2 * Math.PI * this.radius
  }
}


var obj = new circle(1.0, "red");

console.log(obj.radiuscircle);
obj.radiuscircle = 2.5
console.log(obj.radiuscircle);

console.log(obj.colorcircle);
obj.colorcircle = 2.5
console.log(obj.colorcircle);

console.log(obj.tostring);

console.log(obj.areacircle);

// 

/// write person class to hold all the details
class person {
  constructor(title, age, gender) {
    this.title = title;
    this.age = age;
    this.gender = gender;
  }
}
var person1 = new person("vicky", 25, "female")
console.log(person1.title1);
console.log(person1.age);
console.log(person1.gender);

// 
// write class to calculate the uber price.
class uberprice {
  constructor(kilometer, price = 25) {
    this.kilometer = kilometer;
    this.price = price;
  }
  get pricecalculator() {
    return this.price * this.kilometer;

  }
  get pricecalculate() {
    return this.price * this.kilometer;
  }
}
let uberprice1 = new uberprice(10, 80);
let uberprice2 = new uberprice(20, 80);
let uberprice3 = new uberprice(20, 80);
console.log(uberprice1.pricecalculate);
console.log(uberprice2.pricecalculate);
console.log(uberprice3.pricecalculate);
