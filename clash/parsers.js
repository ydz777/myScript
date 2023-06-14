module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
  const obj = yaml.parse(raw)
  let resSubscription = null
  try {
    let { data } = await axios.get(
      `https://api.v1.mk/sub?target=clash&url=${url}&insert=false&config=https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini&emoji=true&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=false&fdn=false&new_name=true`
    )
    resSubscription = data
  } catch (error) {
    notify('转换链接时发生错误！', String(error))
  }
  return resSubscription ?? yaml.stringify(obj)
}
