import express from 'express'

import { AskQuestion} from '../controllers/Questions.js'
import { getAllQuestions } from '../controllers/Questions.js'
import { deleteQuestion } from '../controllers/Questions.js'

// import { AskQuestion, getAllQuestions, deleteQuestion } from '../controllers/Questions.js';

const router = express.Router();

router.post('/Ask', AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion );

export default router