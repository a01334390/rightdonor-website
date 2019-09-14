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

class Read extends React.Component {
    state = {
        user: {},
        receive: "",
        response: {},
        show: false
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser()
        })
    }

    handleSubmit = () => {
        axios.post('http://3.222.166.83/rewards/receive/'
        +this.state.user.username+'/'
        +this.state.receive+'/'
        +'user1')
        .then((res)=>{
            this.setState({response: res.data})
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
                    <Heading fontSize={[3, 4, 5]}> Receive Tokens </Heading>
                    <Box
                        py={3}>
                        <Flex mx={-2} mb={3}>
                            <Box width={1 / 2} px={2}>
                                <Label htmlFor='receive'>Ammount</Label>
                                <Input
                                    id='receive'
                                    name='receive'
                                    defaultValue='500'
                                    onChange={(event) => this.setState({receive: event.target.value})}
                                    value={this.state.receive}
                                />
                            </Box>
                        </Flex>
                        <Box px={2} ml='auto'>
                            <Button onClick={this.handleSubmit}>
                                Receive
                            </Button>
                        </Box>
                    </Box>                    
                </ThemeProvider>
            </>
        )
    }
}

export default Read