(function(addCallback) {
    return (function(f) {
        return f(f);
    }(function(f) {
        return addCallback(function(x) {
            return f(f)(x);
        });
    }));
})(function(recurseAdd) {
    return function(n) {
        if (isNaN(n)) {
            console.log("Please provide a number");
            return;
        } else {
            return n == 0 ? 0 : n + recurseAdd(n - 1);
        }
    }
})(5);
