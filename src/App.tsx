import * as React from 'react'
import {Button, Display} from './components'
import './App.css';


namespace App {
  export interface Props {
    //empty
  }

  export interface State {
    display: string
  }
}

export class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    }
  }

  click = (value:string) => {
    this.setState({ display: this.state.display + value });
  }

  calculateOperations = () => {
		let sum = eval(this.state.display);
		this.setState({ display: sum });
  }

  clearDisplay = () => {
    this.setState({ display: "" })
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

            <Button click={this.clearDisplay} label="C" value=""/>
            <Button click={this.click} label="0" value="0"/>
            <Button click={this.click} label="," value="."/>
            <Button click={this.click} label="+" value="+"/>
          
            <Button click={this.calculateOperations} label="=" value=""/>
           
          </div>
      </div>
    );
  }
}