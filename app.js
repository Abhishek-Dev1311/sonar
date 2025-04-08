// Unused variable
const unused = 123

// Function with a poor name and missing semicolon
function a(x){
    console.log("Value is " + x)
}

// Duplicate code + hardcoded value + no error handling
function connectDB(){
    const db = "mongodb://admin:admin123@localhost:27017"
    console.log("Connecting to DB: " + db)
}

function connectDBAgain(){
    const db = "mongodb://admin:admin123@localhost:27017"
    console.log("Connecting to DB: " + db)
}

// Vulnerable eval usage
const userInput = "2 + 2"
console.log(eval(userInput))

// Function never used
function deadCode() {
    return "I am never called"
}

a("Test")
connectDB()
connectDBAgain()

