import { DeleteProps } from "@props/DeleteProps"

class DeleteService{
    async execute({ id }: DeleteProps){
        return { Delete: id }
    }
}

export { DeleteService }