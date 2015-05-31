/* */ 
"format cjs";
import React from 'react';
import Button from './Button';
import FormGroup from './FormGroup';
import InputBase from './InputBase';
import childrenValueValidation from './utils/childrenValueInputValidation';

class ButtonInput extends InputBase {
  renderFormGroup(children) {
    let {bsStyle, value, ...other} = this.props; // eslint-disable-line object-shorthand, no-unused-vars
    return <FormGroup {...other}>{children}</FormGroup>;
  }

  renderInput() {
    let {children, value, ...other} = this.props; // eslint-disable-line object-shorthand
    let val = children ? children : value;
    return <Button {...other} componentClass="input" ref="input" key="input" value={val} />;
  }
}

ButtonInput.types = ['button', 'reset', 'submit'];

ButtonInput.defaultProps = {
  type: 'button'
};

ButtonInput.propTypes = {
  type: React.PropTypes.oneOf(ButtonInput.types),
  bsStyle(props) {
    //defer to Button propTypes of bsStyle
    return null;
  },
  children: childrenValueValidation,
  value: childrenValueValidation
};

export default ButtonInput;
