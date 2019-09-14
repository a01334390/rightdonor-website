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
/** Axios */
import axios from 'axios'

/** Components */
import Create from '../components/blood/create'
import Assign from '../components/blood/assign'

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
        switch(code){
            case 1:
                axios.post('https://api.rightdonor.org/prod/enroll')
                .then((res)=>{
                    alert('Admin was enrolled!')
                })
                .catch((error)=>{
                    alert(error)
                })
            break
            case 2:
                axios.post('https://api.rightdonor.org/prod/user')
                .then((res)=>{
                    alert('User was enrolled')
                })
                .catch((error)=>{
                    alert(error)
                })
            break
            default:
                 
            break
        }
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Heading fontSize={[5, 6, 7]}> Blood Demo </Heading>
                    <Flex>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(1)}>Enroll Admin</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(2)}>Enroll User</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(3)}>Create Blood Bag</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(4)}>Assign Blood Bag</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(5)}>Read Blood Bag information</Button>
                        <Button variant='primary' mr={2} onClick={()=>this.handleClick(6)}>Read Blood Bag History</Button>
                    </Flex>
                    {this.state.method === 3 && <Create></Create>}
                    {this.state.method === 4 && <Assign></Assign>}
                    {this.state.method === 5 && <Heading> 5 </Heading>}
                    {this.state.method === 6 && <Heading> 6 </Heading>}
                </ThemeProvider>
            </>
        )
    }
}

export default withRouter(App)