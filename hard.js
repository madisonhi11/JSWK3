// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//     Information)that cannot be accessed directly. The object should have at least two properties: name and
//     ssn. Only the name property should be accessible, and it should be called through a public function.
//     The ssn property should not be accessible at all.
//     Creating private objects and private properties helps you control who has access to what data and
//     helps you prevent people who shouldn't see important info like social security numbers from getting
//     access to the data.
//     You can use 'getName' or other get methods to access data that people might need. For example,
//     people addressing a package or email may need a customer's name, but they definitely shouldn't have
//     access to their ssn.


//Info that needs to be seen
class DMV {
    constructor(name,age){
        this.name = name ; //Unfriendly reminder-> madison stop putting semicolon and use equal signs
        this.age = age;
    }

}
class SSN {
   //was going to just private keyword but that wouldn't work just sitting next to constructor
   #privatefield
     constructor(){
        this.ssn =7773332220;
       
    }

}
let dmvInfo = new DMV("Madison", 18);

console.log(dmvInfo.name,dmvInfo.age);
