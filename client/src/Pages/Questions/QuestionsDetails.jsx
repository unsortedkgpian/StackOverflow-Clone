import React, { useState } from 'react'
import { useParams, Link , useNavigate , useLocation } from 'react-router-dom'

import upvote from '../../assets/upvote.svg'
import downvote from '../../assets/downvote.svg'

import './Questions.css'

import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

// import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { postAnswer, deleteQuestion  } from '../../actions/question';

import moment from 'moment'

import copy from 'react-copy-to-clipboard'
// import { deleteQuestion } from '../../api'

const QuestionsDetails = () => {

    const { id } = useParams();
    const questionsList = useSelector(state => state.questionsReducer);
    // console.log(questionsList);



    // var questionsList =[{
    //     _id:'1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo DB"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id:'2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn:"jan 1",
    //     userId: 1,
    //     answer:[{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id:'3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn:"jan 1",
    //     userId: 1,
    //     answer:[{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // }]
    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer))
    const handlePostAns = (e, answerLength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question');
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert("Enter an answer before submitting");
            } else{
                dispatch(postAnswer( { id, noOfAnswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name,  userId: User?.result?._id}));
            }
        }
    }


    const location = useLocation();
    const url = "http://localhost:3000"

    const handleShare = () => {
        copy(url+location.pathname)
        alert("Copied url : " +url+location.pathname)
    }

    const handleDelete = () =>  {
        dispatch(deleteQuestion(id, navigator))
    }



  return (
    <div className="question-details-page">
        {
            questionsList.data === null ?
            <h1>Loading...</h1>:
            <>
                {
                    questionsList.data.filter(question => question._id === id).map(question => (
                        <div key={question._id} >
                            {console.log(question)}
                            <section className="question-details-container">
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className="question-votes">
                                        <img src={upvote} alt="" width='18' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={downvote} alt="" width='18' />
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <p className="question-body">{question.questionBody}</p>
                                        <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag} > {tag} </p>
                                            ))
                                        }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare} >Share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete}  >Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}  >
                                                    <Avatar backgroundColor="orange" px='8px' py='5px'  >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userId}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </section>

                            {
                                question.noOfAnswers !==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                    </section>
                                )
                            }

                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form action="" onSubmit={(e) => {handlePostAns(e, question.answer.length)}}>
                                    <textarea name="" id="" cols='30' rows='10' onChange={e => setAnswer(e.target.value)}  ></textarea> <br />
                                    <input type="Submit" className='post-ans-btn' value='Post Your Answer' />
                                </form>
                                <p>
                                    Browse other Question tagges
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags' > {tag} </Link>
                                        ))
                                    } or 
                                    <Link  to='/AskQuestion' style={{textDecoration:"none", color:"009dff"}} > ask your own question. </Link>
                                </p>
                            </section>

                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionsDetails