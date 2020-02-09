/**
 * Find a root of a number.
 * @param number The number to find the root of.
 * @param root The root to calculate.
 * @example
 * ```
 * const roet = require("roet");
 *
 * roet(16); // Square root of 16
 * //=> 4
 *
 * roet(16, 4); // Fourth root of 16
 * //=> 2
 *
 * roet(-16, 4); // Negative number
 * //=> -2
 * ```
*/
declare function roet(number: number, root?: number): number

export = roet
