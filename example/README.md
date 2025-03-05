# example

As a best-practice, we always verify our package before publishing your package to the NPM registry it is important to publish it and test it on your local machine to ensure its correctness, functionality, and compatibility with other modules or dependencies. Local testing allows you to catch any issues or bugs early on and make necessary improvements before releasing your package to the public. That's why example come in to let us can verify our customized package

## How to verify your customized package on your local machine

### Reuse the `example` in our case

Trigger start to install the local package and run your logic inside `index.js`

```bash
npm run start
```

### To verify a new testing_project

1. First, create a new testing project e.g `testing_project`
2. Run `$ cd testing_project`
3. Run `$ npm init` and initialize your package with default entry file `index.ts | index.js`
4. Link the dir of your dependency `$ npm link path_to_local_package`
5. Install the local npm package in development mode `$ npm install path_to_local_package`
6. Implement your code logic that reuse functionalities of your npm local package
