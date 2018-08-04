
const defaultIPFSDaemonConfig = {
  Addresses: {
    API: '/ip4/127.0.0.1/tcp/0',
    Gateway: '/ip4/127.0.0.1/tcp/0',
    Swarm: [
      '/ip4/0.0.0.0/tcp/4001',
      '/ip6/::/tcp/4001'
    ]
  }
}

export default defaultIPFSDaemonConfig
