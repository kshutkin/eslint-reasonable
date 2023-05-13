# eslint-reasonable

Opinionated reasonable ESLint configs

Principles:

- no formatting rules unless they provoke errors
- all rules configured to produce errors as ignored warnings not helpful both for code quality and for dev experience
- packages provides configs for specific languages but not specify exact file types
- all packages uses [Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new) approach
- only cjs exports (as so far eslint does not consumes modules)
- every rule has comment in source code that provides a reason why it has been included
- it is still opinionated because IMO different reasons for rule inclusion based on different aspects of code quality and for this repo this aspects are not clearly defined so far

# License
[MIT](./LICENSE)