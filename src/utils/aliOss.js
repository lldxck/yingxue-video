import OSS from 'ali-oss'
const client = new OSS({
  region: '',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: ''
})
export default client