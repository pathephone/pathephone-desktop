import React from 'react';
import propTypes from 'prop-types';
import getValue from 'get-value';

class IziForm extends React.PureComponent {
  // Form DOM observer

  domObserver = new MutationObserver(() => {
    this.deattachOnChangeListener();
    this.attachOnChangeListener();
  })

  startFormObserver = () => {
    this.domObserver.observe(this.formRef, {
      childList: true,
    });
  }

  stopFormObserver = () => {
    this.domObserver.disconnect();
  }

  // Form elements onChange listeners

  handleChange = (...args) => {
    this.props.onChange(...args);
  }

  attachOnChangeListeners = () => {
    const { elements } = this.formRef;
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('change', this.handleChange);
    }
  }

  dettachOnChangeListeners = () => {
    const { elements } = this.formRef;
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('change', this.handleChange);
    }
  }

  // Outside values synchronization

  syncValues = () => {
    const { values } = this.props;
    const { elements } = this.formRef;
    for (let i = 0; i < elements.length; i++) {
      const { type, name } = elements[i];
      if (!name) continue;
      const value = getValue(values, name);
      if (type !== 'file' && value !== undefined) {
        elements[i].value = value;
      }
    }
  }

  syncErrors = () => {
    const { errors } = this.props;
    const { elements } = this.formRef;
    for (let i = 0; i < elements.length; i++) {
      const target = elements[i];
      const { name } = target;
      if (!name) continue;
      const invalid = getValue(errors, name);
      if (invalid) {
        target.setCustomValidity(invalid);
        target.setAttribute('title', invalid);
      } else {
        target.setCustomValidity('');
        target.removeAttribute('title');
      }
    }
  }

  componentDidMount() {
    this.attachOnChangeListeners();
    this.startFormObserver();
    if (this.props.values) {
      this.syncValues();
    }
    if (this.props.errors) {
      this.syncErrors();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.values !== prevProps.values) {
      this.syncValues();
    }
    if (this.props.errors !== prevProps.errors) {
      this.syncErrors();
    }
  }

  componentWillUnmount() {
    this.dettachOnChangeListeners();
    this.stopFormObserver();
  }

  render() {
    const {
      children, onChange, values, ...restProps
    } = this.props;
    return (
      <form ref={(c) => { this.formRef = c; }} {...restProps}>
        {children}
      </form>
    );
  }
}

IziForm.propTypes = {
  onChange: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  values: propTypes.object,
  errors: propTypes.object,
};

export default IziForm;
