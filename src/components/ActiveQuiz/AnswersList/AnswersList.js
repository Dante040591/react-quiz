import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
  const listItems = props.answers.map((answer, index) => {
    return (
      <AnswerItem
        key={index}
        answer={answer}
        onAnswerClick={props.onAnswerClick}
      />
    )
  });

  return (
    <ul className={classes.AnswersList}>
      {listItems}
    </ul>
  )
};

export default AnswersList;