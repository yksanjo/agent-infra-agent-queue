# @agent-infra/agent-queue

**Message Queue System for AI Agent Communication**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🔧 Production-ready implementation
- 📦 Easy to integrate  
- 🧪 Comprehensive test coverage
- 📚 Well-documented API
- 🚀 Performance optimized

## Installation

```bash
npm install @agent-infra/agent-queue
```

## Quick Start


```typescript
import { AgentQueue } from '@agent-infra/agent-queue';

const instance = new AgentQueue();
await instance.initialize();
const result = await instance.execute({ task: 'your task' });
console.log(result);
```


## API Reference

### `AgentQueue`

Main class for agent queue functionality.

#### Methods

- `initialize()` - Initialize the component
- `execute(input)` - Execute main logic  
- `configure(config)` - Update configuration

## Testing

```bash
npm test
```

## License

MIT - See [LICENSE](LICENSE) for details

## Support

- Issues: https://github.com/yksanjo/agent-infra-agent-queue/issues
- Discussions: https://github.com/yksanjo/agent-infra-agent-queue/discussions
