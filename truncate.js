function truncate(value, index = 0) {
  if (!value) {
    return '';
  } 
  return value.slice(0, index);
}

export default truncate;
