import React from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import { ShowContact } from '../ShowContact/showContact';

export class InputName extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  changeName = event => {
    this.setState({ name: event.target.value });
  };
  changeNumber = event => {
    this.setState({ number: event.target.value });
  };
  addName = () => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
    }));
  };

  render() {
    return (
      <>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeName}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.changeNumber}
          />
          <button onClick={this.addName}>Add</button>
          {/* <ShowContact /> */}
        </div>
        <div>
          <ul>
            {this.state.contacts.map(cotact => {
              return (
                <li key={cotact.id}>
                  <p>
                    {cotact.name}:{cotact.number}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
