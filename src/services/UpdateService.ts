import { UpdateProps } from "@props/UpdateProps"

class UpdateService{
    async execute(data: UpdateProps){
        return { put: data }
    }
}

export { UpdateService }