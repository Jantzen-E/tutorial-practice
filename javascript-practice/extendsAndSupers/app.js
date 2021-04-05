//there is a method called eat on the pet class and on the dog class
//if you console.log the name of a dog that is defined then .eat(), it will return the eat method from the dog
//class instead of the pet class because of the order that it works
//it checks to see in the dog class if there is an eat method and if not, it goes up and finds the 
//eat method on the Pet class where the constructor is because the dog class uses the keyword 'extends'

class Pet {
    constructor(name, age) {
        console.log('in pet constructor')
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

//the keyword super means that it uses the base Pet class name and age from where it is extending from
//that uses concepts of inheritance because using super inherits the name and age from the base class 'Pet'
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('in cat constructor')
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowwwwwww';
    }
}

class Dog extends Pet {
    bark() {
        return 'ruff ruff';
    }
    eat() {
        return `${this.name} scarfs his food!`
    }
}