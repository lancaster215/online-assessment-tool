import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import { Button, Stack, Input, Typography } from "@mui/material"

const questionStyle = {
	body: {
		maxWidth: '350px',
		width: 'calc(100% - 50px)',
		margin: '20vh auto',
	},
	innerBody: {
		display: 'grid',
		gap: '20px',
	},
	prevBtn: {
		color: '#000000',
		width: '5vw'
	},
}

export const TakeAnyMedicines = ({ toNextQuestion, setToNextQuestion, setAnswer, answer }) => {
	const handleChange = (event) => {
		setAnswer({...answer, q5: event.target.value})
	}
	return (
		<Stack sx={questionStyle.body}>
			<Stack sx={questionStyle.innerBody}>
				<Stack direction='row'>
					<Button sx={questionStyle.prevBtn} onClick={() => setToNextQuestion(toNextQuestion - 1)}>
						<ArrowLeftIcon />
					</Button>
					<Stack>
						<Typography variant="body/1">Do you take any medicines?</Typography>
						<Typography variant="info"><i>*if yes, please indicate names of the medicine</i></Typography>
					</Stack>
				</Stack>
				<Input onChange={handleChange}/>
				<Button variant="outlined" onClick={() => setToNextQuestion(toNextQuestion+1)}>Next</Button>
			</Stack>
		</Stack>
	)
}