import './Checkbox.css';
import React, { Component, PropTypes } from 'react';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Checkbox');

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: !!props.checked
    };
  }
  static propTypes = {
    style: PropTypes.object
  };
  static defaultProps = {
    style: {}
  };
  changeHandler(e) {
    this.setState({ checked: e.target.checked });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    const { style } = this.props;

    return (
      <label className={baseClassNames} style={style}>
        <input
          {...removeObjectKeys(this.props, ['onChange'])}
          type="checkbox"
          className="Checkbox__self"
          value={this.state.checked}
          onChange={this.changeHandler}
        />
        <span className="Checkbox__pseudo" />
      </label>
    );
  }
}