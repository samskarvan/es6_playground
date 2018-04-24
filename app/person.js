class Person{
    constructor(name){
        this.name = name;
    }
    sleep(hours){
        return `<h1>${this.name} likes to sleep ${hours} every night.</h1>`;
    }
    drink(liquid){
        return `<h1>${this.name} enjoys drinking ${drink}.</h1>`;
    }
    speak(message){
        return `<h1>${this.name} says ${message}.</h1>`;
    }
}

class SuperPerson extends Person{
    constructor(name, heroName){
        super(name);
        this.heroName = heroName;
    }
    sayHeroName(){
        return this.speak(`I'm ${this.heroName}`);
    }
    runningTheTable(){
        return `<h1>${this.name} won all remaining games in the regular season</h1>`;
    }
    orderTacos(number) {
        return this.speak(`I'd like ${number} tacos please`);
    }
}
export default SuperPerson;