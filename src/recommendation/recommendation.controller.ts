import { Body, Controller, Get, Post } from '@nestjs/common'
import { RecommendationService } from './recommendation.service'
import { CreateSubmissionDto } from './dto/create-submission.dto'

@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly service: RecommendationService) {}

  @Post()
  async createRecommendation(@Body() dto: CreateSubmissionDto) {
    return this.service.create(dto)
  }

  @Get()
  getRecommendations() {
    return this.service.getRecommendations()
  }
}
