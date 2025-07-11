import { CreateSubmissionDto } from './dto/create-submission.dto'

export interface RecommendationResult {
  recommendation: string
  reason: string
}

export class RecommendationEngine {
  static evaluate(dto: CreateSubmissionDto): RecommendationResult {
    const { age, income, dependents, riskTolerance } = dto

    if (age < 40 && riskTolerance === 'high') {
      return {
        recommendation: 'Term Life – $500,000 for 20 years',
        reason:
          'Young age and high risk tolerance suggest aggressive term coverage.',
      }
    }

    if (age >= 40 && riskTolerance === 'low') {
      return {
        recommendation: 'Whole Life – $250,000',
        reason:
          'Older age and low risk tolerance suggest conservative permanent coverage.',
      }
    }

    return {
      recommendation: 'Universal Life – $300,000',
      reason: 'Balanced approach for medium risk and income protection.',
    }
  }
}
