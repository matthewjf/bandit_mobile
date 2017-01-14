import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export var vw = width/100;
export var vh = height/100;

export const colors = {
  red:      '#F44336',
  pink:     '#F48FB1',
  purple:   '#9C27B0',
  dpurple:  '#673AB7',
  indigo:   '#3F51B5',
  blue:     '#2196F3',
  lblue:    '#03A9F4',
  cyan:     '#00BCD4',
  teal:     '#009688',
  green:    '#4CAF50',
  lgreen:   '#8BC34A',
  lime:     '#CDDC39',
  yellow:   '#FFEE58',
  amber:    '#F57F17',
  orange:   '#FF9800',
  dorange:  '#FF5722',

  grey0:    '#212121',
  grey1:    '#333333',
  grey2:    '#424242',
  grey3:    '#555555',
  grey4:    '#616161',
  grey5:    '#9E9E9E',
  grey6:    '#BDBDBD',
  grey7:    '#E0E0E0',
  grey8:    '#EEEEEE',
  grey9:    '#F5F5F5'
};

const styles = StyleSheet.create({
  primary: {
    flex: 1,
    backgroundColor: colors.grey1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flex: {
    flex: 1
  }
});

export default styles;
