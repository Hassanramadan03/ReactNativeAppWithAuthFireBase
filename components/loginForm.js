import React, { Component } from 'react'
import { Card, Button, CardSection, Input, Spiner } from './common'
import firebase from 'firebase';
import { Text } from 'react-native'
class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }
    drawButton() {
        if (this.state.loading) return <Spiner size='small' />
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
                </Button>
        )

    }
    onButtonPress() {
        this.setState({ loading: true, error: '' })

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                console.log(error);
                
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this))
            })



    }
    onLoginFailed() {
        this.setState({ error: 'Authentication failed !', loading: false })

    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeHolder='email@example.com'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeHolder='password'
                    />
                </CardSection>
                <Text style={style.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.drawButton()}

                </CardSection>
            </Card>
        )
    }
}
const style = {
    errorStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
}
export { LoginForm }