const URL = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
                                        ? 'http://blogs.weixiaolu.cn'
                                        : 'http://localhost:3003'
}
export {
  URL
}