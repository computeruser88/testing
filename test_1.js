var test = require('./testing');

test.assert(6, add(2,4), "2 + 4 === 6")
test.assert_false(false, "false is false")
test.assert(10, add(1, 9), "1 + 9 === 10")
test.assert_true(true, "true")
test.assert(10, 3,"10 !== 3")
test.assert_true(amICool(), "yes it's true")
test.assert("very cool", howCoolAmI(), "also true")

function add(a, b){
    return a + b
}

function amICool (){
    return true;
}

function howCoolAmI(){
    return "very cool"
}