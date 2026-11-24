// Evaluate in order. The first matching condition determines the recommendation.
export function recommend({ objective, sensitivity, integration, operations, investment }) {
  if (sensitivity === 'restricted') return 'specialist'
  if (objective === 'private' && operations === 'supported' && investment === 'infrastructure') {
    return 'private'
  }
  if (integration === 'complex' || sensitivity === 'confidential') {
    return 'hybrid'
  }
  if (objective === 'website') return 'website'
  return 'managed'
}
