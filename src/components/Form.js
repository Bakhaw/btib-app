import React, { Component } from "react";
import Field from "./Field";

import "../stylesheets/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      lastnameError: false,
      name: "",
      nameError: false,
      textareaValue: "",
      formError: false,
      canSubmit: false
    };
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleLastName = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  handleTextarea = e => {
    this.setState({
      textareaValue: e.target.value
    });
  };

  verifierName = () => {

    // si le prénom ne commence pas par une majuscule
    if (
      this.state.name.slice(0, 1) !== this.state.name.toUpperCase().slice(0, 1)
    ) {
      this.setState({
        nameError: true,
        formError: true
      });
    }

    // reset des states pour ne pas garder l'erreur affichée en cas de correction
    if (
      this.state.nameError &&
      this.state.name.slice(0, 1) === this.state.name.toUpperCase().slice(0, 1)
    ) {
      this.setState({
        nameError: false,
      });
    }
  };

  verifierLastName = () => {
    
    // si le nom ne commence pas par une majuscule
    if (
      this.state.lastname.slice(0, 1) !==
      this.state.lastname.toUpperCase().slice(0, 1)
    ) {
      this.setState({
        lastnameError: true,
        formError: true
      });
    }

    // reset des states pour ne pas garder l'erreur affichée en cas de correction
    if (
      this.state.lastnameError &&
      this.state.lastname.slice(0, 1) ===
        this.state.lastname.toUpperCase().slice(0, 1)
    ) {
      this.setState({
        lastnameError: false,
      });
    }
  };

  verifierForm = () => {
    // reset du state si les erreurs on été corrigées
    if (
      this.state.formError &&
      !this.state.lastnameError &&
      !this.state.nameError
    ) {
      this.setState({
        formError: false
      });
    }
  }

  onSubmit = () => {

    // verification des states pour récuperer les erreurs
    this.verifierName()
    this.verifierLastName()

    this.verifierForm()

    // si il n'y à pas d'erreur dans le form, on peux l'envoyer
    if (!this.state.formError) {
      this.setState({
        canSubmit: true
      });
    }
  };

  render() {
    return (
      <div className="form">
        {this.state.canSubmit ? (
          // Si il n'y a pas d'erreur dans le form
          <h3>Votre description à bien été envoyée {this.state.name}!</h3>
        ) : (
          // Si il y a encore des erreurs dans le form
          <div>
            <h3>Informations:</h3>
            <Field
              name="Prénom"
              handleInput={this.handleName}
              inputValue={this.state.name}
              nameError={this.state.nameError}
              errorMessage="Le Prénom doit commencer par une majuscule"
              onBlur={this.verifierName}
            />

            <Field
              name="Nom"
              handleInput={this.handleLastName}
              inputValue={this.state.lastname}
              lastnameError={this.state.lastnameError}
              errorMessage="Le Nom doit commencer par une majuscule"
              onBlur={this.verifierLastName}
            />

            <Field
              name="Description"
              multiline={true}
              handleTextarea={this.handleTextarea}
              textareaValue={this.state.textareaValue}
            />

            <button type="button" onClick={this.onSubmit}>
              Valider
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
