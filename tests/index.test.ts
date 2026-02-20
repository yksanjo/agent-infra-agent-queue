import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentQueue } from '../src/index.js';

describe('AgentQueue', () => {
  it('should initialize', async () => {
    const instance = new AgentQueue();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentQueue();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
