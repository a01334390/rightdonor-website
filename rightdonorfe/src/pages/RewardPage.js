import React from 'react'
/** Amplify Auth */
import { Auth } from 'aws-amplify'
/** Themes */
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
/** Router */
import { withRouter } from 'react-router-dom'
/** Components */
import {
    Heading,
    Button,
    Flex
} from 'rebass'

/** Components */
import Create from '../components/rewards/create'
import History from '../components/rewards/history'
import Read from '../components/rewards/read'
import Receive from '../components/rewards/receive'
import Spend from '../components/rewards/spend'

class App extends React.Component {
    state = {
        user: {},
        method: 0
    }

    componentDidMount = async () => {
        this.setState({
            user: await Auth.currentAuthenticatedUser()
        })
    }

    handleClick = code => {
        this.setState({method: code})
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Heading fontSize={[5, 6, 7]}> Rewards Demo </Heading>
                    <Flex>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(1)}>Create Wallet</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(2)}>Get Spending History</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(3)}>Read Wallet</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(4)}>Receive tokens</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(5)}>Spend tokens</Button>
                    </Flex>
                    {this.state.method === 1 && <Create></Create>}
                    {this.state.method === 2 && <History></History>}
                    {this.state.method === 3 && <Read></Read>}
                    {this.state.method === 4 && <Receive></Receive>}
                    {this.state.method === 5 && <Spend></Spend>}
                </ThemeProvider>
            </>
        )
    }
}

export default withRouter(App)