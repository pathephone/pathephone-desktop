import getIpfs from '../api/ipfs'
import cidToMultiHash from '../utils/cidToMultiHash'

export const defaultPublishInterval = 120 * 1000

let albumsCidIntervals = {}

export default async (schemaCid, cid, time = defaultPublishInterval) => {
	if(albumsCidIntervals[cid])
		return;
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