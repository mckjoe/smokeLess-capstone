import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">to details</Link> instead?</h3>
    </div>
  );
}

export default Error404;
