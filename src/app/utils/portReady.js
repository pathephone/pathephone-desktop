import net from 'net'

export default (port, host = 'localhost') => new Promise((resolve, reject) => {
  const tester = net.createServer()
    .once('error', err => (err.code === 'EADDRINUSE' ? resolve(false) : reject(err)))
    .once('listening', () => tester.once('close', () => resolve(true)).close())
    .listen({
      host,
      port
    })
})
