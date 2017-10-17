import React from 'react';
import putFilesToIpfs from 'scripts/putFilesToIpfs';
import publishAlbum from 'scripts/publishAlbum';
import { Input, Button, Grid, Form } from 'semantic-ui-react';

export default class extends React.Component {
  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { validatorErrors } = await publishAlbum(this.state);
      if (validatorErrors) {
        validatorErrors.forEach(er => { console.log(er.message); });
      }
    } catch (er) {
      console.log(er);
    }
  }
  fileChangeHandler = async (e) => {
    const { name, files } = e.currentTarget;
    const ipfsHashes = await putFilesToIpfs(files);
    this.setState({
      [name]: ipfsHashes
    });
  }
  changeHandler = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large" onSubmit={this.submitHandler}>
            <Form.Input
              name="title"
              placeholder="Album title"
              type="text"
              onChange={this.changeHandler}
            />
            <Form.Input
              name="artist"
              placeholder="Album artist"
              type="text"
              onChange={this.changeHandler}
            />
            <Form.Input
              name="cover"
              type="file"
              onChange={this.fileChangeHandler}
            />
            <Button type="submit">
              ADD ALBUM
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
