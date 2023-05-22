import styled from "styled-components"
import { RatingHeader } from "@shared/ui/RatingHeader"
import { RatingCell } from "@shared/ui/RatingCell"
import { MenuBtn } from "@shared/ui/MenuBtn"
import { AvatarSrc } from "@entities/Avatar"
import { RatingSrc, UserHardMath } from "@entities/Game"
import { useGetHardMathBestUsersQuery } from "@entities/Game/api/HardMathApi"

export const HardMathBestsMenu = () => {


  const { data: bestUsers } = useGetHardMathBestUsersQuery()


  return <HardMathBestsLayout>
    <RatingHeader title={"Hard Math"} />
    <div className="cell-cont">
      {bestUsers?.map(({ userName, avatar, hardMath, id }: UserHardMath, i) => {
        const avatarSrc = AvatarSrc.get(avatar)
        const ratingSrc = RatingSrc.get(i)
        return <RatingCell key={id} ratingSrc={ratingSrc} avatar={avatarSrc} score={hardMath?.score || ""}
                           userName={userName} />
      })}
    </div>
    <div className="btn-cont">
      <MenuBtn />
    </div>
  </HardMathBestsLayout>
}
const HardMathBestsLayout = styled.div`
  padding: 0 20px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--game-menu-bg);
  color: var(--main-text-color);
  @media screen and (max-width: 600px) {
    padding: 0 20px 70px;

  }
  .cell-cont {
    padding: 30px 10px 20px;
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
  }

  .btn-cont {
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
