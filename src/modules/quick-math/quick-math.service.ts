import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { MoreThan, Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { QuickMath } from "./entities/quick-math.entity"
import { User } from "../users/entities/user.entity"
import { ApiError } from "../../common/constants/errors"

@Injectable()
export class QuickMathService {
  constructor(
    @InjectRepository(QuickMath)
    private readonly quickMathRepository: Repository<QuickMath>,
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
    const quickMathRes = await this.quickMathRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    })
    if (!quickMathRes) throw new NotFoundException(ApiError.USER_GAME_NOT_FOUND)

    if (quickMathRes.score < newScore) quickMathRes.score = newScore

    await quickMathRes.save()

    return { message: "score updated successfully " }
  }

  async getBestsUsers(limit: number): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        quickMath: true,
      },
      where: {
        quickMath: {
          score: MoreThan(0),
        },
      },
      order: {
        quickMath: {
          score: "DESC",
        },
      },
      take: limit,
    })
  }

  async getScoreById(userId: number): Promise<{ score: number }> {
    return await this.quickMathRepository.findOne({
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
