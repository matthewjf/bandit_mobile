import React from 'react';
import zeroconf from './zeroconf';
import { Alert } from 'react-native';

var REMOTE_URL, HTPC_URL, REMOTES, RECEIVER, TV, KODI;

function onUpdate() {
  var remotehost = zeroconf.remoteHost();
  var htpchost = zeroconf.htpcHost();
  REMOTE_URL =  remotehost ? `http://${remotehost}` : null;
  HTPC_URL =  htpchost ? `http://${htpchost}` : null;
  setUrls();
}

function setUrls() {
  REMOTES = REMOTE_URL ? `${REMOTE_URL}/api/remotes` : null;
  RECEIVER = REMOTES ? `${REMOTES}/receiver` : null;
  TV = REMOTES ? `${REMOTES}/tv` : null;
  KODI = HTPC_URL ? `${HTPC_URL}/?kodi` : null;
}

zeroconf.on(onUpdate);

function error(msg="Problem sending request", ctx="Error") {
  Alert.alert(ctx, msg);
}

function baseFetch(dep, url) {
  if (dep) fetch(url).catch(error);
  else error(`Check if the device is turned on. If so, try restarting it.`, `No response`);
}

/**
 * HTPC
 * */

export function htpcPower() {
  return () => {
    if (HTPC_URL) fetch(`${HTPC_URL}/?htpcsleep`).catch(error);
    wakeHtpc()();
  };
}

export function htpcClick(cmd) {
  return () => baseFetch(HTPC_URL, `${HTPC_URL}/?htpc${cmd}`);
}

export function kodiStart(cmd) {
  return () => baseFetch(KODI, `${KODI}${cmd}&withoutRelease`);
}

export function kodiStop() {
  // prevents double alerts
  if (HTPC_URL) return () => fetch(`${HTPC_URL}?ButtonReleased`).catch(error);
  else return () => {};
}

export function kodiClick(cmd) {
  return () => baseFetch(KODI, `${KODI}${cmd}`);
}

export function piClick(cmd) {
  return () => baseFetch(REMOTE_URL, `${REMOTE_URL}/pi/${cmd}`);
}

/**
 * PI
 * */

export function wakeHtpc() {
  return () => baseFetch(REMOTE_URL, `${REMOTE_URL}/api/htpc/wake`);
}

export function tvClick(cmd) {
  return () => baseFetch(TV, `${TV}/${cmd}`);
}

const receiverMap = {
  htpc: 'KEY_DVD',
  ps4: 'KEY_GAMES',
  cast: 'KEY_SAT',
  volume_down: 'KEY_VOLUMEDOWN',
  volume_up: 'KEY_VOLUMEUP',
  power: 'KEY_POWER'
};

function receiverCmd(cmd) {
  return receiverMap[cmd] || cmd;
}

export function receiverClick(cmd) {
  return () => baseFetch(RECEIVER, `${RECEIVER}/${receiverCmd(cmd)}`);
}

export function receiverStart(cmd) {
  return () => baseFetch(RECEIVER, `${RECEIVER}/${receiverCmd(cmd)}/start`);
}

export function receiverStop(cmd) {
  return () => baseFetch(RECEIVER, `${RECEIVER}/${receiverCmd(cmd)}/stop`);
}
