var xhr = new XMLHttpRequest();
// 指定主题颜色
var theme = "random"
var Darktheme = "random"
xhr.open('GET', '/style/material-color.json', true);

// 当请求完成时执行的回调函数
xhr.onload = function() {
    if (xhr.status === 200) {
        // 解析JSON数据
        var data = JSON.parse(xhr.responseText);
        // 判断是否为深色模式
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = Darktheme;
        }
        if (theme=="random"){
            // 随机选取一组数据
            var colorKeys = Object.keys(data);
            var randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
            var colorData = data[randomColorKey];
        } else  {
            colorData = data[theme];
        }
        

        // 获取需要的数据
        var primaryHexValue = colorData.primary;
        var secondaryHexValue = colorData.secondary;
        var cardHexValue = colorData.card;
        var bgHexValue = colorData.bg;
        var bgDarkenHexValue = colorData['bg-darken'];
        var bgsHexValue = colorData.bgs;
        var bgfontHexValue = colorData.bgfont;
        var font1HexValue = colorData.font1;
        var font2HexValue = colorData.font2;
        var bgaHexValue = colorData.bga;
        var light = colorData.light;


        // 打印获取到的数据并且文字颜色为其对应值
        console.log('primary: ' + primaryHexValue);
        console.log('secondary: ' + secondaryHexValue);
        console.log('card: ' + cardHexValue);
        console.log('bg: ' + bgHexValue);
        console.log('bgs: ' + bgsHexValue);
        console.log('bg-darken: ' + bgDarkenHexValue);
        console.log('bgfont: ' + bgfontHexValue);
        console.log('font1: ' + font1HexValue);
        console.log('font2: ' + font2HexValue);
        console.log('bga: ' + bgaHexValue);
        if (secondaryHexValue == '#000000'){
            secondaryHexValue = bgHexValue;
        }


        // 主要卡片背景色
        const elements1 = document.querySelectorAll('.bg-hex-EDEFE3');
        elements1.forEach(element => {
            element.style.backgroundColor = primaryHexValue; 
        });

        // 次要卡片背景色
        const elements2 = document.querySelectorAll('.bg-hex-FCF9EF');
        elements2.forEach(element => {
            element.style.backgroundColor = secondaryHexValue; 
        });

        // 子卡片背景色
        const elements3 = document.querySelectorAll('.bg-hex-F6F3D4');
        elements3.forEach(element => {
            element.style.backgroundColor = cardHexValue; 
        });

        // 按钮背景色
        const elements4 = document.querySelectorAll('.bg-hex-D9EAD7');
        elements4.forEach(element => {
            element.style.backgroundColor = bgHexValue; 
        });

        // 按钮外围
        const elements5 = document.querySelectorAll('.bg-hex-383934');
        elements5.forEach(element => {
            element.style.backgroundColor = bgsHexValue;
        });

        // 按钮文字
        const elements6 = document.querySelectorAll('.text-hex-363C33');
        elements6.forEach(element => {
            element.style.color = bgfontHexValue; 
        });
        // 昵称文字
        const elements7 = document.querySelectorAll('.text-hex-fff');
        elements7.forEach(element => {
            element.style.color = font2HexValue; 
        });
        // 信息文字
        const elements8 = document.querySelectorAll('.text-opacity-50');
        elements8.forEach(element => {
            const rgbaColor = font2HexValue + "80";
            element.style.color = rgbaColor; 
        });
        // 一级二级卡片展示文字
        const elements9 = document.querySelectorAll('.text-hex-000');
        elements9.forEach(element => {
            element.style.color = font1HexValue; 
        });
        // 三级卡片展示文字
        const elements10 = document.querySelectorAll('.opacity-70');
        elements10.forEach(element => {
            const rgbaColor = font1HexValue + "B3";
            element.style.color = rgbaColor; 
        });
        // 背景色
        const elements11 = document.querySelectorAll('.bg-hex-1A1D1A');
        elements11.forEach(element => {
            element.style.backgroundColor = bgaHexValue; 
        });
    }
};

// 发送请求
xhr.send();
