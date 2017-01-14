import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native';
import Power from './power';
import Htpc from './htpc';
import styles, { vw } from '../styles/main';

export default class bandit extends Component {
  render() {
    return (
      <View style={[styles.flex, styles.flexColumn]}>
        <Status backgroundColor="black" barStyle="light-content" />
        <Power />
        <Htpc />
      </View>
    );
  }
}

const Status = ({backgroundColor, ...props}) => (
  <View style={[style.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const style = StyleSheet.create({
  statusBar: {
    alignSelf: 'stretch',
    height: STATUSBAR_HEIGHT
  }
});
