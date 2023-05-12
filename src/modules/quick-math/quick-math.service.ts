import {
  Injectable,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { UpdateScoreDto } from "./dto/update-score.dto"
import { DefaultResponse } from "../../common/types/types"
import { QuickMath } from "./entities/quick-math.entity"

@Injectable()
export class QuickMathService {
  constructor(
    @InjectRepository(QuickMath)
    private readonly quickMathRepository: Repository<QuickMath>, // @InjectRepository(User) // private readonly userRepository: Repository<User>,
  ) {}

  // async findUserByEmail(email: string): Promise<User> {
  //   return this.usersRepository.findOneBy({ email })
  // }

  async updateScoreById({
    newScore,
    userId,
  }: UpdateScoreDto): Promise<DefaultResponse> {
    // const userResult = await this.quickMathRepository.update(
    //   { userId },
    //   { score: newScore },
    // )

    const qwe = await this.quickMathRepository.count()

    debugger

    return { message: "cool" }
  }

  async getBestsUsers() {}

  async getScoreById(userId: number) {}
}
