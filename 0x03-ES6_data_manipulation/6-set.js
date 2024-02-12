/**
 * Creates a set from an array.
 * @param {Array} array - The source array.
 * @author Gina Ekwealor <https://github.com/gekwealor>
 * @returns {Set}
 */
export default function setFromArray(arr) {
  if (Array.isArray(arr)) {
    return new Set(arr);
  }
  return new Set();
}
