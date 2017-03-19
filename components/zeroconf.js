import { Platform, AppState } from 'react-native';
import Zeroconf from 'react-native-zeroconf';
import { Alert } from 'react-native';
const REMOTE_SERVICE = 'remote';
const HTPC_SERVICE = 'HTPC';
const SERVICE_TYPE = 'smb';

var _remoteHost, _htpcHost;
var _zeroconf = new Zeroconf();
var _callbacks = [];

function runCallbacks() {
  _callbacks.forEach((cb) => { cb(); });
}

class Zero {
  constructor() {
    _zeroconf.on('resolved', this.updateState.bind(this));
    _zeroconf.on('removed', this.updateState.bind(this));
    _zeroconf.on('error',() => Alert.alert('zeroconf error'));

    AppState.addEventListener("change", () => {
      if (AppState.currentState === 'active') _zeroconf.scan(SERVICE_TYPE);
      else _zeroconf.stop();
    });

    _zeroconf.scan(SERVICE_TYPE);
  }

  updateState() {
    var services = _zeroconf.getServices();

    if (services[REMOTE_SERVICE] && services[REMOTE_SERVICE].host)
      _remoteHost = Platform.OS === 'android' ? services[REMOTE_SERVICE].host : 'remote.local';
    else if (!services[REMOTE_SERVICE])
      _remoteHost = null;

    if (services[HTPC_SERVICE] && services[HTPC_SERVICE].host)
      _htpcHost = Platform.OS === 'android' ? services[HTPC_SERVICE].host : 'htpc.local';
    else if (!services[HTPC_SERVICE])
      _htpcHost = null;

    runCallbacks();
  }

  on(callback) {
    if (_callbacks.indexOf(callback) < 0)
      _callbacks.push(callback);
  }

  off(callback) {
    var index = _callbacks.indexOf(callback);
    if (index >= 0)
      _callbacks.splice(index, 1);
  }


  remoteHost() {
    return _remoteHost;
  }

  htpcHost() {
    return _htpcHost;
  }
}

export default new Zero();
