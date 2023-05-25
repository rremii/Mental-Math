import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./entities/user.entity"
import { CreateUserDto } from "./dto/create-user.dto"
import { HashData } from "../../common/helpers/hashData"
import { TokenService } from "../token/token.service"
import { ApiError } from "../../common/constants/errors"
import { ChangeNameDto } from "./dto/change-name.dto"
import { DefaultResponse } from "../../common/types/types"
import { ChangeAvatarDto } from "./dto/change-avatar.dto"
import { QuickMath } from "../quick-math/entities/quick-math.entity"
import { QuickMathService } from "../quick-math/quick-math.service"
import { GameResultsResponse } from "./response/gameResults.response"
import { HardMathService } from "../hard-math/hard-math.service"
import { HardMath } from "../hard-math/entities/hard-math.entity"
import { InputMath } from "../input-math/entities/input-math.entity"
import { InputMathService } from "../input-math/input-math.service"
import { TrueFalseMathService } from "../true-false-math/true-false-math.service"
import { TrueFalseMath } from "../true-false-math/entities/true-false-math.entity"
import { BalanceMathService } from "../balance-math/balance-math.service"
import { BalanceMath } from "../balance-math/entities/balance-math.entity"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    // @InjectRepository(QuickMath)
    // private readonly quickMathRepository: Repository<QuickMath>,
    // @InjectRepository(HardMath)
    // private readonly hardMathRepository: Repository<HardMath>,
    // @InjectRepository(InputMath)
    // private readonly inputMathRepository: Repository<InputMath>,
    private readonly tokenService: TokenService,
    private readonly quickMathService: QuickMathService,
    private readonly hardMathService: HardMathService,
    private readonly inputMathService: InputMathService,
    private readonly trueFalseMathService: TrueFalseMathService,
    private readonly balanceMathService: BalanceMathService,
  ) {}

  async findUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email })
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const quickMath = new QuickMath()
    const hardMath = new HardMath()
    const inputMath = new InputMath()
    const trueFalseMath = new TrueFalseMath()
    const balanceMath = new BalanceMath()

    await quickMath.save()
    await hardMath.save()
    await inputMath.save()
    await trueFalseMath.save()
    await balanceMath.save()

    if (!quickMath || !hardMath || !inputMath || !trueFalseMath || !balanceMath)
      throw new BadRequestException("could not create one of math games")

    const newUser = new User()
    newUser.email = user.email
    newUser.userName = user.userName
    newUser.password = await HashData(user.password)
    newUser.avatar = user.avatar
    newUser.quickMath = quickMath
    newUser.hardMath = hardMath
    newUser.inputMath = inputMath
    newUser.trueFalseMath = trueFalseMath
    newUser.balanceMath = balanceMath

    await newUser.save()

    return newUser
  }

  async changeName(changeNameDto: ChangeNameDto): Promise<DefaultResponse> {
    const user = await this.usersRepository.findOneBy({ id: changeNameDto.id })
    user.userName = changeNameDto.newName

    await user.save()

    return { message: "user name was updated" }
  }

  async changeAvatar(changeNameDto: ChangeAvatarDto): Promise<DefaultResponse> {
    const user = await this.usersRepository.findOneBy({ id: changeNameDto.id })
    user.avatar = changeNameDto.newAvatar

    await user.save()

    return { message: "user avatar was updated" }
  }

  async getUser(authToken: string): Promise<User> {
    const decodedUser = await this.tokenService.decodeToken(authToken)

    const user = this.usersRepository.findOneBy({ id: decodedUser.id })
    if (!user) throw new BadRequestException(ApiError.USER_NOT_FOUND)

    return user
  }

  async getGameResultsById(id: number): Promise<GameResultsResponse> {
    const { score: quickMathScore } = await this.quickMathService.getScoreById(
      id,
    )
    const { score: hardMathScore } = await this.hardMathService.getScoreById(id)
    const { score: inputMathScore } = await this.inputMathService.getScoreById(
      id,
    )
    const { score: trueFalseMathScore } =
      await this.trueFalseMathService.getScoreById(id)

    const { score: balanceMathScore } =
      await this.balanceMathService.getScoreById(id)

    return {
      quickMathScore,
      hardMathScore,
      inputMathScore,
      trueFalseMathScore,
      balanceMathScore,
    }
  }
}
