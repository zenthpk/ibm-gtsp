import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', message: ''};
  }
  render() {
  return (
    <React.Fragment>
    <p>
      <b> {this.props.name} </b>
      <br/> {this.props.message} <br/>
    </p>
    </React.Fragment>
);
}
}

export default Comment;
