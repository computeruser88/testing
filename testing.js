module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
            console.log(". " + message);
        } else {
            diff = expected + "\n" + actual;
            console.log("X " + message + "\nAssertion failed no match\n" + diff);
        }
    },
    assert_true: function (actual, message) {
        this.assert(true, actual, message)
    },
    assert_false: function (actual, message) {
        this.assert(false, actual, message)
    }
};