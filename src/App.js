import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
        colorText : '',
        backgroundCC : '',
        backgroundCCTest : ''
      }
      
      this.changeColorValue = this.changeColorValue.bind(this);
      
  }

  componentDidMount(){
    let possibleValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let rand1 = possibleValues[Math.floor(Math.random() * possibleValues.length)];

    let rand2 = possibleValues[Math.floor(Math.random() * possibleValues.length)];

    let rand3 = possibleValues[Math.floor(Math.random() * possibleValues.length)];

    let fn = rand1 + rand2 + rand3;
    //alert(fn);
    this.setState({
      backgroundCC : fn,
      backgroundCCTest : fn
    });
  }




  changeColorValue(e)
  {
      console.log(e.target.value);
      let passedvalue = e.target.value;
      var ishex  = /([0-9A-F]{6}$)|([0-9A-F]{3}$)/i;
      if(ishex.test(passedvalue))
      {

        //let invc = this.getInverseColor(passedvalue);
        console.log('true'+passedvalue);
        this.setState({
          backgroundCC : passedvalue,
          backgroundCCTest : passedvalue
        });
      }
      else 
      {
        console.log("yest")
        this.setState({
          backgroundCC : passedvalue
        });
      }
  }


/*   getInverseColor(v)
  {
      let newColor = '';
      if (v.indexOf('#') === 0) {
        v = v.slice(1);
      }

      if(v.length == 3)
      {
        v = v[0] + v[0] + v[1] + v[1] + v[2] + v[2]
      }
  } */


  render() {

    const containerStyle =  {
      backgroundColor: "#"+this.state.backgroundCCTest,
    };


    return (
      <div className="container" style={containerStyle}>
          <div className="color-holder" style={containerStyle}>
              <span className="hash-class">#</span><input className="inputbox" onChange={this.changeColorValue} value={this.state.backgroundCC} maxLength="3" />
          </div>
          
      </div>
    );
  }
}

export default App;
