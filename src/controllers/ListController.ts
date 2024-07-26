import { FastifyRequest, FastifyReply } from 'fastify'
import { ListService } from '@services/ListService'

class ListController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const listService = await new ListService().execute()
        res.send(listService)
    } 
}

export { ListController }