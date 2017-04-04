This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Read info bellow to setup project with mocha chai testing modules.

## Steps

- npm install --save mocha chai jsdom react-addons-test-utils babel-register
- create .babelrc
- create test folder inside src and write setup.js or whatever you call it to simulate DOM
- create basic test to verify everything runs correctly
- as mocha extra options use "--compilers js:babel-core/register --require ./setup.js" for WebStorm or modify
package.json -> scripts -> test "./node_modules/.bin/mocha --compilers js:babel-core/register --require ./src/test/setup.js ./src/test/*.test.js"