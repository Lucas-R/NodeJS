import fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const app = fastify({ logger: true });
app.setErrorHandler((err, req, res) => {
    res.code(400).send({ message: err.message });
})

const start = async () => {
    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({ 
            port: 3333
        })
    } catch (error) {
        process.exit(1);
    }
}

start();