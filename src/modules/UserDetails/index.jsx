import { useAddUserDetailsMutation } from "@/store/services/userDetails"
import { Button, Typography, Stack } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"

const formStyle = {
	form: {
		maxWidth: '350px',
		width: 'calc(100% - 50px)',
		margin: '20vh auto',
	},
	formBody: {
		display: 'grid',
		gap: '20px',
	},
	input: {
		height: '5vh'
	}
}

export const UserDetails = () => {
	const router = useRouter();
	const [addUserDetails] = useAddUserDetailsMutation();

	const handleSubmit = async (values) => {
		router.push(`/questions/?name=${values.fullName}`)
		const payload = {
			fullName: values.fullName,
			age: values.age,
			civilStatus: values.civilStatus,
			address: values.address,
			contactNumber: values.contactNumber,
		}	
		await addUserDetails(payload);
	}

	return (<Formik
		initialValues={{ fullName: '', age: '', civilStatus: '', address: '', contactNumber: '' }}
		validate={value => {
			let error = {};
			if (!value.age || !value.civilStatus, !value.address, !value.contactNumber) {
				error = {
					age: 'Field is Required*',
					civilStatus: 'Field is Required*',
					address: 'Field is required*',
					contactNumber: 'Field is required*',
				}
			} else if (!/^(09)\d{9}$/.test(value.contactNumber)) {
				error.contactNumber = 'Enter a valid contact number.'
			} else if (value.age <= 0) {
				error.age = 'Enter a valid age.'
			}
			return error;
		}}
		onSubmit={handleSubmit}
	>
		{({
			errors,
		}) => (
			<Stack sx={formStyle.form}>
				<Form style={formStyle.formBody}>
					<Stack>
						<label htmlFor='fullName'>
							<Typography variant="body/1">Full Name</Typography>
						</label>
						<Field type='fullName' name='fullName' style={formStyle.input}/>
					</Stack>

					<Stack direction='row' sx={{justifyContent: 'space-between'}}>
						<Stack>
							<label htmlFor='age'>
								<Typography variant="body/1">Age</Typography>
							</label>
							<Field type='age' name='age' style={formStyle.input}/>
							<Typography variant="error">{errors.age}</Typography>
						</Stack>

						<Stack>
							<label htmlFor='civilStatus'>
								<Typography variant="body/1">Civil Status</Typography>
							</label>
							<Field type='civilStatus' name='civilStatus' style={formStyle.input}/>
							<Typography variant="error">{errors.civilStatus}</Typography>
						</Stack>
					</Stack>

					<Stack>
						<label htmlFor='address'>
							<Typography variant="body/1">Address</Typography>
						</label>
						<Field type='address' name='address' style={formStyle.input}/>
						<Typography variant="error">{errors.address}</Typography>
					</Stack>

					<Stack>
						<label htmlFor='contactNumber'>
							<Typography variant="body/1">Contact Number</Typography>
						</label>
						<Field type='contactNumber' name='contactNumber' style={formStyle.input}/>
						<Typography variant="error">{errors.contactNumber}</Typography>
					</Stack>

					<Button variant="contained" type="submit">
						Submit
					</Button>
				</Form>
			</Stack>
		)}
	</Formik>)
}