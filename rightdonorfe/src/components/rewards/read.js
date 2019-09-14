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
    Box
} from 'rebass'
/** Axios */
import axios from 'axios'

class Read extends React.Component {
    state = {
        user: {},
        response: {},
        show: false
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser().username
        })
    }

    handleSubmit = () => {
        axios.get('https://api.rightdonor.org/prod/rewards/read/'
        +this.state.user+'/'
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
                    <Heading fontSize={[3, 4, 5]}> Read Rewards Account </Heading>
                    <Box
                        py={3}>
                        <Box px={2} ml='auto'>
                            <Button onClick={this.handleSubmit}>
                                Read
                            </Button>
                        </Box>
                    </Box>
                    {this.state.show &&
                        <Box>
                            <Heading> ID: {this.state.response.id }</Heading>
                            <Text> Account level: {this.state.response.level}</Text>
                            <Text> Account tokens: {this.state.response.tokens}</Text>
                        </Box>
                    }
                    
                </ThemeProvider>
            </>
        )
    }
}

export default Read