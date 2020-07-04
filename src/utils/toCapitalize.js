const toCapitalize = (string) => {
  return string
    .split(' ')
    .map((v) => {
      return v[0].toUpperCase() + v.slice(1).toLowerCase();
    })
    .join(' ');
};

export default toCapitalize;
