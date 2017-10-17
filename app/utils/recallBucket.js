const addListener = (bucket, listener) => {
  const index = bucket.push(listener) - 1
  return {
    done: () => delete bucket[index]
  }
}

const recallListeners = (bucket, value) => {
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      bucket[i](value)
    }
  }
}

module.exports = () => {
  const bucket = []
  return (prop) => {
    if (typeof prop === 'function') {
      return addListener(bucket, prop)
    }
    recallListeners(bucket, prop)
  }
}
