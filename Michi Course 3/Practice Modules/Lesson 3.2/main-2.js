// TODO: Import add from './math-utils.js' using a named import.

// TODO: Import subtract from './math-utils.js' as a renamed import named minus.

// TODO: Import everything from './math-utils.js' as a namespace named math.

// TODO: Use add to compute 2 + 3 and write the result into #sum.

import {add, subtract as minus } from './math-utils.js';
import * as math from './math-utils.js';

document.querySelector('#sum').textContent = add(2, 3);

// TODO: Use minus to compute 10 - 4 and write the result into #difference.
document.querySelector('#difference').textContent = minus(10, 4);

// TODO: Use math.multiply to compute 3 * 3 and write the result into #product.
document.querySelector('#product').textContent = math.multiply(3, 3);
