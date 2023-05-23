import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { MoreThan, Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { TrueFalseMath } from "./entities/true-false-math.entity"
import { User } from "../users/entities/user.entity"
import { ApiError } from "../../common/constants/errors"

@Injectable()
export class TrueFalseMathService {
  constructor(
    @InjectRepository(TrueFalseMath)
    private readonly trueFalseMathRepository: Repository<TrueFalseMath>,
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
    const trueFalseMathRes = await this.trueFalseMathRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    })
    if (!trueFalseMathRes)
      throw new NotFoundException(ApiError.USER_GAME_NOT_FOUND)

    if (trueFalseMathRes.score < newScore) trueFalseMathRes.score = newScore

    await trueFalseMathRes.save()

    return { message: "score updated successfully " }
  }

  async getBestsUsers(limit: number): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        trueFalseMath: true,
      },
      order: {
        trueFalseMath: {
          score: "DESC",
        },
      },
      where: {
        trueFalseMath: {
          score: MoreThan(0),
        },
      },
      take: limit,
    })
  }

  async getScoreById(userId: number): Promise<{ score: number }> {
    return await this.trueFalseMathRepository.findOne({
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
