import { ActionIcon, Anchor, Box, Button, Center, Grid, Text, TextInput, } from '@mantine/core'
import { FaGoogle } from 'react-icons/fa';
import { Image } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import g from "../assets/g.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
export default function ForgetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { passwordReset, } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await passwordReset(email,)
            toast.success("Password reset email sent!", {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-success',
            });
            navigate("/")

        } catch (error) {
            toast.error("invalid email", {
                position: "top-center",
                theme: "colored",
            })
        }


    }



    return (
        <>
            <Box sx={(theme) => ({ overflow: "hidden", height: "100vh", width: "100vw" })}>
                <Box
                    sx={(theme) => ({ height: "100vh", width: "100vw", position: "relative", })}>
                    <Box sx={(theme) => ({ borderRadius: "10px", background: 'radial-gradient(circle, rgba(36,19,145,1) 0%, rgba(14,175,52,1) 85%)', height: "40vh", width: "30vw", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", "@media(max-width : 768px)": { width: "100vw", height: "100vh", background: "#09a2e5" } })} >
                        <Box mt="lg" mx="auto" component="form" sx={(theme) => ({ width: "90%", height: "20%", })} method='POST'>
                            <Center>

                                {error && <Text mb="lg" style={{ color: "red" }}>{error} </Text>}
                            </Center>
                            <Grid>
                                <Grid.Col>

                                    <Center mb={25}>
                                        <Text sx={(theme) => ({ fontSize: "30px", fontWeight: "bolder" })}>Email For Reset Password</Text>
                                    </Center>
                                </Grid.Col>

                                <Grid.Col>
                                    <TextInput onChange={(e) => setEmail(e.target.value)} name='email' color='black' placeholder="Email" size="lg" />

                                </Grid.Col>

                            </Grid>
                            <Center mt="xl">
                                <Box>
                                    <Link to="/" style={{ color: "#f2ff1c", fontSize: "20px" }} >
                                        LogIn
                                    </Link>
                                </Box>
                            </Center>




                            <Center mt="xl">
                                <Box>
                                    <Button radius="md" size='lg' type='submit' color="dark" px={50} onClick={handleSubmit}>Submit</Button>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Box>
                <ToastContainer />
            </Box>
        </>
    )
}