module.exports = {
  app: [{
    name: 'blogs',
    script: 'server/index.js',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'ading',
      host: '120.76.112.200',
      port: '44672',
      ref: 'origin/master',
      repo: 'https://15277951017@gitee.com/wenxinshuimu/blogs.git',
      path: '/www/blogs/production',
      'pre-deploy': 'git fetch --all',
      'post-deploy': 'npm install && pm2 startOrRestart deploy.config.js --env production',

    }
  }
}