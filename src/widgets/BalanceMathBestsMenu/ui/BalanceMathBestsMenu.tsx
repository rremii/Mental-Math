import styled from "styled-components"
import { RatingHeader } from "@shared/ui/RatingHeader"
import { RatingCell } from "@shared/ui/RatingCell"
import { MenuBtn } from "@shared/ui/MenuBtn"
import { AvatarSrc } from "@entities/Avatar"
import { RatingSrc, UserBalanceMath, UserTrueFalseMath } from "@entities/Game"
import { useGetBalanceMathBestUsersQuery } from "@entities/Game/api/BalanceMathApi"

export const BalanceMathBestsMenu = () => {

  const { data: bestUsers } = useGetBalanceMathBestUsersQuery()


  return <MathBestsLayout>
    <RatingHeader title={"Balance Math"} />
    <div className="cell-cont">
      {bestUsers?.map(({ userName, avatar, balanceMath, id }: UserBalanceMath, i) => {
        const avatarSrc = AvatarSrc.get(avatar)
        const ratingSrc = RatingSrc.get(i)
        return <RatingCell key={id} ratingSrc={ratingSrc} avatar={avatarSrc} score={balanceMath?.score || ""}
                           userName={userName} />
      })}
    </div>
    <div className="btn-cont">
      <MenuBtn />
    </div>
  </MathBestsLayout>
}
const MathBestsLayout = styled.div`
  padding: 0 20px 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--game-menu-bg);
  color: var(--main-text-color);

  @media screen and (max-width: 500px) {
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
