/**
 * config
 * 此处的数据库配置分为两种，本地和BAE
 */
var config = {
    // 站点名字
    name: 'Vue Order',
    //调试状态
    debug: true,
     //开发模式
    devMode: true,
    //是否允许注册
    allow_sign_up: true,
    //注册是否需要激活邮箱
    need_active_mail:false,
     /**
     * URL
     * 域名地址,如果没有请留空，(!domain || devMode)===true时会读取host+':'+port作为地址
     */
    domain: 'vueorder.duapp.com',
    host: '127.0.0.1',
    port: 18080,
    // mongodb 配置
    dev_dbUrl: 'mongodb://127.0.0.1/vue_order_dev',
    //如果devMode=true，则数据库连接使用dev_dbUrl，反之为dbConfig
    dbConfig: {
        "host": "mongo.duapp.com",
        "database": "SKxOi111111111PLSnCBzpYNJLv",
        "userid": "a82c20111111111175bff285baf7839fdb",
        "password": "e4d11111111163f54c1a87a88933a81eee57",
        "port": 8908
    },
    //session设置
    session_secret: 'vueorder_secret', // session密匙
    session_collection: 'vueorder_secret', // 存放session的collection
    cookie_secret: 'vueorder_secret', // session密匙
    auth_cookie_name: 'vueorder_cookie', //cookie名称
    
    //百度应用的	用户名和密码
    bae_accesskey:'a82c2085536e41111111111baf7839fdb',
    bae_secretkey:'e4db12d663f54c1a87a889111111111ee57',
    
    // redis 配置，BAE
    redis_host: 'redis.duapp.com',
    redis_port: 80,
    redis_db: 'ywBsVfllj111111111NwcXThQo',
     //超级管理员账户（user_login_name: true ）
    admins: {
        // user_login_name: true 
        giscafer:true,
        yangdengxian:true
    },
      // 邮箱配置 need_active_mail为true时，必须设置
    mail_opts: {
        debug:true,
        host: 'smtp.126.com',
        port: 25,
        auth: {
            user: 'gisbbs@126.com',
            pass: '111111111'
        }
    },
    
    list_user_count:10
};

module.exports = config;
