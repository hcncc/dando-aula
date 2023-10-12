import sql from './db.js'
import { randomUUID } from 'node:crypto'
export class databasePostgres{
    async list(){
        const videos = await sql`SELECT * FROM videos`

        return videos
    }

    async create(video){
        const videoId = randomUUID()
        const { title, description, duration } = video

        await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
        
        return {message: 'success' }
    }

    async update(id, video){
        const { title, description, duration } = video

        await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration}) WHERE id = ${id}`

        
    }

    async delete(id){
        await sql`DELETE FROM videos WHERE id = ${id}`
        return {message: 'Deleted'}
    }
}