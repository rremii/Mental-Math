import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IUser } from "../users.interface"
import { QuickMath } from "../../quick-math/entities/quick-math.entity"

@Entity()
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

  // @OneToOne(() => QuickMath, (quickMath) => quickMath.user)
  // @JoinColumn()
  // quickMath: QuickMath
}
