import React from 'react';
import { Link } from 'react-router-dom';

class Loading extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="loading">
        <div className="loading-logo">
          <h3>M</h3>
        </div>
      </div>
    );
  }
}

export default Loading;
