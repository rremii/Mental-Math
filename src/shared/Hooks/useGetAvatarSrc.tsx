import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"
import { AvatarSrc } from "@shared/Constants/AvatarsSrc"

export const UseGetAvatarSrc = (avatar: Avatars) => {

  return { avatarSrc: AvatarSrc.get(avatar) }

}
