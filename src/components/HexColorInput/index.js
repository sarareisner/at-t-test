import React, { Component, PropTypes } from 'react';
import './style.css';

class HexColorInput extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
  };
  state = {
    value: ''
  }
  handleChange = (event) => {
    const regexChar = RegExp('^#([A-Fa-f0-9]{0,6})$');
    const regexFinalColor = RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    if (regexChar.test(event.target.value)) { // validate every inserted char
      this.setState({ value: event.target.value, error:false })
      if (regexFinalColor.test(event.target.value)) {
        this.props.handleChange(event.target.value)
      }
    } else if (event.target.value === '') { // when the input is empty change to white
      this.setState({ value: '', error:false })
      this.props.handleChange('#ffffff')
    } else {
      this.setState({ error: true })
    }

  }
  render() {
    return (
      <div className="Hex-color-input">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        {this.state.error && <div className="Validation-error">Please enter valid Hex color</div>}
      </div>
    );
  }
}

export default HexColorInput;
