import React from 'react'
/** Amplify Auth */
import { Auth } from 'aws-amplify'
/** Themes */
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import {
    Heading,
    Text,
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

class Read extends React.Component {
    state = {
        user: {},
        bagId: "",
        response: {},
        show: false
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser().username
        })
    }

    handleSubmit = () => {
        axios.get('http://3.222.166.83/blood/read/'
        +this.state.bagId+'/'
        +'user1')
        .then((res)=>{
            this.setState({response: res.data, show: true})
        })
        .catch((error)=>{
            alert(JSON.stringify(error))
        })
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Heading fontSize={[3, 4, 5]}> Read Blood Bag </Heading>
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
                        </Flex>
                        <Box px={2} ml='auto'>
                            <Button onClick={this.handleSubmit}>
                                Read
                            </Button>
                        </Box>
                    </Box>
                    {this.state.show &&
                        <Box>
                            <Heading> ID: {this.state.response.id }</Heading>
                            <Text> Blood Type: {this.state.response.type}</Text>
                            <Text> Blood RH: {this.state.response.rh}</Text>
                            <Text> Blood Origin ID: {this.state.response.originId}</Text>
                            <Text> Blood Location ID: {this.state.response.location}</Text>
                            <Text> Blood Status: {this.state.response.status}</Text>
                            <Text> Blood Recipient: {this.state.response.recipient}</Text>
                            <Text> Blood Destination: {this.state.response.destination}</Text>
                            <Text> Blood Size: {this.state.response.size}</Text>
                        </Box>
                    }
                    
                </ThemeProvider>
            </>
        )
    }
}

export default Read