const fonts = [
    [import.meta.env.VITE_APP_FONT_FAMILY, '默认全局'],
    ['Microsoft YaHei', '微软雅黑'],
    // [字体名称, 显示名称, CSS文件地址]
    ['寒蝉全圆体', '寒蝉全圆体', 'ttf/hcqy/result.css'],
    ['MaokenZhuyuanTi', '猫啃珠圆体', 'ttf/mkzy/result.css']
];

export const defaultConfig = {
    text: 'XiaoLin',       // 默认文本
    watermark: 'XiaoLin', // 默认水印
    fontFamily: import.meta.env.VITE_APP_FONT_FAMILY,
    fontStyles: fonts.map(f => f[2]).filter(Boolean),
    fontOptions: fonts.map(([value, label]) => ({ value, label }))
};