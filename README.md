# eslint-reasonable

Opinionated reasonable ESLint configs

Principles:

- no formatting rules unless they provoke errors
- all rules configured to produce errors as ignored warnings are not helpful both for code quality and for dev experience
- packages provide configs for specific languages but do not specify exact file types
- all packages use the [Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new) approach
- only cjs exports (as so far eslint does not consume modules)
- every rule has a comment in the source code that provides a reason why it has been included
- it is still opinionated because IMO different reasons for rule inclusion based on different aspects of code quality and for this repo this aspect is not clearly defined so far

# License
[MIT](./LICENSE)