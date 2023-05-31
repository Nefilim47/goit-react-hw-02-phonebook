import React from 'react';
import { InputName } from './AddContact/inputName';
// import { ShowContact } from './ShowContact/showContact';

export class App extends React.Component {
  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };

  render() {
    return (
      <>
        <InputName />
        {/* <ShowContact /> */}
      </>
    );
  }
}
