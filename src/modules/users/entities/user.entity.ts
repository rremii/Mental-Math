import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm"
import { IUser } from "../users.interface"
import { QuickMath } from "../../quick-math/entities/quick-math.entity"
import { HardMath } from "../../hard-math/entities/hard-math.entity"
import { InputMath } from "../../input-math/entities/input-math.entity"
import { TrueFalseMath } from "../../true-false-math/entities/true-false-math.entity"

@Entity()
@Unique(["email"])
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  avatar: string

  @Column({ nullable: true })
  refreshToken: string

  @OneToOne(() => QuickMath, (quickMath) => quickMath.user)
  @JoinColumn()
  quickMath: QuickMath

  @OneToOne(() => HardMath, (hardMath) => hardMath.user)
  @JoinColumn()
  hardMath: HardMath

  @OneToOne(() => InputMath, (inputMath) => inputMath.user)
  @JoinColumn()
  inputMath: InputMath

  @OneToOne(() => TrueFalseMath, (trueFalseMath) => trueFalseMath.user)
  @JoinColumn()
  trueFalseMath: TrueFalseMath
}
