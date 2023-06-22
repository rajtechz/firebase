import { ActionIcon, Anchor, Box, Button, Center, Grid, Text, TextInput, } from '@mantine/core'

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
export default function LogIn() {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })

    }

    const postData = async (e) => {
        const { email, password } = user;
        setEmailError("");
        setPasswordError("");
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_@#$%^*()<>!?]).{8,32}$/;

        if (!email || !password) {
            toast.error("Please fill all data", {
                position: "top-center",
                theme: "colored",
            });
        } else if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
        } else if (!passwordRegex.test(password)) {
            setPasswordError("Invalid password. Password should be a 6-character combination of letters and digits.");
        } else {
            const res = await fetch("https://reactform-7302a-default-rtdb.firebaseio.com/reactformdata.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (res) {
                setUser({
                    email,
                    password,
                });
                toast.success("Form submitted successfully", {
                    position: "top-center",
                    theme: "colored",
                });
            }
        }





    }
    return (
        <>
            <Box sx={(theme) => ({ overflow: "hidden", height: "100vh", width: "100vw" })}>
                <Box
                    sx={(theme) => ({ height: "100vh", width: "100vw", position: "relative", })}>
                    <Box sx={(theme) => ({ borderRadius: "10px", background: 'radial-gradient(circle, rgba(36,19,145,1) 0%, rgba(14,175,52,1) 85%)', height: "80vh", width: "30vw", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", "@media(max-width : 768px)": { width: "100vw", height: "100vh", background: "#09a2e5" } })} >
                        <Center mt="80px">
                            <Box>
                                <Center mb={25}>
                                    <Text sx={(theme) => ({ fontSize: "80px", fontWeight: "bolder" })}> <span>ｌｏｇｉｎ</span></Text>
                                </Center>

                                <Center mt="xs" sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px" })} ><Text>Log In With Password </Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="lg" mx="auto" component="form" sx={(theme) => ({ width: "90%", height: "100%", })} method='POST'>
                            <Grid>
                                <Grid.Col>
                                    <TextInput name='email' onChange={getUserData} value={user.email} color='black' placeholder="Email" size="lg" />
                                    {emailError && <Text style={{ color: "red" }}>{emailError}</Text>}

                                </Grid.Col>
                                <Grid.Col pt="xl">
                                    <TextInput name='password' onChange={getUserData} value={user.password} size="lg" placeholder="Password" type={showPassword ? 'text' : 'password'} styles={{ error: { color: 'pink', } }} rightSection={<ActionIcon onClick={toggleShowPassword}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</ActionIcon>} />
                                    {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}

                                </Grid.Col>
                            </Grid>
                            <Center mt="xl">
                                <Box>
                                    <Anchor sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px" })}>
                                        Forget Password
                                    </Anchor>
                                </Box>
                            </Center>
                            <Center mt="xl">
                                <Box>
                                    <Button radius="md" size='lg' type='submit' color="pink" px={50} onClick={postData}>Submit</Button>
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