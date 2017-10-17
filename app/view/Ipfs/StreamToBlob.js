import React from 'react';
import blobStream from 'blob-stream';


const streamToBlob = (stream) => {
  const promises = stream.map(
        str => new Promise((resolve, reject) => {
          str
            .pipe(blobStream())
            .on('error', reject)
            .on('finish', function () {
              const blob = this.toBlob();
              resolve(blob);
            });
        })
      );
  return Promise.all(promises);
};

class StreamToBlob extends React.Component {
  state = {}
  componentWillMount() {
    this.updateBlob(this.props.stream);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.stream !== nextProps.stream) {
      this.updateBlob(nextProps.stream);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data;
  }
  componentWillUnmount() {
    // TODO blobs revoking
  }
  async updateBlob(stream) {
    try {
      if (!Array.isArray(stream)) {
        stream = [stream];
      }
      const data = await streamToBlob(stream);
      this.setState({
        data: stream.length === 1 ? data[0] : data
      });
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    const { data, error } = this.state;
    if (data || error) {
      return <this.props.view {...this.state} />;
    }
    return null;
  }
}

export default StreamToBlob;
