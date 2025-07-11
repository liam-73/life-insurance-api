import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  age: number

  @Column()
  income: number

  @Column()
  dependents: number

  @Column()
  riskTolerance: 'low' | 'medium' | 'high'

  @CreateDateColumn()
  createdAt: Date
}
