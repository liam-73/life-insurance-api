import { Module } from '@nestjs/common'
import { RecommendationController } from './recommendation.controller'
import { RecommendationService } from './recommendation.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Submission } from './entities/submission.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Submission])],
  controllers: [RecommendationController],
  providers: [RecommendationService],
})
export class RecommendationModule {}
