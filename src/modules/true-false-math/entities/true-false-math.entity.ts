import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"
import { ITrueFalseMath } from "../true-false-math.interface"

@Entity()
export class TrueFalseMath extends BaseEntity implements ITrueFalseMath {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  score: number

  @OneToOne(() => User, (user) => user.trueFalseMath) // specify inverse side as a second parameter
  user: User
}
