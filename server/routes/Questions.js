import express from 'express'

// import { AskQuestion} from '../controllers/Questions.js'
// import { getAllQuestions } from '../controllers/Questions.js'
// import { deleteQuestion } from '../controllers/Questions.js'
// import { voteQuestion } from '../controllers/Questions.js'

// import { AskQuestion, getAllQuestions, deleteQuestion } from '../controllers/Questions.js';
 import { AskQuestion, getAllQuestions, deleteQuestion , voteQuestion} from "../controllers/Questions.js"
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/Ask', auth, AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', auth,  deleteQuestion );
router.patch("/vote/:id", auth,  voteQuestion);

export default router;