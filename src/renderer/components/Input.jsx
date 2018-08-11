import React from 'react';

const Input = ({ label, ...rest }) => {
  const view = [];
  if (label) {
    view.push(
      <label key="label">
        {rest.placeholder}
      </label>,
    );
  }
  view.push(
    <input className="input" {...rest} key="input" />,
  );
  return view;
};

export default Input;
