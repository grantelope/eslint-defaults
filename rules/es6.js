module.exports = {
  "rules": {
    //
    // ECMAScript 6
    //
    // These rules are only relevant to ES6 environments and are off by default.
    //
    "no-var": 2, // require let or const instead of var (off by default)

    //
    // Legacy
    //
    // The following rules are included for compatibility with JSHint and JSLint.
    // While the names of the rules may not match up with the JSHint/JSLint counterpart,
    // the functionality is the same.
    //
    "max-depth": [2, 3], // specify the maximum depth that blocks can be nested (off by default)
    //"max-len": [2, 100, 2], // specify the maximum length of a line in your program (off by default)
    "max-params": [2, 5], // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 0, // disallow use of bitwise operators (off by default)
    "no-plusplus": 2 // disallow use of unary operators, ++ and -- (off by default)
  }
};