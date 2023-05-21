import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { MoreThan, Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { HardMath } from "./entities/hard-math.entity"
import { User } from "../users/entities/user.entity"
import { ApiError } from "../../common/constants/errors"

@Injectable()
export class HardMathService {
  constructor(
    @InjectRepository(HardMath)
    private readonly hardMathRepository: Repository<HardMath>,
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
    const hardMathRes = await this.hardMathRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    })
    if (!hardMathRes) throw new NotFoundException(ApiError.USER_GAME_NOT_FOUND)

    if (hardMathRes.score < newScore) hardMathRes.score = newScore

    await hardMathRes.save()

    return { message: "score updated successfully " }
  }

  async getBestsUsers(limit: number): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        hardMath: true,
      },
      order: {
        hardMath: {
          score: "DESC",
        },
      },
      where: {
        hardMath: {
          score: MoreThan(0),
        },
      },
      take: limit,
    })
  }

  async getScoreById(userId: number): Promise<{ score: number }> {
    return await this.hardMathRepository.findOne({
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
