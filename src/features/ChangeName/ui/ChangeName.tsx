import { LabelWithEdit } from "@shared/ui/LabelWithEdit"
import { useChangeNameMutation, useGetUserQuery } from "@entities/User"

export const ChangeName = () => {

  const { data: user } = useGetUserQuery()
  const [changeName, { isLoading }] = useChangeNameMutation()

  const ChangeName = (inputText: string) => {
    if (!user || !inputText) return
    changeName({ id: user.id, newName: inputText })
  }

  return <LabelWithEdit isLoading={isLoading} onBlur={ChangeName} labelText={user?.userName} />
}

