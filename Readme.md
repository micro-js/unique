
# unique

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Return the unique elements of a list

## Installation

    $ npm install @f/unique

## Usage

```js
var unique = require('@f/unique')

unique([1,2,3,3])       // -> [1, 2, 3]
unique(['c', 'a', 'c']) // -> ['c', 'a']
```

## API

### unique(arr, cmp?)

- `arr` - Array of values
- `cmp` - Optional comparator to determine uniqueness

**Returns:** An array containing each unique value in `arr` exactly once.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/unique.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/unique
[git-image]: https://img.shields.io/github/tag/micro-js/unique.svg?style=flat-square
[git-url]: https://github.com/micro-js/unique
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/unique.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/unique
