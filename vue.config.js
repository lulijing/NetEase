module.exports = {
  devServer: {
    proxy: {
      // 处理/api开头地址
      "/api": {
        target: "https://m.you.163.com", // 目标地址
        changeOrigin: true, // 是否进行跨域
        pathRewrite: {
          "^/api": "", // rewrite path
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require("postcss-px2rem")({
            remUnit: 100, // 1rem等于多少px
          }),
        ],
      },
    },
  },
};
