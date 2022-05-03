// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"
var todaysExercise ="Running";
//var todaysExercise ="Swimming";
function exercise(){
   
    if (todaysExercise == "Running"){
        return `Today's exercise: running`;
    }else if (todaysExercise == "Swimming"){
       return `Today's exercise: swimming`
    }
}
console.log(exercise())