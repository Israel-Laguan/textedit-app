import React, { Component } from 'react';

// import Clock from '../components/Clock.js';
import TextEdit from '../components/TextEdit.js';



class TextEditContainer extends Component {
  constructor() {
    super()
    this.state = {
      connectionExists: false,
      choice: '',
      // showRoom: 'room4', //default
      showRoom: '', //default
    };
    this.onChoiceClick = this.onChoiceClick.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.setConnectionExistsToTrue = this.setConnectionExistsToTrue.bind(this)
    this.setConnectionExistsToFalse = this.setConnectionExistsToFalse.bind(this)
  } //end constructor


  onChoiceClick = event => {
    const buttonValue = event.target.name
    this.setState({ choice: buttonValue });
  }

  onButtonClick = event => {
    const buttonValue = event.target.name
    console.log('0. onButtonClick - buttonValue: ', buttonValue)
    console.log('1. onButtonClick - setConnectionExistsToFalse...')
    this.setConnectionExistsToFalse() //first setConnectionExistsToFalse, to stop disconnect Yjs...
    console.log('2. onButtonClick - ...then setState to new showRoom...')
    this.setState({
      showRoom: buttonValue,
    }, () => {
      this.setConnectionExistsToTrue()
    }) //next set state to show the room user clicked, and then setConnectionExistsToTrue, to render Yjs
    console.log('3. onButtonClick - ...and connectionExists to true')
  }

  handleColorBorder(string) {
    var colorBorder
    if (string === 'room1') {
      colorBorder = {border:'2px solid blue',}
    }
    if (string === 'room2') {
      colorBorder = {border:'2px solid red',}
    }
    if (string === 'room3') {
      colorBorder = {border:'2px solid yellow',}
    }
    return colorBorder
  }

  setConnectionExistsToTrue() {
    console.log('calling setConnectionExistsToTrue...')
    this.setState({ connectionExists: true });
    // console.log('TextEditContainer - STATE NOW - this.state is: ', this.state)
  }

  setConnectionExistsToFalse() {
    console.log('calling setConnectionExistsToFalse...')
    this.setState({ connectionExists: false });
    // console.log('TextEditContainer - STATE NOW - this.state is: ', this.state)
  }


  render() {

    console.log('TextEditContainer - render - this.state is: ', this.state)
    return (
      <div className='TextEditContainer-style'>

        <h2>
          TextEditContainer
        </h2>

        <div className="choiceBox">
          <p>
            Other state updates don't affect Yjs.
          </p>
          <button id="a" name="a" onClick={this.onChoiceClick}   className='blueButton'>Choice A</button>
          <button id="b" name="b" onClick={this.onChoiceClick}    className='redButton'>Choice B</button>
          <button id="c" name="c" onClick={this.onChoiceClick} className='yellowButton'>Choice C</button>
          <p>
            Choice: {this.state.choice ? this.state.choice : 'chosen one here'}
          </p>
        </div>

        <button id="showRoom1" name="room1" onClick={this.onButtonClick}   className='blueButton'>Show Room 1</button>
        <button id="showRoom2" name="room2" onClick={this.onButtonClick}    className='redButton'>Show Room 2</button>
        <button id="showRoom3" name="room3" onClick={this.onButtonClick} className='yellowButton'>Show Room 3</button>

        <p>
          Active Room: <span style={this.handleColorBorder(this.state.showRoom)}>
            {this.state.showRoom ? this.state.showRoom : "room name goes here..."}
          </span>
        </p>

        {/* <button onClick={this.setConnectionExistsToTrue}   className='blueButton'>Connection Exists</button> */}

        <div>
          <TextEdit
            showRoom={this.state.showRoom} //this is only prop that TextEdit needs!!!
            connectionExists={this.state.connectionExists}
            handleColorBorder={this.handleColorBorder}
            setConnectionExistsToTrue={this.setConnectionExistsToTrue}
          />
        </div>

      </div>
    );
  }
}

export default TextEditContainer;
