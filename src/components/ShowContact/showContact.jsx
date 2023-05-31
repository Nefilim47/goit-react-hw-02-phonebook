import React from 'react';

export class ShowContact extends React.Component {
  state = {
    contact: this.props.contacts,
  };
  render() {
    console.log(this.state.contact);

    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}
