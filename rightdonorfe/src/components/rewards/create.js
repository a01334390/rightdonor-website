import React from 'react'
/** Amplify Auth */
import { Auth } from 'aws-amplify'
/** Themes */
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import {
    Heading,
    Button,
    Box
} from 'rebass'
/** Axios */
import axios from 'axios'

class Create extends React.Component {
    state = {
        user: {},
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser().username
        })
    }

    handleSubmit = () => {
        axios.post('https://api.rightdonor.org/prod/rewards/create/'
        +this.state.user+'/'
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
                    <Heading fontSize={[3, 4, 5]}> Create Rewards Account </Heading>
                    <Box
                        py={3}>
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