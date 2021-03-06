/* */ 
"format cjs";
import React, { cloneElement } from 'react';
import classNames from 'classnames';

import createChainedFunction from './utils/createChainedFunction';
import ValidComponentChildren from './utils/ValidComponentChildren';

const DropdownMenu = React.createClass({
  propTypes: {
    pullRight: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  },

  render() {
    let classes = {
        'dropdown-menu': true,
        'dropdown-menu-right': this.props.pullRight
      };

    return (
        <ul
          {...this.props}
          className={classNames(this.props.className, classes)}
          role="menu">
          {ValidComponentChildren.map(this.props.children, this.renderMenuItem)}
        </ul>
      );
  },

  renderMenuItem(child, index) {
    return cloneElement(
      child,
      {
        // Capture onSelect events
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),

        // Force special props to be transferred
        key: child.key ? child.key : index
      }
    );
  }
});

export default DropdownMenu;
