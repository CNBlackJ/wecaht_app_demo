module.exports = {
  port: 8080,
  appid: 'appid',
  secret: 'secret',
  grant_type: 'client_credential',
  noncestr: 'noncestr',
  accessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token',
  ticketUrl: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
  cache_duration: 1000 * 60 * 60 * 24 //缓存时长为24小时
}