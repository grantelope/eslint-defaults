module.exports = {
  "rules": {
    //
    // Variables
    //
    // These rules have to do with variable declarations.
    //
    "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 2, // disallow deletion of variables
    "no-label-var": 2, // disallow labels that share a name with a variable
    "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 2, // disallow use of undefined when initializing variables
    "no-undefined": 2, // disallow use of undefined variable (off by default)
    "no-unused-vars": [2, {
          "args": "after-used",
          "argsIgnorePattern": "^_.*$"
        }],
    "no-use-before-define": 2, // disallow use of variables before they are defined

     "indent": [1, 2], // this option sets a specific tab width for your code (off by default)
    "brace-style": 1, // enforce one true brace style (off by default)
    "camelcase": 0, // require camel case names
    "comma-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after comma
    "comma-style": [1, "last"], // enforce one true comma style (off by default)
    "consistent-this": [1, "_this"], // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0, // require function expressions to have a name (off by default)
    "func-style": 0, // enforces use of function declarations or expressions (off by default)
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}], // enforces spacing between keys and values in object literal properties
    "max-nested-callbacks": [1, 3], // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": [1, {newIsCap: true, capIsNew: false}], // require a capital letter for constructors
    "new-parens": 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    "newline-after-var": 0, // allow/disallow an empty newline after var statement (off by default)
    "no-array-constructor": 1, // disallow use of the Array constructor
    "no-inline-comments": 1, // disallow comments inline after code (off by default)
    "no-lonely-if": 1, // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": [1, {"max": 2}], // disallow multiple empty lines (off by default)
    "no-nested-ternary": 2, // disallow nested ternary expressions (off by default)
    "no-new-object": 1, // disallow use of the Object constructor
    "no-spaced-func": 1, // disallow space between function identifier and application
    "no-ternary": 0, // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "one-var": 0, // allow just one var statement per function (off by default)
    "operator-assignment": [1, "never"], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "padded-blocks": [1, "never"], // enforce padding within blocks (off by default)
    "quote-props": [0, "as-needed"], // require quotes around object literal property names (off by default)
    "quotes": [0, "single"], // specify whether double or single quotes should be used
    "semi": [1, "always"], // require or disallow use of semicolons instead of ASI
    "semi-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after semicolons
    "sort-vars": 0, // sort variables within the same declaration block (off by default)
    "keyword-spacing": [1, { "before": true }], // require a space after certain keywords (off by default)
    "space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
    "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], // require or disallow space before function opening parenthesis (off by default)
    "object-curly-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
    "array-bracket-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
    "computed-property-spacing": [1, "never"], // require or disallow spaces inside brackets (off by default)
    "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)

    "space-unary-ops": [1, {"words": true, "nonwords": false}], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": [1, "always"], // require or disallow a space immediately following the // in a line comment (off by default)
    "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)
  }
};