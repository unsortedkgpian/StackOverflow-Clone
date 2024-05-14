import React from 'react';
import * as api from '../api/index';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data});
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllQuestions = () => async (disptach) => {
    try {
        const {data} = await api.getAllQuestions()
        disptach({type: 'FETCH_ALL_QUESTIONS', payload: data});
    } catch (error) {
        console.log(error)
    }
}

