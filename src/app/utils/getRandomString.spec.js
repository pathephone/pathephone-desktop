import getRandomString from './getRandomString'

describe('test getRandomString', () => {
  it('should return string', () => {
    const value = getRandomString()
    return typeof value === 'string'
  })
})

export default getRandomString
