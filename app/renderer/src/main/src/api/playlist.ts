import request from '../utils/request'

// 获取歌单详情
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e6%ad%8c%e5%8d%95%e8%af%a6%e6%83%85
export function getPlaylistDetail(id: number) {
  return request({
    url: '/playlist/detail',
    method: 'GET',
    params: {
      id,
      s: 8,
    },
  })
}
