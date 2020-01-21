module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,// 视口宽度 对应设计稿的宽度
      viewportHeight:667,// 视口高度 对应设计稿的高度
      unitPrecision:5, // 指定 px 转换为视窗单位
      viewportUnit:'vw',
      selectorBlackList:['ignore','tab-bar'],
      minPixelValue:1,//小于或等于‘1px'不转换为视窗单位
      mediaQuery:false,
      exclude:[/TabBar/]

    }
  }
}
