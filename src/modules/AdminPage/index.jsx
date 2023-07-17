import React, { useState, useRef } from 'react';
import { useGetAllUserAnswerQuery } from "@/store/services/userAnswers"
import { useGetUserAnswerMutation } from '@/store/services/userAnswer';
import { Table, Typography, Stack, TableHead, TableCell, TableBody, TableRow, Button, Modal, useMediaQuery } from "@mui/material"
import UserIcon from '@/components/icons/UserIcon';
import { useGetUserDetailsMutation } from '@/store/services/userDetails';
import { useReactToPrint } from 'react-to-print';

const tableBody = {
    table: {
        maxWidth: '1050px',
        width: 'calc(100% - 20px)',
        margin: '20vh auto',
    },
    tableBody: {
        display: 'grid',
        gap: '20px',
    },
    mobileModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #ffe7e8',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #ffe7e8',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
    },
    modalBtn: {
        color: '#FFFFFF',
        mt: '20px'
    }
}

export const AdminPage = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const componentRef = useRef();
    const { data: allUserAnswers, isLoading: loadingAllUserAnswers } = useGetAllUserAnswerQuery();
    const [getDetails, { data: oneUserDetails, isLoading: loadUserDetails }] = useGetUserDetailsMutation();
    const [getAnswer, { data: oneUserAnswer, isLoading: loadUserAnswer }] = useGetUserAnswerMutation();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleUserDetails = async (e, name) => {
        e.preventDefault();
        await getDetails({ name: name });
        await getAnswer({ name: name });
        setIsOpenModal(true);
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    if (!loadUserDetails && !loadUserAnswer && oneUserDetails && oneUserAnswer && isOpenModal) {
        return (
            <Modal
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Stack sx={isMobile ? tableBody.mobileModal : tableBody.modal}>
                    <Stack ref={componentRef} gap={isMobile ? 1 : 3}>
                        <Typography>FullName: <Typography variant="body/1">{oneUserDetails.data.fullName}</Typography></Typography>
                        <Typography>Age: <Typography variant="body/1">{oneUserDetails.data.age}</Typography></Typography>
                        <Typography>Civil Status: <Typography variant="body/1">{oneUserDetails.data.civilStatus}</Typography></Typography>
                        <Typography>Address: <Typography variant="body/1">{oneUserDetails.data.address}</Typography></Typography>
                        <Typography>Contact Number: <Typography variant="body/1">{oneUserDetails.data.contactNumber}</Typography></Typography>
                        <Typography>Are you sexually active? <Typography variant="body/1">{oneUserAnswer.data.q1}</Typography></Typography>
                        <Typography>If Yes, how many sexual partners do you have? <Typography variant="body/1">{oneUserAnswer.data.q2}</Typography></Typography>
                        <Typography>Do you observe safe sex practice? <Typography variant="body/1">{oneUserAnswer.data.q3}</Typography></Typography>
                        <Typography>Do you have signs and symptoms? <Typography variant="body/1">{oneUserAnswer.data.q4}</Typography></Typography>
                        <Typography>Do you take any medicines? <Typography variant="body/1">{oneUserAnswer.data.q5}</Typography></Typography>
                    </Stack>
                    <Button onClick={handlePrint} sx={tableBody.modalBtn} variant="contained">PRINT</Button>
                </Stack>
            </Modal>
        )
    }

    return (
        <Stack sx={tableBody.table}>
            <Typography variant="body/1">Admin</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Full Name</TableCell>
                        <TableCell>Question 1</TableCell>
                        <TableCell>Question 2</TableCell>
                        <TableCell>Question 3</TableCell>
                        <TableCell>Question 4</TableCell>
                        <TableCell>Question 5</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!loadingAllUserAnswers && allUserAnswers ? allUserAnswers?.data.map((answer) => (
                        <TableRow key={answer.name} ref={componentRef}>
                            <TableCell>{answer.name}</TableCell>
                            <TableCell>{answer.q1}</TableCell>
                            <TableCell>{answer.q2}</TableCell>
                            <TableCell>{answer.q3}</TableCell>
                            <TableCell>{answer.q4}</TableCell>
                            <TableCell>{answer.q5}</TableCell>
                            <TableCell id="actions">
                                <UserIcon onClick={(e) => handleUserDetails(e, answer.name)} />
                            </TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={7}>Loading Answers...</TableCell>
                    </TableRow>}
                </TableBody>
            </Table>
        </Stack>
    )
}