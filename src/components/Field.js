import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInputValue: "",
      secondInputValue: "",
      textareaValue: "",
      send: false,
      sendError: false,
      textareaError: false,
    };
  }

  handleFirstInput = (e) => {
    this.setState({
      firstInputValue: e.target.value
    })
  }

  handleSecondInput = (e) => {
    this.setState({
      secondInputValue: e.target.value
    })
  }

  handleTextarea = (e) => {
    this.setState({
      textareaValue: e.target.value
    })

    this.state.textareaValue.length > 139
    ? this.setState({ textareaError: true })
    : this.setState({ textareaError: false })

  }

  sendForm = () => {
    this.state.textareaError ? this.setState({ sendError: true }) : this.setState({ send: true })
  }

  render() {
    return (
      <div>
      <input type="text"
             placeholder={this.props.firstInput}
             onChange={this.handleFirstInput}
             value={this.state.firstInputValue}/>
      <input type="text"
             placeholder={this.props.secondInput}
             onChange={this.handleSecondInput}
             value={this.state.secondInputValue}/>

        {this.state.textareaError &&
          <p>Le message doit contenir 140 caractères max</p>
        }
        <textarea name="description"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder={this.props.textarea}
                  onChange={this.handleTextarea}>
        </textarea>
        <h6>{!this.state.err ? `{${140 - this.state.textareaValue.length} }` : null }</h6>
        <button type="submit"
                  onClick={this.sendForm}>
            {this.props.buttonName}
          </button>
          {this.state.send &&
            <h5>Votre message à bien été envoyé {this.state.secondInputValue} !</h5>
          }
          {this.state.sendError &&
            <h5 style={{ color: 'red' }}>Il y a une erreur dans le formulaire</h5>
          }
      </div>
    )
  }
}

export default Field;