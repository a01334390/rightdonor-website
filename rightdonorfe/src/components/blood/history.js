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
    Flex,
    Card
} from 'rebass'
import {
    Label,
    Input
} from '@rebass/forms'
/** Axios */
import axios from 'axios'

class History extends React.Component {
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
        axios.get('http://3.222.166.83/blood/history/'
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
                    <Heading fontSize={[3, 4, 5]}> Get Blood Bag history </Heading>
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
                    this.state.response.map(bag => (
                        <Card key={bag.Value.id}>
                            <Heading> TxId: {bag.TxId }</Heading>
                            <Text> Id: {bag.Value.id } </Text>
                            <Text> Blood Type: {bag.Value.type}</Text>
                            <Text> Blood RH: {bag.Value.rh}</Text>
                            <Text> Blood Origin ID: {bag.Value.originId}</Text>
                            <Text> Blood Location ID: {bag.Value.location}</Text>
                            <Text> Blood Status: {bag.Value.status}</Text>
                            <Text> Blood Recipient: {bag.Value.recipient}</Text>
                            <Text> Blood Destination: {bag.Value.destination}</Text>
                            <Text> Blood Size: {bag.Value.size}</Text>
                        </Card>
                    ))}
                    
                </ThemeProvider>
            </>
        )
    }
}

export default History