import React from 'react'
/** Amplify Auth */
import { Auth } from 'aws-amplify'
/** Themes */
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
/** Router */
import {withRouter} from 'react-router-dom'
/** Components */
import {
    Text,
    Heading,
    Link,
    Card,
    Flex
} from 'rebass'

class App extends React.Component {
    state = {
        user: {}
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser()
        })
    }

    handleClick = path => {
        this.props.history.push(path)
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Flex mx={2}>
                    <Card width={256} px={2}>
                        <Heading fontSize={[5,6,7]}> Blood Demo </Heading>
                        <Text> Test all Blood's API Endpoints </Text>
                        <br/>
                        <Link onClick={() => this.handleClick('/blood')}> Test </Link>
                    </Card>
                    <Card width={256} px={2}>
                        <Heading fontSize={[5,6,7]}> Rewards Demo </Heading>
                        <Text> Test all Rewards's API Endpoints </Text>
                        <br/>
                        <Link onClick={() => this.handleClick('/rewards')}> Test </Link>
                    </Card>
                    </Flex>
                </ThemeProvider>
            </>
        )
    }
}

export default withRouter(App)