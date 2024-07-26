import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateService } from '@services/UpdateService';
import { UpdateProps } from '@props/UpdateProps';

class UpdateController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const data = req.body as UpdateProps;
        const updateService = await new UpdateService().execute(data)
        res.send(updateService)
    } 
}

export { UpdateController }