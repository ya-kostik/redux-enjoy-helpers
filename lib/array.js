/**
 * Add item into array
 * @param  {Array} list array to change
 * @param  {Midex} item item to add
 * @return {Array}      new array with new item inside
 */
export function add(list, item) {
  return [...list, item];
}

/**
 * Remove item from array
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @return {Array}        new array without item at index inside
 */
export function remove(list, index) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

/**
 * Replace item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Mixed}  item  new item
 * @return {Array}        new array with new item at index
 */
export function change(list, index, item) {
  return [...list.slice(0, index), item, ...list.slice(index + 1)];
}

/**
 * move item from index to new index
 * @param  {Array}  list  array to change
 * @param  {Number} from index in array
 * @param  {Number} to   index in array
 * @return {Array}       new array with moved item
 */
export function move(list, from, to) {
  const temp = remove(list, from);
  return addToIndex(temp, to, list[from]);
}

/**
 * swap items in array
 * @param  {Array}  list   array to change
 * @param  {Number} index1 index in array
 * @param  {Number} index2 index in array
 * @return {Array}         new array with swapped items
 */
export function swap(list, index1, index2) {
  const temp = change(list, index1, list[index2]);
  return change(temp, index2, list[index1]);
}

/**
 * inject items into index with removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Array}  items items to inject
 * @return {Array}        new array with injected items
 */
export function resplaceItemsAtIndex(list, index, items) {
  return [...list.slice(0, index), ...items, ...list.slice(index + 1)];
}

/**
 * inject item into index without removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Mixed}  item  item to inject
 * @return {Array}        new array with injected items
 */
export function addToIndex(list, index, item) {
  return [...list.slice(0, index), item, ...list.slice(index)];
}

/**
 * inject items into index without removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Array}  items items to inject
 * @return {Array}        new array with injected items
 */
export function addItemsToIndex(list, index, items) {
  return [...list.slice(0, index), ...items, ...list.slice(index)];
}
