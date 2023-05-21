import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { MoreThan, Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { InputMath } from "./entities/input-math.entity"
import { User } from "../users/entities/user.entity"
import { ApiError } from "../../common/constants/errors"

@Injectable()
export class InputMathService {
  constructor(
    @InjectRepository(InputMath)
    private readonly inputMathRepository: Repository<InputMath>,
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
    const inputMathRes = await this.inputMathRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    })
    if (!inputMathRes) throw new NotFoundException(ApiError.USER_GAME_NOT_FOUND)

    if (inputMathRes.score < newScore) inputMathRes.score = newScore

    await inputMathRes.save()

    return { message: "score updated successfully " }
  }

  async getBestsUsers(limit: number): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        hardMath: true,
      },
      order: {
        inputMath: {
          score: "DESC",
        },
      },
      where: {
        inputMath: {
          score: MoreThan(0),
        },
      },
      take: limit,
    })
  }

  async getScoreById(userId: number): Promise<{ score: number }> {
    return await this.inputMathRepository.findOne({
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
