import React from 'react';

function ScoreCard({score, wrong}){
    return(
        <>
            <h2>Correct: {score}/21 | Incorrect: {wrong}/21</h2>
        </>

    )
}

export default ScoreCard;