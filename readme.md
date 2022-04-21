# Roet

Find a root of a number.

[![NPM Badge](https://nodei.co/npm/roet.png)](https://npmjs.com/package/roet)

## Install

```sh
npm install roet
```

## Strategy

Roots are solved as a [special type of exponentiation](https://en.wikipedia.org/wiki/Nth_root).

## Usage

```js
import roet from 'roet';

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
