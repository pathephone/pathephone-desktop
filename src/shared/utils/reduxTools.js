
export const reducerFactory = ({ initialState, actionHandlers }) => (
  (state = initialState, action) => {
    const { type, payload } = action;
    const actionHandler = actionHandlers[type];
    if (actionHandler) {
      return actionHandler({ payload, state });
    }
    return state;
  }
);

export const creatorFactory = (type) => {
  const creator = payload => ({ type, payload });
  creator.toString = () => type;
  Object.freeze(creator);
  return creator;
};

export const newDomainTypeFactory = domain => type => `@@${domain}/${type}`;

const handleReduce = (state, field) => (field ? state[field] : state);
export const newDomainSelectorFactory = domain => (pathString) => {
  const path = pathString.split('.').filter(key => !!key);
  return state => path.reduce(handleReduce, state[domain]);
};

export const newCreatorFactory = domainTypeFactory => (
  actionType => creatorFactory(domainTypeFactory(actionType))
);

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export const getBasicSelectors = (domain) => (shape) => {
//   const selectors = {}
//   const handleEach = (fieldName) => {
//     const fieldNameCap = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
//     const selectorName = `get${}`
//     selectors[selectorName] = (state) => state[domain][fieldName]
//   }
//   Object
//     .keys(shape)
//     .forEach(handleEach)
// }
