import assert from 'node:assert/strict'
import { test } from 'node:test'
import { recommend } from '../app/learn/recommendation.mjs'

const baseline = {
  objective: 'website',
  sensitivity: 'ordinary',
  integration: 'simple',
  operations: 'managed',
  investment: 'usage',
}

const privatePilot = {
  objective: 'private',
  operations: 'supported',
  investment: 'infrastructure',
  integration: 'complex',
  sensitivity: 'confidential',
}

const cases = [
  ['restricted data overrides private readiness', { ...privatePilot, sensitivity: 'restricted' }, 'specialist'],
  ['private readiness overrides complexity and confidentiality', privatePilot, 'private'],
  ['missing operator prevents private feasibility', { ...privatePilot, operations: 'managed' }, 'hybrid'],
  ['missing budget prevents private feasibility', { ...privatePilot, investment: 'usage' }, 'hybrid'],
  ['confidentiality overrides website objective', { sensitivity: 'confidential' }, 'hybrid'],
  ['complex tools override website objective', { integration: 'complex' }, 'hybrid'],
  ['ordinary website workflow', {}, 'website'],
  ['ordinary internal workflow', { objective: 'workflow' }, 'managed'],
  ['private goal without readiness or complexity', { objective: 'private' }, 'managed'],
]

for (const [name, answers, expected] of cases) {
  test(name, () => assert.equal(recommend({ ...baseline, ...answers }), expected))
}
