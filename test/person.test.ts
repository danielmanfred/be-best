import supertest from 'supertest'
import server from '../src/server'

const request = supertest(server)

describe('Person', () => {
    it('should return an error when the person username is not found', async () => {
        const response = await request.get('/api/getPerson')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            name: 'PersonNotFoundError',
            message: 'username not found'
        })
    })
})
