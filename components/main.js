import React, { Component } from 'react';
import { View } from 'react-native';
import Power from './power';
import Htpc from './htpc';
import { Status } from './index';
import styles from '../styles/all';

export default class Main extends Component {
  render() {
    return <View style={[styles.flex, styles.flexColumn, styles.primary]}>
      <Status backgroundColor="black" barStyle="light-content" />
      <Power navigator={this.props.navigator}/>
      <Htpc />
    </View>;
  }
}
