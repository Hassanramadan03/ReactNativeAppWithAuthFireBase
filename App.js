import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import firebase from 'firebase'
import { firebaseConfig } from './config'
import { Header, LoginForm } from './components';
export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        return (
            <ScrollView>
                <Header headerText="Authentication" />
                <LoginForm />
            </ScrollView>
        );
    }
}


