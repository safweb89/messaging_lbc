import { IUser } from "app/types"

export const messageBuilder = ({to,from,text,time}:{
    to: Array<IUser> ,
    from: IUser | undefined,
    text: string,
    time: string
}) => ({
    to,from,text,time
})