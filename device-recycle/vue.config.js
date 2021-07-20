const path = require("path");
const { resolve } = require("path");
module.exports = {
  devServer: {
    proxy: 'https://cloud.bajiesleep.com/'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    return {
      // 常用相对路径的别名（自己创建）
      resolve: {
        alias: {
          "@js": path.resolve(__dirname, "./src/assets/js"),
          "@css": path.resolve(__dirname, "./src/assets/css"),
          "@imgs": path.resolve(__dirname, "./src/assets/imgs"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@m": path.resolve(__dirname, "./src/models")
        }
      }
    };
  }
};
