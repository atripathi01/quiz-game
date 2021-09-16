import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { question } from './questionApi'
import './quiz.css';

export default function Display() {
    const[current,setCurrent]=useState(0);
    const[result,setResult]=useState(false);
    const[score,setScore]=useState(0);
    const [seconds, setSeconds] = React.useState(10);
    const handlerNextButton=()=>{
        const nextOne=current+1;
        if(nextOne<question.length){
            setCurrent(nextOne);
        }else{
            setResult(true);
        }
    }
    // const handlerButton=()=>{
    //     const perviousOne=current-1;
    //     if(perviousOne>=0){
    //         setCurrent(perviousOne);
    //     }else{
    //         setCurrent(current);
    //     }
    // }
    const handlerCorrectAnsButton=(correct)=>{
       
        const nextOne=current+1;
        if(nextOne<question.length){
            setCurrent(nextOne);
            
        }else{
            setResult(true);
        }
        if(correct===true){
            setScore(score+1);
        }

    }
    const timer=(props)=>{
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds("timeout");
            handlerCorrectAnsButton(props);
          }
    }

    // const handleSelected=(correct)=>{
    //     if( selected===correct &&correct===true){
    //         return 'correct-select';
    //     }
    //     else if( true!==correct){
    //         return 'wrong-select';
    //     }else if(true===correct){
    //         return 'correct-select'
    //     }
    // }
    return (<>
    <Navbar />
    
        {
            result?(
                <div className="cent">
                <div className="score-box">
                <h1 className="score-card"> your score is {score} out of {question.length} </h1>
                
                <Link to="/"><Button className="start-btn">Restart Quiz!</Button></Link>
                </div>
                </div>
            ):(
               
                <div className="quiz-box">
                   
                   <div className="center-box">
                       <div className="difficulty">{question[current].catagory}</div>
                <h1 className="question-text">{question[current].ques}</h1>
                <p className="option-box">
                    {question[current].ans.map((opt)=>(
                       <button className={"option-btn" }
                       
                       onClick={()=>{
                           
                           handlerCorrectAnsButton(opt.correct)
                        //    .correct
                       }}> {opt.option}</button>
                 ))}
                </p>
                <div className="btn-box">
          <Link to="/">  <button className="p-btn" >Quit</button></Link>
                <button className="n-btn" onClick={()=>{
                   handlerNextButton()
                   timer();
                    
                }}>Next</button>
                </div>
                </div> 
            </div>
            )
        }

        
        </>

    )
}
