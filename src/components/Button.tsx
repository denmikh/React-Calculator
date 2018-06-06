import * as React from 'react';
import { Component } from 'react';
import '../App.css';
import { Display } from '.';


export namespace Button{
  export interface Props{
    label: string
    value: string
    click: (value: string) => void
  }

  export interface State {
    //empty
  }
}

export class Button extends Component<Button.Props, Button.State> {
    constructor(props) {
      super(props);
    }
  
    onClick = () => {
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