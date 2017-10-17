import React from 'react';
import { getDb } from '../api/rxdb';

export default class Find extends React.Component {
  state = {
    data: null
  }
  async componentWillMount() {
    const { collection, query, reactive } = this.props;
    const db = getDb();
    const queryObj = db[collection].find(query);
    if (reactive === true) {
      this.subscription = queryObj.$.subscribe(data => {
        this.setState({ data });
      });
    } else {
      const data = await queryObj.exec();
      this.setState({ data });
    }
  }
  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  render() {
    return (
      <this.props.view {...this.state} />
    );
  }
}
