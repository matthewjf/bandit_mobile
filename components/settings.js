import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Status } from './index';
import Button from './button';
import { piClick } from './util';
import styles, { colors, vw } from '../styles/all';

export default class Settings extends Component {
  back() {
    this.props.navigator.pop();
  }

  render() {
    return <View style={[styles.flex, styles.flexColumn, styles.primary]}>
      <Status backgroundColor="black" barStyle="light-content" />

      <View style={[styles.flexRow, style.topBar]}>
        <Button icon='chevron-left' style={{width: 12*vw}} onDown={this.back.bind(this)} color={colors.lblue}/>
      </View>

      {/* grid */}
      <View style={[styles.flex, styles.flexRow, style.content]}>
        <Button icon='autorenew' style={[style.btnStyle, background(colors.amber)]} onDown={piClick('reboot')}/>
        <Button icon='power' style={[style.btnStyle, background(colors.red)]} onDown={piClick('shutdown')}/>
      </View>

    </View>;
  }
}

function background(color) {
  return {backgroundColor: color};
}

const style = StyleSheet.create({
  topBar: {
    backgroundColor: colors.grey0,
    height: 12*vw
  },
  content: {
    flexWrap: 'wrap',
    paddingLeft: 4*vw
  },
  btnStyle: {
    width: 15*vw,
    height: 15*vw,
    margin: 4*vw,
    borderRadius: 2
  }
});
