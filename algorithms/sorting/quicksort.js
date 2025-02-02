/**
 * @module sorting/quicksort
 * @description Implementación del algoritmo QuickSort para ordenar arreglos numéricos.
 */

/**
 * Ordena un arreglo de números utilizando el algoritmo QuickSort.
 *
 * @param {number[]} arr - El arreglo de números a ordenar.
 * @returns {number[]} - El arreglo ordenado.
 *
 * @example
 * const sortedArray = quickSort([3, 6, 8, 10, 1, 2, 1]);
 * console.log(sortedArray); // [1, 1, 2, 3, 6, 8, 10]
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

module.exports = quickSort;
