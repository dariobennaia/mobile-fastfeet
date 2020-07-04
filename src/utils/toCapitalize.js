const toCapitalize = (string, all) => {
  return string
    .split(' ')
    .map((v, i) => {
      if (all || (!all && i === 0)) {
        return v[0].toUpperCase() + v.slice(1).toLowerCase();
      }
      return v.toLowerCase();
    })
    .join(' ');
};

export default toCapitalize;
