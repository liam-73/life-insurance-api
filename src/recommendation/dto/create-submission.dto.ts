import { IsInt, Min, Max, IsIn } from 'class-validator'

export class CreateSubmissionDto {
  @IsInt()
  @Min(18)
  @Max(100)
  age: number

  @IsInt()
  @Min(0)
  income: number

  @IsInt()
  @Min(0)
  dependents: number

  @IsIn(['low', 'medium', 'high'])
  riskTolerance: 'low' | 'medium' | 'high'
}
