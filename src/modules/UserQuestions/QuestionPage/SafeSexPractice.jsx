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

export const SafeSexPractice = ({ toNextQuestion, setToNextQuestion, setAnswer, answer }) => {
	const handleChange = (event) => {
		setAnswer({...answer, q3: event.target.value})
		setToNextQuestion(toNextQuestion + 1);
	}

	return (
		<Stack sx={questionStyle.body}>
			<FormControl style={questionStyle.innerBody}>
				<FormLabel style={questionStyle.label}>
					<Button sx={questionStyle.prevBtn} onClick={() => setToNextQuestion(toNextQuestion - 1)}>
						<ArrowLeftIcon />
					</Button>
					<Typography variant="body/1">Do you observe safe sex practice?</Typography>
				</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					onChange={handleChange}
					sx={questionStyle.radioGroup}
				>
					<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
					<FormControlLabel value="No" control={<Radio />} label="No" />
				</RadioGroup>
			</FormControl>
		</Stack>
	);
}