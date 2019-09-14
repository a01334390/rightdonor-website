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
    Input,
    Select
} from '@rebass/forms'
/** Axios */
import axios from 'axios'

class Create extends React.Component {
    state = {
        user: {},
        bagId: "",
        bagOriginId: "",
        bagSize: "",
        bloodRH: "",
        bloodType: ""
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser().username
        })
    }

    handleSubmit = () => {
        axios.post('https://api.rightdonor.org/prod/blood/create/'
        +this.state.bagId+'/'
        +this.state.bagOriginId+'/'
        +this.state.bagOriginId+'/'
        +this.state.bloodType+'/'
        +this.state.bloodRH+'/'
        +this.state.bagSize+'/'
        +'user1')
        .then((res)=>{
            alert(res)
        })
        .catch((error)=>{
            alert(error)
        })
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Heading fontSize={[3, 4, 5]}> Create Blood Bag </Heading>
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
                                <Label htmlFor='bagOriginId'>Bag Origin ID</Label>
                                <Input
                                    id='bagOriginId'
                                    name='bagOriginId'
                                    defaultValue='1234'
                                    onChange={(event) => this.setState({bagOriginId: event.target.value})}
                                    value={this.state.bagOriginId}
                                />
                            </Box>
                        </Flex>
                        <Flex mx={-2} mb={3}>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='bloodType'>Blood Type</Label>
                                <Select
                                    id='bloodType'
                                    name='bloodType'
                                    defaultValue='Select a Blood Type'
                                    onChange={(event) => this.setState({bloodType: event.target.value})}
                                    value={this.state.bloodType}>
                                    <option>Select a Blood Type</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>AB</option>
                                    <option>O</option>
                                </Select>
                            </Box>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='bloodRH'>Blood RH</Label>
                                <Select
                                    id='bloodRH'
                                    name='bloodRH'
                                    defaultValue='Select a Blood RH'
                                    onChange={(event) => this.setState({bloodRH: event.target.value})}
                                    value={this.state.bloodRH}>
                                    <option>Select a Blood RH</option>
                                    <option>+</option>
                                    <option>-</option>
                                </Select>
                            </Box>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='bagSize'>Bag Size</Label>
                                <Input
                                    id='bagSize'
                                    name='bagSize'
                                    defaultValue='650'
                                    onChange={(event) => this.setState({bagSize: event.target.value})}
                                    value={this.state.bagSize}
                                />
                            </Box>

                        </Flex>
                        <Box px={2} ml='auto'>
                            <Button onClick={this.handleSubmit}>
                                Create
                            </Button>
                        </Box>
                    </Box>
                </ThemeProvider>
            </>
        )
    }
}

export default Create