export type Result = 'specialist' | 'private' | 'hybrid' | 'website' | 'managed'

export function recommend(answers: {
  objective: string
  sensitivity: string
  integration: string
  operations: string
  investment: string
}): Result
