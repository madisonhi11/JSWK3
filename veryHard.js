// VERY HARD: Object prototype chain and prototypal inheritance exercise.

//Same methods as hard.js madison (class)
// 1. Create a Person constructor that has three properties: name, job, and age.
let anExercise = "running";
class Person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job
    }
    // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".
exercise(){
    console.log(`WorkOutTimeApp| Todays workout is  ${anExercise}! | It's so fun definitely not boring ...not at all.`)
    }
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer".
fetchJob(){
    console.log(`${this.name} is a  ${this.job}.`)
    }

}
let personInput = new Person("Madison",18,"Coding Apprentice");
personInput.fetchJob();
personInput.exercise();

// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// -->'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.<--
let listLanguages=[ "German", "spanish", "french"];
let madisonh = "At work"  //"Free time"
class Programmer{
    constructor(name,age,job,language){
        this.name= name;
        this.age = age;
        this.job = job;
        this.language = language;
        this.busy = true;//default
    }// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.
    completeTask(){
        if (madisonh == "At work")
        return this.busy = true;
    }// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.
    offerNewTask(){
        if( this.busy = true)
        console.log("Madison can't accept any new tasks right now.")
   }
//  7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
//  to the programmer and list off all languages the programmer knows
 learnLanguage(){
    console.log( listLanguages)
 }
}





// 8. Test it out - can you create different programmers and run all the methods on them? Does
// each programmer maintain their own properties properly and independently of the other
// programmers?
let programmerIdentity = new Programmer (personInput.name, personInput.age, personInput.job,"English");
programmerIdentity.completeTask();
programmerIdentity.offerNewTask();
programmerIdentity.learnLanguage();


console.log(programmerIdentity)
console.log(personInput)
