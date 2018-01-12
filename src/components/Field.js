import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <form>
        {this.props.multiline ? (
          // si la props multiline={true}, affiche une textarea
          <div>
            <textarea
              cols="30"
              rows="10"
              placeholder={this.props.name}
              onChange={this.props.handleTextarea}
            />
            <div className="errorMessage">
              <p>{this.props.textareaValue.length}/140</p>
            </div>
            {this.props.textareaValue.length > 140 && (
              <p>{this.props.errorMessage}</p>
            )}
          </div>
        ) : (
          // si la props multiline={false} ou non définie, affiche un input
          <div>
            <input
              type="text"
              placeholder={this.props.name}
              value={this.props.inputValue}
              onChange={this.props.handleInput}
              onBlur={this.props.onBlur}
            />

            {/* Messages d'erreur */}
            {this.props.nameError && (
              <p>{this.props.errorMessage}</p>
            )}
            {this.props.lastnameError && (
              <p>{this.props.errorMessage}</p>
            )}
          </div>
        )}
      </form>
    );
  }
}

export default Field;
