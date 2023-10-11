// ==UserScript==
// @name         🔥CSDN优化插件🔥
// @namespace    https://github.com/bencky1017/browserplugin/
// @version      0.2.1
// @description  ⚡️CSDN界面功能优化（去除关注展开|去除顶部右上右侧推荐广告|代码折叠展开）⚡️
// @icon         data:image/png;base64,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
// @author       BenckyC
// @match        *://*.csdn.net/*
// @match        *://huaweicloud.csdn.net/*
// @require      https://cdn.staticfile.org/jquery/3.7.1/jquery.js
// @grant        none
// @license      MIT
// @note         2023-10-12 00:26:10 0.2.1  优化代码展开后类名替换的问题
// @note         2023-10-07 10:23:55 0.2.0  添加华为云开发者联盟自动展开（无需登录可展开）
// @note         2023-09-26 15:22:41 0.1.5  修改展开代码不完全的问题（官方类名修改过）
// ==/UserScript==

(function () {
    window.onload = function () {

        //******************************* CSDN *******************************
        //去除 关注博主即可阅读全文
        $("#article_content").removeAttr("style");
        $(".hide-article-box").remove();
        //允许 未登录复制
        $('#content_views pre,#content_views pre code').css({ '-webkit-user-select': 'auto' }, { 'user-select': ':auto' });
        $('.hljs-button,.signin').attr('data-title', '可复制');
        //去除 顶部广告,右上窗口广告，右侧推荐广告
        $('.toolbar-advert').remove();
        $('.adsbygoogle').remove();
        $('#recommendAdBox').remove()
        // 展开代码框折叠
        $('.set-code-hide').removeClass('set-code-hide').addClass('set-code-show')
        $('.hide-preCode-box').remove();


        //************************* 华为云开发者联盟 *************************
        // 去除华为云开发者联盟“点击阅读全文”按钮
        $('.article-show-more').remove()
        // 取消超过高度隐藏功能，自动完全展开
        $('.user-article-hide').removeClass('user-article-hide')

    };
})();
