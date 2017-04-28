var math = (function() {

    function multiply(number1, number2) {

        var multiplicationResult = [];
        var i;

        if (parseInt(number1) === 0 || parseInt(number2) === 0) {
            return "0";
        }

        number1 = splitAndReverse(number1);
        number2 = splitAndReverse(number2);

        for (i = 0; number1[i] >= 0; i++) {
            for (var j = 0; number2[j] >= 0; j++) {
                if (!multiplicationResult[i + j]) {
                    multiplicationResult[i + j] = 0;
                }
                multiplicationResult[i + j] += number1[i] * number2[j];
            }
        }

        for (i = 0; multiplicationResult[i] >= 0; i++) {
            if (multiplicationResult[i] >= 10) {
                if (!multiplicationResult[i + 1]) {
                    multiplicationResult[i + 1] = 0;
                }
                multiplicationResult[i + 1] += parseInt(multiplicationResult[i] / 10);
                multiplicationResult[i] %= 10;
            }
        }

        removeTralingZeros(multiplicationResult)

        return multiplicationResult.reverse().join("");
    }

    function removeTralingZeros(from) {
        while (from[from.length - 1] === 0) {
            from.pop();
        }

    }

    function splitAndReverse(data) {
        return data.split("").reverse();

    }

    return {
        multiply: multiply
    };
})();

console.log(math.multiply("2", "23"));
console.log(math.multiply("123456789343244355465643534545", "9876543210"));
console.log(math.multiply("0123", "004"));
