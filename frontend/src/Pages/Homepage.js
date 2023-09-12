import React, { useEffect } from 'react'
import {
    Container, Box, Text, Tabs, Tab, TabPanels, TabPanel
    , TabList
} from "@chakra-ui/react"

import Login from '../components/Authentification/Login'
import Signup from '../components/Authentification/Signup'
import { useNavigate } from "react-router-dom"

const Homepage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        if (userInfo) {
            navigate('/chats')
        }
    }, [navigate])
    return (
        <Container maxW="xl" centerContent>
            <Box d="flex" ustifyContent="center" p={3}
                bg={'white'} w="100%" m="40px 0 15px 0"
                borderRadius="lg" borderWidth="1px" >
                <Text fontSize="4xl" fontFamily="work sans" color="black"
                    textAlign="center"
                >Talk-A-Tive</Text>
            </Box>
            <Box bg="white" w="100%" p={4}
                borderRadius="lg" color="black" borderWidth="1px">
                <Tabs variant='soft-rounded' >
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
