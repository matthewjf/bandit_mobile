import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, Navigator } from 'react-native';
import Main from './main';
import Settings from './settings';
import styles, { vw, colors } from '../styles/all';

export default class bandit extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: "main", name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) return route.sceneConfig;
          else return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'main') return <Main navigator={navigator} />;
    if (routeId === 'settings') return <Settings navigator={navigator} />;
  }
}

export const Status = ({backgroundColor, ...props}) => (
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
