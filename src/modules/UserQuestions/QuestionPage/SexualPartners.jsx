import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import { Stack, Button, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Typography } from "@mui/material"

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
	label: {
		display: 'flex',
	},
	prevBtn: {
		color: '#000000',
		width: '5vw'
	},
	radioGroup: {
		marginLeft: '5vw'
	}
}

export const SexualPartners = ({ toNextQuestion, setToNextQuestion, setAnswer, answer }) => {
	const handleChange = (event) => {
		setAnswer({...answer, q2: event.target.value})
		setToNextQuestion(toNextQuestion + 1);
	}
	return (
		<Stack sx={questionStyle.body}>
			<FormControl style={questionStyle.innerBody}>
				<FormLabel style={questionStyle.label}>
					<Button sx={questionStyle.prevBtn} onClick={() => setToNextQuestion(toNextQuestion - 1)}>
						<ArrowLeftIcon />
					</Button>
					<Typography variant="body/1">If yes, how many sexual partners do you have?</Typography>
				</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					onChange={handleChange}
					sx={questionStyle.radioGroup}
				>
					<FormControlLabel value="1" control={<Radio />} label="1" />
					<FormControlLabel value="2" control={<Radio />} label="2" />
					<FormControlLabel value="3 or more" control={<Radio />} label="3 or more" />
				</RadioGroup>
			</FormControl>
		</Stack>
	)
}