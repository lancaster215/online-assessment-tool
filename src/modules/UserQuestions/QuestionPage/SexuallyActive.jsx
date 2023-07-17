import { Stack, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Typography } from "@mui/material"

const questionStyle = {
	body: {
		maxWidth: '350px',
		width: 'calc(100% - 50px)',
		margin: '20vh auto',
	},
	innerBody: {
		display: 'grid',
		gap: '20px',
	}
}

export const SexuallyActive = ({ toNextQuestion, setToNextQuestion, setAnswer, answer }) => {
	const handleChange = (event) => {
		setAnswer({...answer, q1: event.target.value})
		setToNextQuestion(toNextQuestion + 1);
	}
	return (
		<Stack sx={questionStyle.body}>
		<FormControl style={questionStyle.innerBody}>
			<FormLabel>
				<Typography variant="body/1">Are you Sexually Active?</Typography>
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				onChange={handleChange}
			>
				<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
				<FormControlLabel value="No" control={<Radio />} label="No" />
			</RadioGroup>
		</FormControl>
		</Stack>
	);
}