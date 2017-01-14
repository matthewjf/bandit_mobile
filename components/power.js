import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import styles, { colors, vw } from '../styles/main';
import { htpcClick, RECEIVER_URL, TV_URL } from './util';

export default class Power extends Component {
  pcClick() {
    htpcClick(sleep)();
    fetch(`http://remote.local/api/htpc/wake`);
  }

  tvClick() {
    fetch(`${TV_URL}/KEY_POWER`);
  }

  receiverClick() {
    fetch(`${RECEIVER_URL}/KEY_POWER`);
  }

  render() {
    return (
      <View style={[styles.flexRow, styles.center, style.power]}>
        <Button icon='desktop-tower' color={colors.cyan} onDown={this.pcClick} style={style.btn}/>
        <Button icon='television' color={colors.red} onDown={this.tvClick} style={style.btn}/>
        <Button icon='surround-sound' color={colors.orange} onDown={this.receiverClick} style={style.btn}/>
        <Button icon='settings' color={colors.grey6} onDown={()=>{}} style={style.btn}/>
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
  }
});
