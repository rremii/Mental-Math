import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IHardMath } from "../hard-math.interface"
import { User } from "../../users/entities/user.entity"

@Entity()
export class HardMath extends BaseEntity implements IHardMath {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  score: number

  @OneToOne(() => User, (user) => user.hardMath) // specify inverse side as a second parameter
  user: User
}
