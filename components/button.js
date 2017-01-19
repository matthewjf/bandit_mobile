import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { vw, colors } from '../styles/all';

export default class button extends Component {
  constructor(props) {
    super(props);
    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.state = {};
  }

  onDown(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onDown) this.props.onDown();
  }

  onUp(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onUp) this.props.onUp();
  }

  renderContent() {
    if (this.props.icon)
      return <Icon name={this.props.icon}
                   size={ this.props.size || 10*vw }
                   color={this.props.color || 'white'} />;
    else
      return <Text style={style.text, this.props.textStyle }>
                {this.props.text}
             </Text>;
  }

  render() {
    return (
      <TouchableHighlight style={[styles.flexRow, styles.center, style.touch, this.props.style ]}
                          onPressIn={this.onDown}
                          onPressOut={this.onUp}
                          delayPressIn={0}
                          delayPressOut={0}
                          delayLongPress={0} >
        {this.renderContent()}
      </TouchableHighlight>
    );
  }
}

const style = StyleSheet.create({
  touch: {
    alignSelf: 'stretch',
    width: 25*vw,
    margin: 1*vw
  },
  text: {
    color: colors.grey6,
    fontSize: 5*vw
  }
});
