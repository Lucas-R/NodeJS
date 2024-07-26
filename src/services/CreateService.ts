import { CreateProps } from "@props/CreateProps"

class CreateService{
    async execute(data: CreateProps){
        return { post: data }
    }
}

export { CreateService }