# Roet [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/roet/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/roet)

Find a root of a number.

[![NPM Badge](https://nodei.co/npm/roet.png)](https://npmjs.com/package/roet)

## Install

```sh
npm install roet
```

## Strategy

Since a natively supported Math function doesn't exist, `roet` finds the multiplicative equivalent instead using this formula:

![Strategy formula](media/formula.svg)

## Usage

```js
const roet = require("roet");

roet(16); // Square root of 16
//=> 4

roet(16, 4); // Fourth root of 16
//=> 2

roet(-16, 4); // Negative number
//=> -2
```

## API

### roet(number, root?)

#### number

Type: `number`

The number to find the root of.

#### root

Type: `number` (positive)\
Default: `2`

The root to calculate.
