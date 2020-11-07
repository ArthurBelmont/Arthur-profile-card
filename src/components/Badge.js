import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Badge = (props) => {

  return <div className="badge">

    <CSSTransitionGroup transitionName="fade" 
      transitionEnterTimeout={300} 
      transitionLeaveTimeout={300}>

      <h1 key={props.word}>{props.word}</h1>

    </CSSTransitionGroup>

  </div>
};

export default Badge;