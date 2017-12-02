import getIpfs from '../api/ipfs'
import cidToMultiHash from '../utils/cidToMultiHash'

let albumsCidIntervals = {}

export default async (schemaCid, cid, time = 90000) => {
	const ipfsApi = await getIpfs()
	const multihash = cidToMultiHash(cid)
	let intervalId = setInterval(() => {
		ipfsApi.pubsub.publish(schemaCid, multihash)
	}, time);
	albumsCidIntervals[cid] = intervalId
}

export const stopAutoPublish = (cid) => {
	console.log(albumsCidIntervals)
	let intervalId = albumsCidIntervals[cid]
	if(!intervalId)
		return;
	clearInterval(intervalId);
	delete albumsCidIntervals[cid];
}