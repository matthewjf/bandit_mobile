import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Button from './button';
import styles, { colors, vw } from '../styles/all';
import { htpcPower, receiverClick, tvClick } from './util';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import zeroconf from './zeroconf';

class StatusButton extends Button {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    this.updateState();
    zeroconf.on(this.updateState);
  }

  componentWillUnmount() {
    zeroconf.off(this.updateState);
  }

  updateState() {
    this.setState({htpc: zeroconf.htpcHost()});
  }

  renderContent() {
    return <View style={[styles.flex, styles.center]}>
        <Icon name={this.props.icon}
              size={this.props.size || 10*vw}
              color={this.props.color || 'white'} />
        <Icon style={{position: 'absolute', left: 12*vw, top: 6*vw}}
              name={'record'}
              size={ 5*vw }
              color={this.state.htpc ? colors.green : colors.red} />
      </View>;
  }
}

export default class Power extends Component {
  settingsClick() {
    this.props.navigator.push({id: 'settings'});
  }

  render() {
    return (
      <View style={[styles.flexRow, styles.center, style.power]}>
        <StatusButton icon='desktop-tower' color={colors.cyan} onDown={htpcPower()} style={style.btn}/>
        <Button icon='television' color={colors.red} onDown={tvClick('KEY_POWER')} style={style.btn}/>
        <Button icon='surround-sound' color={colors.orange} onDown={receiverClick('power')} style={style.btn}/>
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
