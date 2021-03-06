module.exports = {
  app: [{
    name: 'blogs',
    script: 'app.js',
    node_args: "--harmony",
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
      'post-deploy': 'npm install && npm run build && npm start && pm2 startOrRestar deploy.config.js --env production',

    }
  }
}