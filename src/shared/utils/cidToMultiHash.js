import cidToBuffer from './cidToBuffer';

export default cid => cidToBuffer(cid).slice(2);
