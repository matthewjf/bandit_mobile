import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import styles, { colors, vw } from '../styles/all';
import { htpcClick, receiverClick, TV_URL, error } from './util';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Power extends Component {
  pcClick() {
    htpcClick('sleep')();
    fetch(`http://remote.local/api/htpc/wake`).catch(error);
  }

  tvClick() {
    fetch(`${TV_URL}/KEY_POWER`).catch(error);
  }

  receiverClick() {
    receiverClick('power')();
  }

  settingsClick() {
    this.props.navigator.push({id: 'settings'});
  }

  render() {
    return (
      <View style={[styles.flexRow, styles.center, style.power]}>
        <Icon name='record'
              size={6*vw}
              color={colors.red}
              style={style.pcStatus}/>
        <Button icon='desktop-tower' color={colors.cyan} onDown={this.pcClick} style={style.btn}/>
        <Button icon='television' color={colors.red} onDown={this.tvClick} style={style.btn}/>
        <Button icon='surround-sound' color={colors.orange} onDown={this.receiverClick} style={style.btn}/>
        <Button icon='settings-box' color={colors.grey6} onDown={this.settingsClick.bind(this)} style={style.btn}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  power: {
    backgroundColor: colors.grey0,
    height: 20*vw
  },
  btn: {
    margin: 0
  },
  pcStatus: {
    position: 'absolute',
    top: 3*vw,
    left: 12*vw,
    zIndex: 10,
    backgroundColor: 'transparent'
  }
});
