import React, { Component } from 'react';
import './Question.css';

class Question extends Component{

    state = {
        answerChoices: [],
        disabled: false
    }
    calculate (text) {
        if(text===this.props.question.correct){
            this.props.handleClick(0)
        } else {
            this.props.handleClick(1)
        }
        this.setState({disabled: true, answerChoices: [text]})

    }
    async componentDidMount(){
        let answerChoices = this.props.question.incorrect.concat(this.props.question.correct)
        answerChoices = answerChoices.sort(() => Math.random() - 0.5);
        this.setState({
          answerChoices: answerChoices
        })
    }


    render() {
        return(
            <>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h1>{this.props.question.question}</h1>
                </div>
                <div className='panel-body'>
                    {this.state.answerChoices.map((text, index) => ( 
                            <button
                                key={index}
                                onClick={() => this.calculate(text)}
                                disabled={this.state.disabled}
                            >{text}
                            </button>
                        
                    ))}
                </div>
            </div>
            </>
        )
    }
}


export default Question;

    // className="answer"
    // onClick={()=>{ 
    //         setAnswer(); 
    //         selected(text); 
    //     }}
