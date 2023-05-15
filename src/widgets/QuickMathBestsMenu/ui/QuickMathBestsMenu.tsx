import styled from "styled-components"
import { RatingHeader } from "@widgets/QuickMathBestsMenu/ui/RatingHeader"
import { RatingCell } from "@widgets/QuickMathBestsMenu/ui/RatingCell"
import { MenuBtn } from "@widgets/QuickMathBestsMenu/ui/MenuBtn"
import { number } from "yup"
import { useGetBestUsersQuery } from "@entities/QuickMath"
import { User } from "@entities/User/types"
import { useEffect } from "react"
import { UserQuickMath } from "@entities/QuickMath/types"

export const QuickMathBestsMenu = () => {


  const { data: bestUsers } = useGetBestUsersQuery()


  return <QuickMathBestsLayout>
    <RatingHeader title={"Quick Math"} />
    <div className="cell-cont">
      {bestUsers?.map(({ userName, avatar, quickMath, id }: UserQuickMath, i) => {
        return <RatingCell key={id} place={"first"} avatar={avatar} score={quickMath?.score || 0} userName={userName} />
      })}
    </div>
    <div className="btn-cont">
      <MenuBtn />
    </div>
  </QuickMathBestsLayout>
}
const QuickMathBestsLayout = styled.div`
  padding: 0 20px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--game-menu-bg);
  color: var(--main-text-color);

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
