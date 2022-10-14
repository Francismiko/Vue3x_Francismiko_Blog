const { Music } = require('../model/music');

const demo = new Music({
  audioUrl: '11116766',
  imgUrl: '2222123123',
  musicName: '33333'
})

demo.save()

console.log(demo);