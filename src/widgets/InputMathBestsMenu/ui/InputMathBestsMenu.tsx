import styled from "styled-components"
import { RatingHeader } from "@shared/ui/RatingHeader"
import { RatingCell } from "@shared/ui/RatingCell"
import { MenuBtn } from "@shared/ui/MenuBtn"
import { AvatarSrc } from "@entities/Avatar"
import { RatingSrc, useGetInputMathBestUsersQuery, UserInputMath } from "@entities/Game"

export const InputMathBestsMenu = () => {


  const { data: bestUsers } = useGetInputMathBestUsersQuery()


  return <InputMathBestsLayout>
    <RatingHeader title={"Input Math"} />
    <div className="cell-cont">
      {bestUsers?.map(({ userName, avatar, inputMath, id }: UserInputMath, i) => {
        const avatarSrc = AvatarSrc.get(avatar)
        const ratingSrc = RatingSrc.get(i)
        return <RatingCell key={id} ratingSrc={ratingSrc} avatar={avatarSrc} score={inputMath?.score || ""}
                           userName={userName} />
      })}
    </div>
    <div className="btn-cont">
      <MenuBtn />
    </div>
  </InputMathBestsLayout>
}
const InputMathBestsLayout = styled.div`
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
