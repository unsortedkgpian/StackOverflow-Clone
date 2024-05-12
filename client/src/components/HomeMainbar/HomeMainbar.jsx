import React from 'react'
import { Link, useLocation , useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import AskQuestion from '../../Pages/AskQuestion/AskQuestion'

const HomeMainbar = () => {

    const location = useLocation();
    const user = 1;
    const navigate = useNavigate ();

    var questionsList =[{
        id:1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo DB"],
        userPosted: "mano",
        askedOn:"jan 1"
    },{
        id:1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn:"jan 1"
    },{
        id:3,
        votes: 1,
        noOfAnswers: 0,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo DB"],
        userPosted: "mano",
        askedOn:"jan 1"
    }]

    


    const checkAuth =() => {
        if(user == null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }


  return (
    <div className="main-bar">
        <div className="main-bar-header">
            {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            <button to='/AskQuestions' onClick={checkAuth} className='ask-btn' >Ask Questions</button>
        </div>
        <div>
            {
                questionsList === null ?
                <h1>Loading ...</h1> :
                <>
                    <p>{ questionsList.length } questions</p>
                    <QuestionList questionsList = {questionsList} />
                </>
            }
        </div>
    </div>
  )
}

export default HomeMainbar