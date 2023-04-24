import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IUser } from "../users.interface"

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
}

//
// export class Task implements ITask {
//   id = new Date().getTime()
//   status: Status
//   task: string
//   tags: string[]
//   email: string
//   createdAt = new Date
//   updatedAt = new Date
//
//   constructor(task: string, email?: string, tags?: string[], status?: Status) {
//     this.task = task
//     this.tags = tags || []
//     this.status = status || Status.ACTIVE
//     this.email = email || null
//   }
// }
