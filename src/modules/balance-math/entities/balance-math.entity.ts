import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"
import { IBalanceMath } from "../balance-math.interface"

@Entity()
export class BalanceMath extends BaseEntity implements IBalanceMath {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  score: number

  @OneToOne(() => User, (user) => user.balanceMath) // specify inverse side as a second parameter
  user: User
}
