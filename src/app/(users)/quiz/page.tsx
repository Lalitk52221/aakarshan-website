"use client"
import { quizData } from '@/lib/data';
import React, { useState } from 'react';

export default function QuizPage() {
  const[currentQ,setCurrentQ]=useState(0);
  const[score,setScore]=useState(0);
  const[showResult,setShowResult]=useState(false);

  const handleAnswer = (index: number)=>{
    if(index === quizData[currentQ].correctIndex){
      setScore(score+1)
    }
    const nextQ = currentQ+1;
    if(nextQ<quizData.length){
      setCurrentQ(nextQ);
    }else{
      setShowResult(true)
    }
  }
  return (
<div className='h-screen py-34 px-10 mx-auto max-w-xl'>
  <h1>Quiz</h1>
  {!showResult?(
    <div>
      <h2>{quizData[currentQ].id}. {quizData[currentQ].question}</h2>
      {quizData[currentQ].options.map((opt,index)=>(
        <button key={index} 
        onClick={()=>handleAnswer(index)}
        className='block my-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 min-w-lg'>
          <option value="opt" className='w-full '>{opt}</option>
        </button>
      ))}
      
    </div>
  ):<h2 className='font-semibold text-xl'>Quiz Complete!, Your Score is {score} out of {quizData.length}</h2>
  }
  
</div>
  )
}
