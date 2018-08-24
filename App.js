import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import firebase from 'firebase'
import { firebaseConfig } from './config'
import { Header, LoginForm, Button, Spiner } from './components';
export default class App extends Component {
    state = { loggedIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCq8OJilJhQaDydgDoY6TrjG006Hz1SUAg",
            authDomain: "awesome-792f8.firebaseapp.com",
            databaseURL: "https://awesome-792f8.firebaseio.com",
            projectId: "awesome-792f8",
            storageBucket: "awesome-792f8.appspot.com",
            messagingSenderId: "943441802613"
          });
        firebase.auth().onAuthStateChanged((user) => {

            (user) ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
        })
    }
    renderContent() {
        console.log(this.state.loggedIn);
        

        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <Button onPress={() => firebase.auth().signOut()}> Logout</Button>
                    </View>
                )
                break;
            case false:
                return <LoginForm />
            case null:
                return <Spiner />
                break;
        }
    }
    render() {

        return (
            <ScrollView>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </ScrollView>
        );
    }
}


