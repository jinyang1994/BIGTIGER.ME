// 公用配置
const config = {
    version: 'v1.0.0'
};

// 开发环境配置
const developmentConfig = {
    mapi: {
        bigtiger: 'http://www.bigtiger.me/wp-json/wp/v2/'
    }
};

// 生产环境配置
const productionConfig = {
    mapi: {
        bigtiger: 'http://www.bigtiger.me/wp-json/wp/v2/'
    }
};

export default { ...config, ...(__DEV__ ? developmentConfig : productionConfig) };
