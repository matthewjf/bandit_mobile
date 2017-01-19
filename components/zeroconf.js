import { Alert } from 'react-native';
import Zeroconf from 'react-native-zeroconf';

const REMOTE_SERVICE = 'remote';
const HTPC_SERVICE = 'htpc';
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
    _zeroconf.on('error', () => Alert.alert('zeroconf error'));
    _zeroconf.scan(SERVICE_TYPE);
  }

  updateState() {
    var services = _zeroconf.getServices();

    if (services[REMOTE_SERVICE] && services[REMOTE_SERVICE].host)
      _remoteHost = services[REMOTE_SERVICE].host;
    else if (!services[REMOTE_SERVICE])
      _remoteHost = null;

    if (services[HTPC_SERVICE] && services[HTPC_SERVICE].host)
      _htpcHost = services[HTPC_SERVICE].host;
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
