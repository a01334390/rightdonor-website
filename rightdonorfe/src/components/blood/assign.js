import React from 'react'
/** Amplify Auth */
import { Auth } from 'aws-amplify'
/** Themes */
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import {
    Heading,
    Button,
    Box,
    Flex
} from 'rebass'
import {
    Label,
    Input
} from '@rebass/forms'
/** Axios */
import axios from 'axios'

class Assign extends React.Component {
    state = {
        user: {},
        bagId: "",
        recipient: "",
        destination: ""
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser().username
        })
    }

    handleSubmit = () => {
        axios.post('https://api.rightdonor.org/prod/blood/assign/'
        +this.state.bagId+'/'
        +this.state.recipient+'/'
        +this.state.destination+'/'
        +'user1')
        .then((res)=>{
            alert(JSON.stringify(res))
        })
        .catch((error)=>{
            alert(JSON.stringify(error))
        })
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Heading fontSize={[3, 4, 5]}> Assign Blood Bag </Heading>
                    <Box
                        py={3}>
                        <Flex mx={-2} mb={3}>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='bagId'>Bag ID</Label>
                                <Input
                                    id='bagId'
                                    name='bagId'
                                    defaultValue='1234-5678-1234-5678'
                                    onChange={(event) => this.setState({bagId: event.target.value})}
                                    value={this.state.bagId}
                                />
                            </Box>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='recipient'>Bag recipient</Label>
                                <Input
                                    id='recipient'
                                    name='recipient'
                                    defaultValue='1234'
                                    onChange={(event) => this.setState({recipient: event.target.value})}
                                    value={this.state.recipient}
                                />
                            </Box>
                        </Flex>
                        <Flex mx={-2} mb={3}>
                            
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='destination'>Bag Destination</Label>
                                <Input
                                    id='destination'
                                    name='destination'
                                    defaultValue='650'
                                    onChange={(event) => this.setState({destination: event.target.value})}
                                    value={this.state.destination}
                                />
                            </Box>

                        </Flex>
                        <Box px={2} ml='auto'>
                            <Button onClick={this.handleSubmit}>
                                Assign
                            </Button>
                        </Box>
                    </Box>
                </ThemeProvider>
            </>
        )
    }
}

export default Assign