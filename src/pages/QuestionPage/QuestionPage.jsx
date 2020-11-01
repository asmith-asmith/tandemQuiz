import React from 'react';
import './QuestionPage.css';
import Question from '../../components/Question/Question';

function QuestionPage(props){
    return(
        <>
            <h1>Question List</h1>
            <div className='QuestionPage-grid'>
                {props.questions.map(question =>
                    <Question
                        question={question}
                        handleClick={props.handleClick}
                    />
                )}
            </div>
        </>
    )
}

export default QuestionPage;