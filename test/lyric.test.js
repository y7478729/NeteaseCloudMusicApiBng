const assert = require('assert')
const { default: axios } = require('axios')
const host = global.host || 'http://localhost:3000'
const config = require('../corejs/util/config.json')
describe('测试获取歌词是否正常', () => {
  it('数据应该有 lrc 字段', (done) => {
    const qs = {
      id: 347230,
      realIP: '116.25.146.177',
    }

    axios
      .get(`${host}/lyric`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(typeof data.lrc !== 'undefined')
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
