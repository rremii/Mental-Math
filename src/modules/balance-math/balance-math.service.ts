import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { MoreThan, Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { BalanceMath } from "./entities/balance-math.entity"
import { User } from "../users/entities/user.entity"
import { ApiError } from "../../common/constants/errors"

@Injectable()
export class BalanceMathService {
  constructor(
    @InjectRepository(BalanceMath)
    private readonly balanceMathRepository: Repository<BalanceMath>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // async findUserByEmail(email: string): Promise<User> {
  //   return this.usersRepository.findOneBy({ email })
  // }

  async updateScoreById({
    newScore,
    userId,
  }: UpdateScoreDto): Promise<DefaultResponse> {
    const balanceMathRes = await this.balanceMathRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    })
    if (!balanceMathRes)
      throw new NotFoundException(ApiError.USER_GAME_NOT_FOUND)

    if (balanceMathRes.score < newScore) balanceMathRes.score = newScore

    await balanceMathRes.save()

    return { message: "score updated successfully " }
  }

  async getBestsUsers(limit: number): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        balanceMath: true,
      },
      order: {
        balanceMath: {
          score: "DESC",
        },
      },
      where: {
        balanceMath: {
          score: MoreThan(0),
        },
      },
      take: limit,
    })
  }

  async getScoreById(userId: number): Promise<{ score: number }> {
    return await this.balanceMathRepository.findOne({
      // relations: {
      //   user: true,
      // },
      // select: {
      //   score: true,
      // },
      where: {
        user: {
          id: userId,
        },
      },
    })
  }
}
