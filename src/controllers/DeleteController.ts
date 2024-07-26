import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteService } from '@services/DeleteService';
import { DeleteProps } from '@props/DeleteProps';

class DeleteController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const { id } = req.params as DeleteProps
        const deleteService = await new DeleteService().execute({ id })
        res.send(deleteService)
    } 
}

export { DeleteController }