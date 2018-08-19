const getQueryFields = $regex => [
  {
    'data.artist': { $regex },
  },
  {
    'data.title': { $regex },
  },
];

const createAlbumsQuery = (searchText) => {
  if (searchText) {
    const words = searchText.split(' ');
    const handleFilter = s => s;
    const pureWords = words.filter(handleFilter);
    if (pureWords.length === 1) {
      const regex = new RegExp(pureWords[0], 'i');
      return {
        $or: getQueryFields(regex),
      };
    } if (pureWords.length > 1) {
      let expression = '(';
      const handleEach = (word, index, array) => {
        if (index === array.length - 1) {
          expression = expression.concat(word, ')');
        } else {
          expression = expression.concat(word, '|');
        }
      };
      pureWords.forEach(handleEach);
      const regex = new RegExp(expression, 'i');
      return {
        $and: getQueryFields(regex),
      };
    }
  }
  return undefined;
};

export default createAlbumsQuery;
