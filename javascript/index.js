module.exports = Object.freeze({
    "rules": {
        // feels bad if I cannot decide on my own if I want getter when I have setter
        // "accessor-pairs": "error",

        // formatting rule
        // "array-bracket-newline": "error",

        // formatting rule
        // "array-bracket-spacing": "error",

        // I don't like forEach but with this rule it looks like it has some added value
        // allowImplicit looks like magic but seems to be explicit enough
        // as a drawback it has false positives
        "array-callback-return": ["error", { checkForEach: true, allowImplicit: true }],

        // formatting rule
        // "array-element-newline": "error",

        // formatting rule, it is probably worth to enable in some edge cases like developing
        // for web with no minifier like terser or for consistency
        // "arrow-body-style": "error",

        // formatting rule, it is probably worth to enable in some edge cases like developing
        // for web with no minifier like terser or for consistency
        // "arrow-parens": "error",

        // formatting rule
        // "arrow-spacing": "error",

        // block scoped var is most probably an error or at least breaks least surprize principle
        "block-scoped-var": "error",

        // formatting rule
        // "block-spacing": "error",

        // formatting rule
        // "brace-style": "error",

        // this needs tweaking but should be helpful for understanding what is what
        "camelcase": "error",

        // formatting rule
        // "capitalized-comments": "error",

        // maybe this is opinionated choice but unless we implement interface there is no need for method if it does not use this
        "class-methods-use-this": ["error", {"enforceForClassFields": true}],

        // formatting rule, it is helpful for future diffs but adds an empty element to arrays
        // "comma-dangle": "error",

        // formatting rule
        // "comma-spacing": "error",

        // formatting rule
        // "comma-style": "error",

        // it seems to be counterintuitive but I want to keep this off, it does not give useful results when 
        // you have similar but different code blocks in a function
        // giving for each code block separate function often is not useful as it will lead to more
        // complex context management and raise overall complexity even more
        // but for one huge if this one works well, unfortunately rule cannot be fine tuned to that direction
        // "complexity": "error",

        // formatting rule
        // "computed-property-spacing": "error",

        // it is not formatting but I personally have too many ideas how function can be designed so disabling it
        // "consistent-return": "error",

        // hope with arrow functions it is close to useless
        // "consistent-this": "error",

        // useful
        "constructor-super": "error",

        // formatting rule
        // "curly": "error",

        // I feel like this rule more cares about formal part of switch rather than about real logic
        // what prevents me from doing empty default or putting comments and never come back
        // to fix real switch logic?
        // "default-case": "error",

        // I have mixed feelings about this one. From one point of view it is almost always the case
        // from another if I am doing it unintentionally how drunk am I? so maybe I really want it to be not
        // at the end of switch? generally I think switch should be used only for some custom logic
        // and not just as a Map and than if default is not at the end than statement "it is very custom switch..."
        // sounds about right
        // "default-case-last": "error",

        // not always an error and again hard to imaging it is slipped
        // "default-param-last": "error",

        // formatting rule
        // "dot-location": "error",

        // formatting rule, but maybe revisit because rule desctiption says: "works better with aggressive JavaScript minimizers"
        // "dot-notation": "error",

        // I think it was kind of important in time of gulp / grunt dumb files concatanation but not now with all our tooling
        // "eol-last": "error",

        // useful
        "eqeqeq": ["error", "smart"],

        // minimally useful, hope we almost never iterate now manually but using "for of" instead
        "for-direction": "error",

        // formatting rule
        // "func-call-spacing": "error",

        // almost formatting rule, and probably rare case now with arrow functions
        // "func-name-matching": "error",

        // almost formatting rule, useful for stacktraces but it is not the only reason to use or not to use names
        // also it is about old style functions when we probably use mostly arrow functions now
        // reconsider later?
        // "func-names": "error",

        // almost only formatting, my personal preference is to use arrow functions for simple anonymous functions
        // and when it is appropriate (e.g. no minification concerns) old style functions when I want it to hoist
        // or clearly define top level function as part of some API
        // "func-style": "error",

        // formatting rule
        // "function-call-argument-newline": "error",

        // formatting rule
        // "function-paren-newline": "error",

        // formatting rule
        // "generator-star-spacing": "error",

        // IMO close to useless, maybe revisit it but I never forgot to return from getter but managed to return some wrong value :)
        // you might think it does not heart but as soon as you decide to do it on purpose it will kick in and require effort to disable / mitigate
        // "getter-return": "error",

        // formatting rule
        // "grouped-accessor-pairs": "error",

        // generally useful but it is the case in modern code with Object.keys()
        // but in old code specifically to avoid this I used Object.create(null)
        // and in the end it means it will always trigger for my valid code but rarely for invalid
        // "guard-for-in": "error",

        // nothing to deny so far :)
        // "id-denylist": "error",

        // not sure what it should be
        // "id-length": "error",

        // close to formatting rule, not clear what it can be to be generally useful
        // "id-match": "error",

        // formatting rule
        // "implicit-arrow-linebreak": "error",

        // formatting rule, it is quite important BTW
        // "indent": "error",

        // I don't feel we can clearly define this one
        // "init-declarations": "error",

        // formatting rule
        // "jsx-quotes": "error",

        // formatting rule
        // "key-spacing": "error",

        // formatting rule
        // "keyword-spacing": "error",

        // formatting rule
        // "line-comment-position": "error",

        // formatting rule
        // "linebreak-style": "error",

        // formatting rule
        // "lines-around-comment": "error",

        // formatting rule
        // "lines-between-class-members": "error",

        // formatting rule
        // "logical-assignment-operators": ["always", { enforceForIfStatements: true }],

        // formatting rule, honeslty this one is just bad, what about 3 one liners vs 3 1000 lines classes?
        // "max-classes-per-file": "error",

        // this one is interesting because I generally agree with it but at the same time it depends on code
        // for repeatable copy-paste (which a lot of people consider bad by itself) it can be fine
        // and repeatable copy-paste can be good if it simplifies architechture and meant to be customized later
        // top level code is also different, one case when every branch is super complex condition
        // and another if it just simple case detection (like .endsWith())
        // some people lack feeling of complex code and tend to either oversimplify every piece moving complexity elsewhere
        // others can put too much into one place, but generally speaking it should be somewhere in the middle
        // and when complexity rises it is not only about moving code into a separate function...
        // "max-depth": "error",

        // formatting rule
        // "max-len": "error",

        // formatting rule
        // "max-lines": "error",

        // formatting rule
        // "max-lines-per-function": "error",

        // formatting rule
        // "max-nested-callbacks": "error",

        // formatting rule, arguable, because 10 parameters clearly unusable unless it is autogenerated or 1 time quick write code
        // "max-params": "error",

        // formatting rule
        // "max-statements": "error",

        // formatting rule
        // "max-statements-per-line": "error",

        // formatting rule
        // "multiline-comment-style": "error",

        // formatting rule
        // "multiline-ternary": "error",

        // I think it should be more controlled on definition site
        // "new-cap": "error",

        // formatting rule
        // "new-parens": "error",

        // formatting rule
        // "newline-per-chained-call": "error",

        // not sure, in production code it is rarely the case
        // "no-alert": "error",

        // ok, fixes pitfall
        "no-array-constructor": "error",

        // one more pitfall, 99% a mistake IMO
        "no-async-promise-executor": "error",

        // don't feel it is as error, I think it is good practice not to use loop for async operations if it is possible
        // and this means that in my code it will be mostly false positives as probably
        // this loop is just a retry or iterations are not independent
        // "no-await-in-loop": "error",

        // I love bitwise :)
        // "no-bitwise": "error",

        // error on deprecated feature
        "no-caller": "error",

        // this one is nasty but only useful with consistent break / returns and than maybe we don't need switch at all
        // maybe revisit later
        // "no-case-declarations": "error",

        // this one is cool but I feel in my code it either never triggers or only triggers as false positives
        // because of TS or I just avoid classes as much as possible?
        // maybe revisit later
        // "no-class-assign": "error",

        // agree, it seems useless
        "no-compare-neg-zero": "error",

        // I am using assigments in conditional expressions often but it is too dangerous when it is unintended
        "no-cond-assign": "error",

        // seems strange, maybe my typescript reflexes messes with me but I feel it is more harmful than useful
        // "no-confusing-arrow": "error",

        // use console if there is no logger, it is our default / platform logger isn't it?
        // "no-console": "error",

        // better fail earlier than at runtime, super useful?
        "no-const-assign": "error",

        // seems good against wrong / cryptic code
        "no-constant-binary-expression": "error",

        // seems valid, use comments to disable code :)
        "no-constant-condition": "error",

        // I don't agree with reasoning on eslint rule page but for me it feels valid as it might be too complex code anyway
        "no-constructor-return": "error",

        // no, because alternatives most probably even more complex
        // "no-continue": "error",

        // RegExp is often a mistake, but how many of them really uses even something like escaped Unicode
        // and if it really uses it, are we consider it bad automatically, maybe it solves some complex problem?
        // "no-control-regex": "error",

        // I still think it should be in some production rules not in default ruleset
        // "no-debugger": "error",

        // not sure, but I feel it should not have a lot false positives
        "no-delete-var": "error",

        // not with syntax highlight?
        // "no-div-regex": "error",

        // valid
        "no-dupe-args": "error",

        // valid
        "no-dupe-class-members": "error",

        // valid until we have side effects affecting conditions
        "no-dupe-else-if": "error",

        // seems valid until it is not a hack with sideeffects of object values expressions
        "no-dupe-keys": "error",

        // I don't believe that generating switch cases is performant
        // maybe test how crazy it is? :)
        "no-duplicate-case": "error",

        // formatting rule
        // "no-duplicate-imports": "error",

        // valid? it is not a mistake but formatting, yet I feel it affect way you think about code too much and should be included
        // maybe revisit it later?
        "no-else-return": "error",

        // valid? it can be temporary code like with debugger?
        // revisit?
        "no-empty": "error",

        // valid
        "no-empty-character-class": "error",

        // same as no-empty
        // revisit?
        "no-empty-function": "error",

        // same as no-empty
        // revisit?
        "no-empty-pattern": "error",

        // same as no-empty
        // revisit?
        "no-empty-static-block": "error",

        // no, because null is one of more clear comparisons
        // "no-eq-null": "error",

        // agree, disable explicetely if it is some kind of trick
        "no-eval": "error",

        // yes
        "no-ex-assign": "error",

        // yes
        "no-extend-native": "error",

        // yes
        "no-extra-bind": "error",

        // yes
        "no-extra-boolean-cast": "error",

        // ok?
        "no-extra-label": "error",

        // ok?
        "no-extra-parens": "error",

        // yes
        "no-extra-semi": "error",

        // no
        // "no-fallthrough": "error",

        // how often it happens?
        // "no-floating-decimal": "error",

        // ?
        // "no-func-assign": "error",

        // yes
        "no-global-assign": "error",

        // no
        // "no-implicit-coercion": "error",

        // I hope we all using modules
        // "no-implicit-globals": "error",

        // ok
        "no-implied-eval": "error",

        // yes
        "no-import-assign": "error",

        // why?
        // "no-inline-comments": "error",

        // I think it is obsolete
        // "no-inner-declarations": "error",

        // yes?
        "no-invalid-regexp": "error",

        // questionable, maybe because I reraly use this
        // "no-invalid-this": "error",

        // I think it is especially valid against ZWSP, despite looking like formatting it can prevent errors
        "no-irregular-whitespace": ["error", { "skipRegExps": true }],

        // yes, disallow non standart and enable explicetely if it is needed
        "no-iterator": "error",

        // mostly/almost formatting
        // "no-label-var": "error",

        // no, they are useful for svelte
        // "no-labels": "error",

        // formatting but useful for minification and general understanding of code
        // revisit later?
        "no-lone-blocks": "error",

        // formatting but useful for minification and general understanding of code
        // revisit later?
        "no-lonely-if": "error",

        // let's give it a try
        "no-loop-func": "error",

        // yes
        "no-loss-of-precision": "error",

        // no, I fell this is one of rules that too hyped. if you have 1 magic number in 1000 lines
        // of code and it is something like 60 for seconds that is fine
        // "no-magic-numbers": "error",

        // yes
        "no-misleading-character-class": "error",

        // no
        "no-mixed-operators": "error",

        // formatting rule
        // "no-mixed-spaces-and-tabs": "error",

        // no
        // "no-multi-assign": "error",

        // formatting rule
        // "no-multi-spaces": "error",

        // no (it requires more digging what is the best and how it affects code, but so faw looks like pure formatting)
        // "no-multi-str": "error",

        // formatting rule
        // "no-multiple-empty-lines": "error",

        // no, intention is clear, basically it is to lower cognitive complexity but not worth it. 
        // IMO this feeling of cognitive complexity should be there already in authors head
        // and if structure somehow more clear that just simpler conditions it is not worth it
        // "no-negated-condition": "error",

        // no, opinionated :)
        // "no-nested-ternary": "error",

        // no, opinionated :)
        // "no-new": "error",

        // no
        // "no-new-func": "error",

        // yes
        "no-new-native-nonconstructor": "error",

        // closer to formatting and not an error
        // "no-new-object": "error",

        // yes
        "no-new-symbol": "error",

        // ok
        "no-new-wrappers": "error",

        // closer to formatting, no harm
        // reconsider later
        // "no-nonoctal-decimal-escape": "error",

        // yes
        "no-obj-calls": "error",

        // probably fair
        "no-octal": "error",

        // same
        "no-octal-escape": "error",

        // this one is interesting, but let's say no for now
        // "no-param-reassign": "error",

        // no, I am former C++ developer :)
        // "no-plusplus": "error",

        // yes
        "no-promise-executor-return": "error",

        // yes
        "no-proto": "error",

        // no, because I think if developer wants something like this he/she should now if prototype is there
        // it usually only annoys but not stops
        // "no-prototype-builtins": "error",

        // ok
        "no-redeclare": ["error", { "builtinGlobals": true }],

        // no, I mean, pay attention to RegExps, spaces is attention, are you copy pasting them blindly?
        // spaces are obviously part of RegExp and unless you are not using monospace font you don't need this rule
        // "no-regex-spaces": "error",

        // no
        // "no-restricted-exports": "error",

        // no
        // "no-restricted-globals": "error",

        // no
        // "no-restricted-imports": "error",

        // no
        // "no-restricted-properties": "error",

        // no
        // "no-restricted-syntax": "error",

        // ok, require parens
        "no-return-assign": "error",

        // yes and I think it should handle more cases
        "no-return-await": "error",

        // ok
        "no-script-url": "error",

        // yes
        "no-self-assign": "error",

        // yes
        "no-self-compare": "error",

        // no
        // "no-sequences": "error",

        // ok
        "no-setter-return": "error",

        // both love and hate this
        // maybe revisit it later
        "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions", "ignoreOnInitialization": true }],

        // yes
        "no-shadow-restricted-names": "error",

        // no
        // "no-sparse-arrays": "error",

        // formatting rule
        // "no-tabs": "error",

        // questionable, because sytax highlighting catches this easier
        // "no-template-curly-in-string": "error",

        // no
        // "no-ternary": "error",

        // yes
        "no-this-before-super": "error",

        // no, it seems fine, but let the developer decide and learn about Error
        // "no-throw-literal": "error",

        // formatting rule
        // "no-trailing-spaces": "error",

        // this probably better to catch in something like typescript
        // maybe revisit
        // "no-undef": "error",

        // yes
        "no-undef-init": "error",

        // yes
        "no-undefined": "error",

        // style rule
        // "no-underscore-dangle": "error",

        // formatting, nice to try with semi never :)
        // "no-unexpected-multiline": "error",

        // not sure about this, for .. of vs come hand crafted loops problem
        // "no-unmodified-loop-condition": "error",

        // yes
        "no-unneeded-ternary": "error",

        // yes
        "no-unreachable": "error",

        // yes, but might be not that simple
        "no-unreachable-loop": "error",

        // yes, in edge cases disable it
        "no-unsafe-finally": "error",

        // no
        // "no-unsafe-negation": "error",

        // yes
        "no-unsafe-optional-chaining": "error",

        // yes (but can it be on a later stage?)
        "no-unused-expressions": "error",

        // yes (but can it be on a later stage?)
        "no-unused-labels": "error",

        // yes (but can it be on a later stage?)
        "no-unused-private-class-members": "error",

        // yes (but can it be on a later stage?)
        "no-unused-vars": "error",

        // feel it can be better :)
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true,
            "variables": true,
            "allowNamedExports": true
        }],

        // yes
        "no-useless-backreference": "error",

        // ok
        "no-useless-call": "error",

        // ok, but maybe a prod set?
        "no-useless-catch": "error",

        // yes
        "no-useless-computed-key": "error",

        // ok
        "no-useless-concat": "error",

        // yes
        "no-useless-constructor": "error",

        // yes
        "no-useless-escape": "error",

        // yes
        "no-useless-rename": "error",

        // ok, not sure when it can happen
        "no-useless-return": "error",

        // ok, I feel it will not bring a value for me, but maybe if I copy paste some code...
        "no-var": "error",

        // no
        // "no-void": "error",

        // no
        // "no-warning-comments": "error",

        // formatting rule
        // "no-whitespace-before-property": "error",

        // yes, because it should be forbidden in strict
        "no-with": "error",

        // formatting rule, seems useful, maybe include later
        // "nonblock-statement-body-position": "error",

        // formatting rule
        // "object-curly-newline": "error",

        // formatting rule
        // "object-curly-spacing": "error",

        // formatting rule
        // "object-property-newline": "error",

        // yes :)
        "object-shorthand": "error",

        // formatting rule, almost
        // "one-var": "error",

        // no
        // "one-var-declaration-per-line": "error",

        // ok, maybe revisit and move to formatting
        "operator-assignment": "error",

        // formatting rule
        // "operator-linebreak": "error",

        // formatting rule
        // "padded-blocks": "error",

        // formatting rule
        // "padding-line-between-statements": "error",

        // ok?
        "prefer-arrow-callback": "error",

        // ok?
        "prefer-const": "error",

        // yes
        "prefer-destructuring": "error",

        // yes
        "prefer-exponentiation-operator": "error",

        // ok
        "prefer-named-capture-group": "error",

        // yes
        "prefer-numeric-literals": "error",

        // yes
        "prefer-object-has-own": "error",

        // yes, formatting like
        "prefer-object-spread": "error",

        // no
        // "prefer-promise-reject-errors": "error",

        // yes, this one is formatting like but it is not autofixable so I let it be here
        "prefer-regex-literals": "error",

        // yes
        "prefer-rest-params": "error",

        // yes
        "prefer-spread": "error",

        // mostly useful but sometimes it gives some pain, maybe revisit
        "prefer-template": "error",

        // fomratting rule
        // "quote-props": "error",

        // fomratting rule
        // "quotes": "error",

        // yes (maybe on later stage?)
        "radix": "error",

        // yes (maybe on later stage?)
        "require-atomic-updates": "error",

        // yes (maybe on later stage?)
        "require-await": "error",

        // questionable
        // "require-unicode-regexp": "error",

        // ok
        "require-yield": "error",

        // formatting rule
        // "rest-spread-spacing": "error",

        // ok, but only because semicolons can affect code
        "semi": "error",

        // formatting rule
        "semi-spacing": "error",

        // formatting rule
        "semi-style": "error",

        // no, just no
        // "sort-imports": "error",

        // no, just no
        // "sort-keys": "error",

        // no, just no
        // "sort-vars": "error",

        // formatting rule
        // "space-before-blocks": "error",

        // formatting rule
        // "space-before-function-paren": "error",

        // formatting rule
        // "space-in-parens": "error",

        // formatting rule
        // "space-infix-ops": "error",

        // formatting rule
        // "space-unary-ops": "error",

        // formatting rule
        // "spaced-comment": "error",

        // no
        // "strict": "error",

        // formatting rule
        // "switch-colon-spacing": "error",

        // no
        // "symbol-description": "error",

        // formatting rule
        // "template-curly-spacing": "error",

        // formatting rule
        // "template-tag-spacing": "error",

        // no, I think we all should be in utf-8
        // "unicode-bom": "error",

        // yes
        "use-isnan": "error",

        // yes
        "valid-typeof": "error",

        // no, hope var is just an exception
        // "vars-on-top": "error",

        // ok
        "wrap-iife": ["error", "any"],

        // no, because of syntax highlight
        // "wrap-regex": "error",

        // formatting rule
        // "yield-star-spacing": "error",

        // no
        // "yoda": "error"
    }
});