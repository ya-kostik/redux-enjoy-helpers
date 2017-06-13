/**
 * @module type
 */


/**
 * Create types object for redux with prefix
 * createTypes('@@user/', ['SET', 'RESET']) => { SET: '@@user/SET', RESET: '@@user/RESET' };
 * @param  {String} prefix prefix
 * @param  {Array}  types  array of types
 * @return {Object}        hash with types
 */
export function createTypes(prefix, types) {
  const TYPES = {};
  types.forEach((type) => {
    TYPES[type] = prefix + type;
  });
  return TYPES;
}

/**
 * Сreate types object for redux collections
 * Use createTypes
 * @param  {String} prefix prefix
 * @param  {Array}  types  array of types
 * @return {Object}        hash with types
 */
export function createCollectionTypes(prefix, types = []) {
  if (!Array.isArray(types)) types = [];
  types = types.concat(['PUSH', 'POP', 'SHIFT', 'UNSHIFT', 'SET', 'SETUP', 'REMOVE'])
  return createTypes(prefix, types);
}
