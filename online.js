import { fastify } from "fastify"
import { databasePostgres } from "./database-postgres.js"

const server = fastify()
const db = new databasePostgres()

server.get('/videos', async ()=>{
    return await db.list()
})

server.post('/videos', async (request, reply)=>{
    const { title, description, duration } = request.body

    await db.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.put('/videos/:id', (request, reply)=>{
    
    const videoId = request.params.id 
    const { title, description, duration } = request.body

    db.update(videoId, {title, description, duration })

    return reply.status(2004).send()
})

server.delete('/videos/:id', (request, reply)=>{
    const videoId = request.params.id
    db.delete(videoId)

    return reply.status(2004).send()
})

server.listen({ port: 2222 })