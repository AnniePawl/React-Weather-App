import React from 'react';

function ErrorMessage(props) {
  const { message } = props;
  return <h1> {message} </h1>;
}

export default ErrorMessage;
