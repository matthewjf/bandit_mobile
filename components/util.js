export const HOST = 'http://remote.local';

export const HTPC_URL = `http://htpc.local`;
export const KODI_URL = `${HTPC_URL}/?kodi`;

export const REMOTE_URL = `${HOST}/api/remotes`;
export const RECEIVER_URL = `${REMOTE_URL}/receiver`;
export const TV_URL = `${REMOTE_URL}/tv`;

/**
 * HTPC
 * */

export function htpcClick(cmd) {
  return () => fetch(`${HTPC_URL}/?htpc${cmd}`);
}

export function kodiStart(cmd) {
  return () => fetch(`${KODI_URL}${cmd}&withoutRelease`);
}

export function kodiStop(cmd) {
  return () => fetch(`${HTPC_URL}?ButtonReleased`);
}

export function kodiClick(cmd) {
  return () => fetch(`${KODI_URL}${cmd}`);
}

export function piClick(cmd) {
  return () => fetch(`${HOST}/pi/${cmd}`);
}

/**
 * RECEIVER
 * */

const receiverMap = {
  htpc: 'KEY_DVD',
  ps4: 'KEY_GAMES',
  cast: 'KEY_SAT',
  volume_down: 'KEY_VOLUMEDOWN',
  volume_up: 'KEY_VOLUMEUP'
};

function receiverCmd(cmd) {
  return receiverMap[cmd] || cmd;
}

export function receiverClick(cmd) {
  return () => fetch(`${RECEIVER_URL}/${receiverCmd(cmd)}`);
}

export function receiverStart(cmd) {
  return () => fetch(`${RECEIVER_URL}/${receiverCmd(cmd)}/start`);
}

export function receiverStop(cmd) {
  return () => fetch(`${RECEIVER_URL}/${receiverCmd(cmd)}/stop`);
}
