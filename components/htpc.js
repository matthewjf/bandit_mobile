import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import styles, { vw, colors } from '../styles/main';
import { receiverClick, receiverStart, receiverStop, htpcClick, kodiClick, kodiStart, kodiStop } from './util';

export default class Htpc extends Component {
  render() {
    return (
      <View style={[styles.flex, styles.flexColumn, style.htpc]}>

        {/* receiver */}
        <View style={[styles.flexRow, styles.center, style.sm, height(12)]}>
          <Button text='HTPC' textStyle={style.recText} onDown={receiverClick('htpc')}/>
          <Button text='PS4' textStyle={style.recText} onDown={receiverClick('ps4')}/>
          <Button text='CAST' textStyle={style.recText} onDown={receiverClick('cast')}/>
        </View>

        {/* app */}
        <View style={[styles.flexRow, styles.center, style.section, height(14)]}>
          <Button icon='kodi' color={colors.lblue} onDown={htpcClick('kodi')}/>
          <Button icon='google-chrome' color={colors.lgreen} onDown={htpcClick('chrome')}/>
          <Button icon='library-plus' color={colors.pink} onDown={kodiClick('update_videos')}/>
        </View>

        {/* navigation */}
        <View style={[styles.flexColumn, styles.center, style.section]}>
          <View style={[styles.flexRow, styles.center, height(24)]}>
            <Button text='C' textStyle={style.navText} onDown={kodiClick('context_menu')} />
            <Button icon='chevron-up' color={colors.grey6} onDown={kodiStart('up')} onUp={kodiStop()} size={16*vw}/>
            <Button icon='keyboard-backspace' color={colors.grey4} onDown={kodiClick('previous')} size={8*vw}/>
          </View>
          <View style={[styles.flexRow, styles.center, height(24)]}>
            <Button icon='chevron-left' color={colors.grey6} onDown={kodiStart('left')} onUp={kodiStop()} size={16*vw}/>
            <Button icon='radiobox-blank' color={colors.yellow} onDown={kodiStart('select')} size={16*vw}/>
            <Button icon='chevron-right' color={colors.grey6} onDown={kodiStart('right')} onUp={kodiStop()} size={16*vw}/>
          </View>
          <View style={[styles.flexRow, styles.center, height(24)]}>
            <Button text='i' textStyle={style.navText} color={colors.grey4} onDown={kodiClick('info')}/>
            <Button icon='chevron-down' color={colors.grey6} onDown={kodiStart('down')} onUp={kodiStop()} size={16*vw}/>
            <Button icon='keyboard-return' color={colors.grey4} onDown={kodiClick('parent_dir')} size={8*vw}/>
          </View>
        </View>

        {/* media */}
        <View style={[styles.flexColumn, styles.center, style.section]}>
          <View style={[styles.flexRow, styles.center, height(14)]}>
            <Button icon='skip-previous' color={colors.grey6} onDown={kodiStart('small_skip_bck')} onUp={kodiStop()}/>
            <Button icon='play' color={colors.green} onDown={kodiClick('play')}/>
            <Button icon='skip-next' color={colors.grey6} onDown={kodiStart('small_skip_fwd')} onUp={kodiStop()}/>
          </View>
          <View style={[styles.flexRow, styles.center, height(14)]}>
            <Button icon='skip-backward' color={colors.grey6} onDown={kodiStart('big_skip_bck')} onUp={kodiStop()}/>
            <Button icon='stop' color={colors.red} onDown={kodiClick('stop')}/>
            <Button icon='skip-forward' color={colors.grey6} onDown={kodiStart('big_skip_fwd')} onUp={kodiStop()}/>
          </View>
        </View>

        {/* volume */}
        <View style={[styles.flexRow, styles.center, style.section, height(16)]}>
          <Button icon='comment-outline' color={colors.grey4} onDown={kodiClick('subtitles')}/>
          <Button icon='volume-low' color={colors.grey8} onDown={receiverStart('volume_down')} onUp={receiverStop('volume_down')}/>
          <Button icon='volume-high' color={colors.grey8} onDown={receiverStart('volume_up')} onUp={receiverStop('volume_up')}/>
        </View>

      </View>
    );
  }
}
const HEIGHT_SM = 10*vw;
const HEIGHT_MD = 16*vw;
const HEIGHT_LG = 24*vw;
const MARGIN = 2*vw;

function height(units) {return {height: units*vw};};

const style = StyleSheet.create({
  htpc: {
    backgroundColor: colors.grey1
  },
  section: {
    marginTop: MARGIN
  },
  recText: {
    color: colors.grey8
  },
  navText: {
    color: colors.grey4,
    fontWeight: 'bold',
    fontSize: 5*vw
  }
});
