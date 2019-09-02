import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    results: {},  // {[id]: success/error}
    activeQuestion: 0,
    isFinished: false,
    answerState: null, //есть ли какой то ответ?
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Красный', id: 2},
          {text: 'Синий', id: 3},
          {text: 'Зеленый', id: 4},
        ]
      },
      {
        question: 'В каком году основан Санкт-Петербург?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1702', id: 2},
          {text: '1703', id: 3},
          {text: '1701', id: 4},
        ]
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]; //{[answerId]: 'success или error'}
      if(this.state.answerState[key] ===  'success') {
        return;
      }
    }

     const question = this.state.quiz[this.state.activeQuestion];
     const results = this.state.results;

     if(question.rightAnswerId === answerId) {
       if(!results[question.id]) {
         results[question.id] = 'success';
       }

       this.setState({
         answerState: {[answerId]: 'success'},
         results
       });

       const timeout = setTimeout(() => {
         if (this.isQuizFinished()) {

           this.setState({
             isFinished: true
           });

         } else {
           this.setState({
             activeQuestion: this.state.activeQuestion + 1,
             answerState: null
           });
         }

         clearTimeout(timeout);
       }, 1000);

     } else {
        results[question.id] = 'error';
        this.setState({
          answerState: {[answerId]: 'error'},
          results
        });
     }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  onReplayHandler = () => {
    this.setState({
      results: {},
      activeQuestion: 0,
      isFinished: false,
      answerState: null,
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onReplay={this.onReplayHandler}
              />
            : <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}

export default Quiz;