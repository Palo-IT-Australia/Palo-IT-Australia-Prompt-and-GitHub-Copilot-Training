/**
 * Exercise 2 — Test Generation
 * ==============================
 * Objective: Use Copilot Chat to generate unit tests for existing functions.
 *
 * Instructions:
 * 1. Read each function below
 * 2. Select a function and press Ctrl+I (Cmd+I on macOS) for inline chat
 * 3. Type: /tests
 * 4. Review the suggested tests and accept or refine them
 * 5. Alternatively, open Copilot Chat and type:
 *    "Write Jest unit tests for the [functionName] function covering:
 *     happy path, edge cases, and invalid inputs"
 *
 * Run tests (requires Node.js): npx jest 02_test_generation.test.js
 * (Copilot will generate the test file — save it as 02_test_generation.test.js)
 */


/**
 * Formats a price in cents as a localised currency string.
 * @param {number} cents - Price in cents (integer)
 * @param {string} currency - ISO 4217 currency code (e.g. 'AUD', 'USD')
 * @param {string} locale - BCP 47 locale string (e.g. 'en-AU', 'en-US')
 * @returns {string} Formatted price string (e.g. 'A$12.50')
 */
function formatPrice(cents, currency = 'AUD', locale = 'en-AU') {
  if (typeof cents !== 'number' || !Number.isInteger(cents)) {
    throw new TypeError('cents must be an integer');
  }
  if (cents < 0) {
    throw new RangeError('cents must be non-negative');
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(cents / 100);
}


/**
 * Truncates a string to a maximum length, appending an ellipsis if truncated.
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum character length (must be >= 3)
 * @returns {string} The truncated string
 */
function truncate(text, maxLength) {
  if (typeof text !== 'string') {
    throw new TypeError('text must be a string');
  }
  if (maxLength < 3) {
    throw new RangeError('maxLength must be at least 3');
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 3) + '...';
}


/**
 * Groups an array of objects by a given key.
 * @param {Object[]} items - Array of objects to group
 * @param {string} key - The object key to group by
 * @returns {Object} An object where each key maps to an array of matching items
 */
function groupBy(items, key) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }
  return items.reduce((groups, item) => {
    const groupKey = item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}


// ---- Ask Copilot to generate tests for these functions ----
// Suggested prompt for Copilot Chat:
//
// "Write comprehensive Jest unit tests for the three functions in this file:
//  formatPrice, truncate, and groupBy.
//  For each function cover:
//  1. Happy path with typical inputs
//  2. Edge cases (empty string, zero, single item array, etc.)
//  3. Invalid inputs that should throw errors
//  Use describe() blocks and meaningful test names.
//  Export the functions at the bottom so they can be imported."


module.exports = { formatPrice, truncate, groupBy };
