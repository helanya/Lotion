import { Random } from 'mockjs'
//user.js

const blocksData = []

for (let index = 0; index < 10; index++) {
  blocksData.push({
    id: Random.guid(),
    emoji: ['🌞', '🌛', '🐷', '📖', '🌲', '🎃'][Random.natural(0, 5)],
    coverUrl: Random.image('1000x100', '#db615c'),
    title: Random.ctitle(),
  })
}
const blocks = {
  url: '/mock/blocks',
  method: 'get',
  timeout: 500,
  statusCode: 200,
  response: {
    code: 200,
    message: 'success',
    result: blocksData,
  },
}
export default [blocks]
