
import React from 'react';
import { getIpfs } from 'api/ipfs';

const getFile = async (hashes) => {
  if (!Array.isArray(hashes)) {
    hashes = [hashes];
  }
  const ipfsNode = await getIpfs();
  const promises = hashes.map(hash => ipfsNode.files.cat(hash));
  const data = await Promise.all(promises);
  return hashes.length === 1 ? data[0] : data;
};

class GetFile extends React.Component {
  state = {}
  componentWillMount() {
    this.updateFiles(this.props.hash);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.hash !== nextProps.hash) {
      this.updateFiles(nextProps.hash);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data;
  }
  async updateFiles(hash) {
    try {
      const data = await getFile(hash);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    const { data, error } = this.state;
    if (data || error) {
      return (
        <this.props.view {...this.state} />
      );
    }
    return null;
  }
}

export default GetFile;

