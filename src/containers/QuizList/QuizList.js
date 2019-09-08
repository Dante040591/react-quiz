import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classes from './QuizList.css';

const quizes = [1, 2, 3];

export default class QuizList extends Component {

  renderQuiz() {
    return quizes.map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Tect {quiz}
          </NavLink>
        </li>
      ) ;
    });
  };

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>
            {this.renderQuiz()}
          </ul>
        </div>
      </div>
    );
  };
};