export function JsonP (opt: JsonPOption) {
  let src: string = opt.url + `?callback=${opt.url}`
  for (const key in opt.data) {
    if (Object.prototype.hasOwnProperty.call(opt.data, key)) {
      const element = opt.data[key]
      src += `&${key}=${element}`
    }
  }
  const script = document.createElement('script')
  script.src = src
  script.onload = () => {
    document.body.removeChild(script)
  }
  document.body.appendChild(script)
}

interface JsonPOption {
  callback: string,
  url: string,
  data: any
}
