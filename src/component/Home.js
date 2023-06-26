import { Button, Center } from '@mantine/core'
import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

export default function Home() {
    const { user, logOut } = useUserAuth();
    console.log(user)
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <Center>

                <h1> Welcome to home page</h1>
            </Center>
            <Center>

                <h2>
                    {user && user.email}
                </h2>
            </Center>
            <Center mt="lg">

                <Button onClick={handleLogOut}> Log Out</Button>
            </Center>
        </>
    )
}
