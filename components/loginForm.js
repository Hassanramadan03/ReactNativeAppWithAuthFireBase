import React, { Component } from 'react'
import { Card, Button, CardSection, Input } from './common'
class LoginForm extends Component {
    state = { email: '',password: '' }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                        placeHolder='email@example.com'
                    />
                </CardSection>
                <CardSection>
                <Input  
                        secureTextEntry={true}
                        label='Password'
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        placeHolder='password'
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                   </Button>
                </CardSection>
            </Card>
        )
    }
}
export { LoginForm }