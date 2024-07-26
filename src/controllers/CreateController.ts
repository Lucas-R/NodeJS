import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateService } from '@services/CreateService';
import { CreateProps } from '@props/CreateProps';

class CreateController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const data = req.body as CreateProps;
        const createService = await new CreateService().execute(data)
        res.send(createService)
    } 
}

export { CreateController }