import * as React from 'react';
import '../App.css';

export namespace Display {
  export interface Props {
    text: string
  }

  export interface State {
    //empty
  }
}
export class Display extends React.Component<Display.Props, Display.State > {
    constructor(props) {
      super(props);
    }
  
    render () {
      const { text } = this.props;
      return (
          <div className="Display">
            <div className="result">
              {text.length > 10 ? `...${text.slice(text.length - 10)}` : text}
            </div>
          </div>
      );
    }
  };