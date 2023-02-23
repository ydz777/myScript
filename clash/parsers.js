module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
  const obj = yaml.parse(raw)
  let resSubscription = null
  try {
    let { data } = await axios.get(
      `https://sub.789.st/sub?target=clash&url=${url}&flag=clash&insert=false&config=https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`
    )
    resSubscription = data
  } catch (error) {
    notify('转换链接时发生错误！', String(error))
  }
  return resSubscription ?? yaml.stringify(obj)
}
