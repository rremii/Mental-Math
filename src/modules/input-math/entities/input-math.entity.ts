import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"
import { IInputMath } from "../input-math.interface"

@Entity()
export class InputMath extends BaseEntity implements IInputMath {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  score: number

  @OneToOne(() => User, (user) => user.inputMath) // specify inverse side as a second parameter
  user: User
}
