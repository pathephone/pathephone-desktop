import React from 'react';
import propTypes from 'prop-types';

import './DNDarea.css';

class DragAndDropArea extends React.Component {
  handleChange = (e) => {
    const { files } = e.currentTarget;
    this.props.onChange(files);
  }

  render() {
    const { children, style, ...input } = this.props;
    return (
      <div className="DNDAreaContainer" style={style}>
        {children}
        <input
          {...input}
          ref={(c) => { this.input = c; }}
          onChange={this.handleChange}
          type="file"
          className="DNDAreaInput"
        />
      </div>
    );
  }
}

DragAndDropArea.defaultProps = {
  style: null,
  children: null,
};


DragAndDropArea.propTypes = {
  onChange: propTypes.func.isRequired,
  children: propTypes.node,
  style: propTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default DragAndDropArea;
