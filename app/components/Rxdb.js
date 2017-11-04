import React from 'react'
import { getDb } from 'api/rxdb'

class Rxdb extends React.Component {
  state = {
    data: null,
    error: null
  }
  async componentWillMount () {
    try {
      const { collection, query, reactive } = this.props
      const db = getDb()
      const queryObj = db[collection].find(query)
      if (reactive === true) {
        this.subscription = queryObj.$.subscribe(data => {
          this.setState({ data })
        })
      } else {
        const data = await queryObj.exec()
        this.setState({ data })
      }
    } catch (error) {
      this.setState({ error })
    }
  }
  componentWillUnmount () {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
  render () {
    return (
      <this.props.view {...this.state} />
    )
  }
}

export default Rxdb
