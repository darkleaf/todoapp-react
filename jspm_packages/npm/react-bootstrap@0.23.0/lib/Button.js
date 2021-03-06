/* */ 
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _classnames = require("classnames");
var _classnames2 = _interopRequireDefault(_classnames);
var _BootstrapMixin = require("./BootstrapMixin");
var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
var Button = _react2['default'].createClass({
  displayName: 'Button',
  mixins: [_BootstrapMixin2['default']],
  propTypes: {
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    block: _react2['default'].PropTypes.bool,
    navItem: _react2['default'].PropTypes.bool,
    navDropdown: _react2['default'].PropTypes.bool,
    componentClass: _react2['default'].PropTypes.node,
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'button',
      bsStyle: 'default',
      type: 'button'
    };
  },
  render: function render() {
    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
    var renderFuncName = undefined;
    classes = _extends({
      active: this.props.active,
      'btn-block': this.props.block
    }, classes);
    if (this.props.navItem) {
      return this.renderNavItem(classes);
    }
    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';
    return this[renderFuncName](classes);
  },
  renderAnchor: function renderAnchor(classes) {
    var Component = this.props.componentClass || 'a';
    var href = this.props.href || '#';
    classes.disabled = this.props.disabled;
    return _react2['default'].createElement(Component, _extends({}, this.props, {
      href: href,
      className: (0, _classnames2['default'])(this.props.className, classes),
      role: 'button'
    }), this.props.children);
  },
  renderButton: function renderButton(classes) {
    var Component = this.props.componentClass || 'button';
    return _react2['default'].createElement(Component, _extends({}, this.props, {className: (0, _classnames2['default'])(this.props.className, classes)}), this.props.children);
  },
  renderNavItem: function renderNavItem(classes) {
    var liClasses = {active: this.props.active};
    return _react2['default'].createElement('li', {className: (0, _classnames2['default'])(liClasses)}, this.renderAnchor(classes));
  }
});
exports['default'] = Button;
module.exports = exports['default'];
