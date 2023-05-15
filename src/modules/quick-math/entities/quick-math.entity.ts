import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IQuickMath } from "../quick-math.interface"
import { User } from "../../users/entities/user.entity"

@Entity()
export class QuickMath extends BaseEntity implements IQuickMath {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  score: number

  @OneToOne(() => User, (user) => user.quickMath) // specify inverse side as a second parameter
  user: User
}
