import React from 'react'
import getDb from '../../api/rxdb'

class Rxdb extends React.Component {
  state = {
    data: null,
    error: null
  }
  componentWillMount () {
    this.handleProps(this.props)
  }
  componentWillReceiveProps (props) {
    this.handleProps(props)
  }
  handleProps = async ({ collection, query, reactive }) => {
    try {
      if (this.subscription) {
        await this.subscription.unsubscribe()
      }
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
