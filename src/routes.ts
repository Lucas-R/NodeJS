import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateController } from "@controllers/CreateController";
import { ListController } from "@controllers/ListController";
import { UpdateController } from "@controllers/UpdateController";
import { DeleteController } from "@controllers/DeleteController";

export async function routes(fastify: FastifyInstance, opt: FastifyPluginOptions){
    fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
        return await new ListController().handle(req, res);
    });

    fastify.post("/", async (req: FastifyRequest, res: FastifyReply) => {
        return await new CreateController().handle(req, res);
    });

    fastify.put("/", async (req: FastifyRequest, res: FastifyReply) => {
        return await new UpdateController().handle(req, res);
    });

    fastify.delete("/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return await new DeleteController().handle(req, res);
    });
}