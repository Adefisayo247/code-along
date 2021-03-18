# Variable Scoping
Variable Scoping in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
# # Types
The two types of scope are local and global:
Global variables are those declared outside of a block while 
Local variables are those declared inside of a block

# # # Examples
//Example of Global Scope
const message = 'Hello World'
console.log(message)

//no error local scope
if (true){
const message = 'Hello World'
}
console.log(message)
# # Types of Variable Function
The local variable is function-scoped. Variables declared with the "var" keyword are always function-scoped, meaning they recognize functions as having a separate scope. This locally-scoped variable is therefore not accessible from the global scope.
The new keywords "let and const", however, are block-scoped. This means that a new, local scope is created from any kind of block, including function blocks, if statements, and for and while loops which are called Conditionals
To illustrate the difference between function- and block-scoped variables, we will assign a new variable in an if block using let.

# #Example of a function-scoped block and Locally Scoped Variable
//only replies for value in the block quote
const x1 = 1
{
    const x1 = 2
    console.log(x1)
}
console.log(x1)

//still exempting the first variable defined
const x2 = 1
myNewScope: {
    const x2 = 2
    console.log(x2)
}
console.log(x2)


# # Example of a three realistic function
// Initialize a local, function-scoped variable together
// Initialize a global variable
const species = "human";

function transform() {
  // Initialize a local, function-scoped variable
 const species = "werewolf";
  console.log(species);
}
console.log(species);
transform();
console.log(species);


//perfect example of a conditional scoping
function nextedScopes() {
    const message = 'Hello World!'

    if (true) {
        const fromIf = 'Hello If Block!'
        console.log(message)
    }
    undefined
    console.log(fromIf) 
}
nextedScopes()