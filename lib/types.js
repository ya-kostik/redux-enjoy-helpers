function create(prefix, types) {
  const TYPES = {};
  types.forEach((type) => {
    TYPES[type] = prefix + type;
  });
  return TYPES;
}

export default create;
