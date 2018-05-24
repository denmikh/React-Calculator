import React, { Component } from 'react';
import './App.css';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const { text } = this.props;
    return (
        <div className="Display">
          <div className="result">
            {text}
          </div>
        </div>
    );
  }
};


class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.click(this.props.value);
  }

  render () {
    const { label } = this.props;
    return (
        <button onClick={this.onClick} className="Button">
        {label}
        </button>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.click = this.click.bind(this);
  }

  click(value) {
    this.setState({ display: this.state.display + value });
  }

  render() {

    return (
      <div className="App">
        <Display text={this.state.display}/>
          <div>
            <Button click={this.click} label="7" value="7"/>
            <Button click={this.click} label="8" value="8"/>
            <Button click={this.click} label="9" value="9"/>
            <Button click={this.click} label="/" value="/"/>

            <Button click={this.click} label="4" value="4"/>
            <Button click={this.click} label="5" value="5"/>
            <Button click={this.click} label="6" value="6"/>
            <Button click={this.click} label="*" value="*"/>

            <Button click={this.click} label="1" value="1"/>
            <Button click={this.click} label="2" value="2"/>
            <Button click={this.click} label="3" value="3"/>
            <Button click={this.click} label="-" value="-"/>

            <Button click={this.click} label="C" value="clear"/>
            <Button click={this.click} label="0" value="0"/>
            <Button click={this.click} label="=" value="equal"/>
            <Button click={this.click} label="+" value="+"/>
          </div>
      </div>
    );
  }
}


export default App;
