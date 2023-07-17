import React, { useState } from 'react';
import { SexuallyActive } from './QuestionPage/SexuallyActive';
import { SexualPartners } from './QuestionPage/SexualPartners';
import { SafeSexPractice } from './QuestionPage/SafeSexPractice';
import { SignsAndSymptoms } from './QuestionPage/SignsAndSymptoms';
import { TakeAnyMedicines } from './QuestionPage/TakeAnyMedicines';
import { Typography, Button, Stack } from '@mui/material';
import { useAddUserAnswerMutation } from '@/store/services/userAnswers';
import { useRouter } from 'next/router';

const questionBody = {
	body: {
		maxWidth: '350px',
		width: 'calc(100% - 50px)',
		margin: '20vh auto',
	},
	note: {
		textAlign: 'center',
	}
}

export const UserQuestions = () => {
	const router = useRouter();
	const [addUserAnswers] = useAddUserAnswerMutation()
	const [toNextQuestion, setToNextQuestion] = useState(1);
	const [answer, setAnswer] = useState({});
 
	const handleConfirm = async() => {
		const paramString = window.location.search
		const urlParam = new URLSearchParams(paramString);
		const payload = {
			name: urlParam.get('name'),
			q1: answer.q1,
			q2: answer.q2,
			q3: answer.q3,
			q4: answer.q4,
			q5: answer.q5,
		}
		await addUserAnswers(payload);
		router.push('/thankyou');
	}

	if (toNextQuestion === 1) {
		return <SexuallyActive 
		toNextQuestion={toNextQuestion} 
		setToNextQuestion={setToNextQuestion} 
		answer={answer}
		setAnswer={setAnswer} />
	}

	if (toNextQuestion === 2) {
		return <SexualPartners 
		toNextQuestion={toNextQuestion} 
		setToNextQuestion={setToNextQuestion} 
		answer={answer}
		setAnswer={setAnswer} />
	}

	if (toNextQuestion === 3) {
		return <SafeSexPractice 
		toNextQuestion={toNextQuestion} 
		setToNextQuestion={setToNextQuestion} 
		answer={answer}
		setAnswer={setAnswer} />
	}

	if (toNextQuestion === 4) {
		return <SignsAndSymptoms 
		toNextQuestion={toNextQuestion} 
		setToNextQuestion={setToNextQuestion} 
		answer={answer}
		setAnswer={setAnswer} />
	}

	if (toNextQuestion === 5) {
		return <TakeAnyMedicines 
		toNextQuestion={toNextQuestion} 
		setToNextQuestion={setToNextQuestion} 
		answer={answer}
		setAnswer={setAnswer} />
	}

	if(toNextQuestion === 6) {
		return (
		<Stack sx={questionBody.body} gap="20px">
			<Typography sx={questionBody.note} variant='body/1'>
				All information is confidential and directed to Rural Health Unit Physician. We&apos;ll update you as soon as possible by contacting you through your given contact number. Thank you!
			</Typography>
			<Typography sx={questionBody.note} variant="info"><i>Press confirm to submit your data.</i></Typography>

			<Button onClick={handleConfirm} variant="contained">Confirm</Button>
		</Stack>)
	}
	return null;
}