import { Stack, Typography } from "@mui/material"
import Image from "next/image"

export const ThankYouPage = () => {
    return (<Stack gap={10} sx={{
        maxWidth: '1050px',
        width: 'calc(100% - 20px)',
        margin: '20vh auto',
        textAlign: 'center'
    }}>
        <Typography sx={{
            fontSize: '50px',
        }}>Thank you!</Typography>
        <Image 
            src={'/thumbs_up.png'} 
            alt="thumbs-up"
            width={218.89}
            height={215.75}
            style={{ marginLeft: 'auto' }}/>
    </Stack>)
}