import React, { Component } from 'react';
import { Platform, View, Alert, Text } from 'react-native';
import Power from './power';
import Htpc from './htpc';
import { Status } from './index';
import styles, { vw, colors } from '../styles/all';
import zeroconf from './zeroconf';

export default class Main extends Component {
  constructor(props) {
    super(props);
    zeroconf.on(this.updateState.bind(this));
    this.state = {};
  }

  updateState() {
    this.setState({pi: zeroconf.remoteHost()});
  }

  render() {
    if (this.state.pi)
      return <View style={[styles.flex, styles.flexColumn, styles.primary]}>
        <Status backgroundColor="black" barStyle="light-content" />
        <Power navigator={this.props.navigator}/>
        <Htpc />
      </View>;
    else
      return <View style={[styles.flex, styles.center, styles.primary]}>
        <Text style={{color: colors.grey5, fontSize: 8*vw, textAlign: 'center'}}>
          Bandit is taking a dump
        </Text>
      </View>;
  }
}
