import React, { Component } from 'react';
import Field from './Field';

import '../stylesheets/Form.css';

class Form extends Component {

  render() { 
    return (
      <div className="form">
        <h3>Informations:</h3>
        <Field firstInput="Nom"
               secondInput="Prénom"
               textarea="Message"
               buttonName="Envoyer"/>
      </div>
    )
  }
}
 
export default Form;