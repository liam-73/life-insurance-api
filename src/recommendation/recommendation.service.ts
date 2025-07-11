import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Submission } from './entities/submission.entity'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { RecommendationEngine } from './recommendation.engine'

@Injectable()
export class RecommendationService {
  constructor(
    @InjectRepository(Submission)
    private repo: Repository<Submission>,
  ) {}

  async create(dto: CreateSubmissionDto) {
    const submission = this.repo.create(dto)
    await this.repo.save(submission)

    const { recommendation, reason } = this.getRecommendation(dto)
    return { recommendation, reason }
  }

  private getRecommendation(dto: CreateSubmissionDto) {
    // In future, replace this rules-based logic with an ML service call:
    // Example: callRecommendationModel(dto) => Promise<RecommendationResult>

    const result = RecommendationEngine.evaluate(dto)

    return result
  }

  getRecommendations() {
    return this.repo.find()
  }
}
