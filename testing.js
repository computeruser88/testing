vafr whtevs = "a"
console.log(whtevs ==="b")

module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
            console.log(message);
        } else {
            diff = util.expect(expected) + "\n" + util.inspect(actual);
            console.log(message + "\nAssertion failed no match\n" + diff);
        }
    },
    assert_true: function (actual, message) {

    },
    assert_false: function (actual, message) {

    }
};