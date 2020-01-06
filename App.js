import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { Alert, View, Text } from 'react-native';

export default class App extends Component {

  render() {
    return(
      <View>
        <Text>Teste</Text>
      </View>
    )
  }
  
constructor(properties) {
    super(properties);
    OneSignal.init("8d86cc23-d5ac-45d6-84ee-3c76021b2c0e");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);

    OneSignal.setExternalUserId('909292');
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }




}
