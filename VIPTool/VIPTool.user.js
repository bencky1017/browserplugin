// ==UserScript==
// @name         🔥VIPTool——集合VIP破解和视频加速功能于一体🔥
// @description  集合VIP破解和视频加速功能，原作者标注在对应模块的开头。
// @namespace    https://github.com/bencky1017/browserplugin/VIPTool
// @version      0.1.9
// @icon         data:image/png;base64,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
// @author       BenckyC
// @antifeature  tracking ============================================>>> 说明：自定义插件
// @include      *://v.qq.com/*
// @include      *://v.qq.com/x/page/*
// @include      *://v.qq.com/x/cover/*
// @include      *://v.qq.com/tv/*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iq.com/play/*
// @include      *://*.youku.com/v_*
// @include      *://*.mgtv.com/b/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://v.pptv.com/show/*
// @include      *://vip.pptv.com/show/*
// @include      *://www.wasu.cn/Play/show/*
// @include      *://*.le.com/ptv/vplay/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.acfun.cn/bangumi/*
// @include      *://*.1905.com/play/*
// @include      *://m.v.qq.com/x/page/*
// @include      *://m.v.qq.com/x/cover/*
// @include      *://m.v.qq.com/*
// @include      *://m.iqiyi.com/*
// @include      *://m.iqiyi.com/kszt/*
// @include      *://m.youku.com/video/*
// @include      *://m.mgtv.com/b/*
// @include      *://m.tv.sohu.com/v/*
// @include      *://m.film.sohu.com/album/*
// @include      *://m.pptv.com/show/*
// @include      *://m.bilibili.com/anime/*
// @include      *://m.bilibili.com/video/*
// @include      *://m.bilibili.com/bangumi/play/*
// @match        *://test*
// @require      https://bencky1017.github.io/browserplugin/jquery-3.5.1.min.js
// @require      http://cdn.bootcss.com/jquery/3.6.1/jquery.min.js
// @require      https://bencky1017.github.io/browserplugin/Everything-Hook.js
// @require      https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=881251
// @charset      UTF-8
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addElement
// @grant        GM_xmlhttpRequest

// @grant        GM_addStyle
// @grant        GM_openInTab
// ==/UserScript==


/**VIP工具盒子
 * Title:       VIPTool
 * Date:        2022-9-4 17:11:49
 * Author:      Bencky1017
 * View:        https://github.com/bencky1017/browserplugin/
 * Version:     v0.1.8
 * Description: 本人编写部分内容，引用其他作者的内容处均已经标注原作者信息，如有侵权问题请联系本人QQ757490662
 * Reference1:  计时器掌控者|视频广告跳过|视频广告加速器 https://greasyfork.org/zh-CN/scripts/372673
 * Reference1:  全网VIP视频免费破解【专注一个脚本只做一件事件】 https://greasyfork.org/zh-CN/scripts/438657
 */
var version='0.1.8';
$(function() {
	'use strict'

	var viptool={
		init:function(){
			var data_vip='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAABJ0AAASdAHeZh94AAAKZ2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wOC0yMFQxODowNjoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDgtMjBUMTk6NTM6NDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDgtMjBUMTk6NTM6NDErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Yjc3YWNmMTMtYWU2Ni0yMzQ5LThjMmItN2EwYmFiZDJjZjZkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzhmZTBiZDktNzdjYi00NDQwLWJkMmEtMTQ3NmM4ODY1NDExIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWIxNTVlMjgtNTkwMy00NTRjLThlZWEtZjlkOTVjOTc1NTI3Ij4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJWaVAiIHBob3Rvc2hvcDpMYXllclRleHQ9IlZpUCIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWIxNTVlMjgtNTkwMy00NTRjLThlZWEtZjlkOTVjOTc1NTI3IiBzdEV2dDp3aGVuPSIyMDIyLTA4LTIwVDE4OjA2OjEzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2JlM2Q4YjctZGExOS02NjQ1LTlkYTMtYzgxYjdhYzE1OWU3IiBzdEV2dDp3aGVuPSIyMDIyLTA4LTIwVDE5OjUxOjQ5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4ZjQwMDI3LWQ3NjItZjk0MC1iNzczLTZiOTk5MTU4MmUxMiIgc3RFdnQ6d2hlbj0iMjAyMi0wOC0yMFQxOTo1Mzo0MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNzdhY2YxMy1hZTY2LTIzNDktOGMyYi03YTBiYWJkMmNmNmQiIHN0RXZ0OndoZW49IjIwMjItMDgtMjBUMTk6NTM6NDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MThmNDAwMjctZDc2Mi1mOTQwLWI3NzMtNmI5OTkxNTgyZTEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmFiMTU1ZTI4LTU5MDMtNDU0Yy04ZWVhLWY5ZDk1Yzk3NTUyNyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFiMTU1ZTI4LTU5MDMtNDU0Yy04ZWVhLWY5ZDk1Yzk3NTUyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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';
			var data_set='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYwOTk4MTgyNjcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1MTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBlbGVtZW50LWljb25zOyBzcmM6IHVybCgiY2hyb21lLWV4dGVuc2lvbjovL21vb21iZW9kZm9tZHBqbnBvY29iZW1vaWFlbWVkbmtnL2ZvbnRzL2VsZW1lbnQtaWNvbnMud29mZiIpIGZvcm1hdCgid29mZiIpLCB1cmwoImNocm9tZS1leHRlbnNpb246Ly9tb29tYmVvZGZvbWRwam5wb2NvYmVtb2lhZW1lZG5rZy9mb250cy9lbGVtZW50LWljb25zLnR0ZiAiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBmZWVkYmFjay1pY29uZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LndvZmYyP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZjIiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF91Njl3OHloeGR1LnR0Zj90PTE2MzAwMzM3NTk5NDQiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2MC45IDM3MS4xYzMuOSAxMi4yLTIuNyAyNS42LTE0LjkgMjkuNi00Ny4xIDE1LjQtODEuMiA1OS43LTgxLjIgMTEyczM0LjEgOTYuNiA4MS4yIDExMmMxMi4yIDQgMTguOCAxNy40IDE0LjkgMjkuNy04LjQgMjYuNS0xOS4xIDUyLTMxLjggNzYuMy02LjEgMTEuNi0yMC40IDE1LjgtMzIuMiA5LjktNDQuMS0yMi4xLTk5LjEtMTUtMTM2IDIxLjdDNzI0IDc5OSA3MTYuNSA4NTQgNzM4LjQgODk4LjFjNS44IDExLjggMS41IDI2LjEtMTAuMSAzMi4xLTI0LjMgMTIuNi00OS45IDIzLjEtNzYuNSAzMS40LTEyLjMgMy44LTI1LjctMi44LTI5LjYtMTUuMUM2MDcgODk5LjMgNTYzIDg2NSA1MTAuNyA4NjQuN2MtNTIuMy0wLjMtOTYuNyAzMy41LTExMi40IDgwLjYtNC4xIDEyLjItMTcuNSAxOC43LTI5LjggMTQuOC0yNi41LTguNS01MS45LTE5LjMtNzYuMS0zMi4yLTExLjYtNi4yLTE1LjctMjAuNS05LjgtMzIuMiAyMi40LTQzLjkgMTUuNS05OS0yMC45LTEzNi4xLTM2LjQtMzctOTEuNC00NC45LTEzNS43LTIzLjItMTEuOCA1LjgtMjYuMSAxLjQtMzIuMS0xMC4zLTEyLjQtMjQuNC0yMi44LTUwLTMwLjktNzYuNi0zLjctMTIuMyAzLTI1LjcgMTUuMi0yOS41IDQ3LjMtMTQuOSA4MS44LTU4LjggODIuNC0xMTEuMSAwLjUtNTIuMy0zMy05Ni45LTc5LjktMTEyLjgtMTIuMi00LjEtMTguNi0xNy42LTE0LjYtMjkuOSA4LjctMjYuNCAxOS42LTUxLjggMzIuNS03NS45IDYuMy0xMS43IDIwLjgtMTUuNiAzMi42LTkuNSAxNi44IDguNyAzNS4zIDEzIDUzLjggMTMgMjkuNiAwIDU5LjItMTEuMSA4Mi4xLTMzLjQgMzcuMy0zNi4zIDQ1LjQtOTEuMSAyNC0xMzUuNS01LjctMTEuOC0xLjItMjYuMSAxMC41LTMyIDI0LjUtMTIuMyA1MC4yLTIyLjYgNzYuOS0zMC41IDEyLjMtMy43IDI1LjYgMy4xIDI5LjQgMTUuNCAxNC42IDQ3LjQgNTguMyA4Mi4xIDExMC42IDgzaDJjNTEuMyAwIDk1LjItMzMgMTExLjItNzkuMiA0LjItMTIuMiAxNy43LTE4LjYgMzAtMTQuNSAyNi40IDguOCA1MS43IDE5LjkgNzUuNyAzMyAxMS41IDYuMyAxNS41IDIwLjcgOS40IDMyLjMtMjIuOCA0My43LTE2LjYgOTguOSAxOS41IDEzNi40IDIzLjIgMjQuMSA1NC4xIDM2LjEgODUgMzYuMSAxNy4yIDAgMzQuNS0zLjggNTAuNC0xMS4zIDExLjgtNS42IDI2LjEtMS4yIDMyIDEwLjUgMTAuOCAyMS40IDE5LjkgNDMuOCAyNy4yIDY3ek03MDcuMSA1MTIuN2MwLTg3LjMtNTcuNS0xNjEuMS0xMzYuNi0xODUuNy0xOC4zLTUuNy0zNy43LTguNy01Ny44LTguNy0xMDcuNCAwLTE5NC41IDg3LjEtMTk0LjUgMTk0LjVzODcuMSAxOTQuNSAxOTQuNSAxOTQuNWMxOC42IDAgMzYuNy0yLjYgNTMuNy03LjUgODEuMy0yMy41IDE0MC43LTk4LjMgMTQwLjctMTg3LjF6IiBmaWxsPSIjRjNEOTI1IiBwLWlkPSI1NTE4Ij48L3BhdGg+PHBhdGggZD0iTTUxMi43IDY2Ny4zYy0yMC44IDAtNDEtNC4xLTYwLTEyLjFDMzk1LjIgNjMxIDM1OCA1NzUgMzU4IDUxMi42YzAtNjIuMyAzNy4xLTExOC4yIDk0LjQtMTQyLjUgMTkuMS04LjEgMzkuMy0xMi4yIDYwLjItMTIuMiAxMC4yIDAgMTguNSA4LjMgMTguNSAxOC41cy04LjMgMTguNS0xOC41IDE4LjVjLTE1LjkgMC0zMS4zIDMuMS00NS44IDkuMi00My43IDE4LjUtNzEuOSA2MS03MS45IDEwOC41czI4LjMgOTAuMSA3Mi4xIDEwOC41YzE0LjUgNi4xIDI5LjggOS4yIDQ1LjYgOS4yIDEwLjIgMCAxOC41IDguMyAxOC41IDE4LjVzLTguMiAxOC41LTE4LjQgMTguNXoiIGZpbGw9IiM2QTM5MDYiIHAtaWQ9IjU1MTkiPjwvcGF0aD48cGF0aCBkPSJNNTEyLjcgNzI1LjZjLTU2LjkgMC0xMTAuMy0yMi4xLTE1MC42LTYyLjQtNDAuMi00MC4yLTYyLjQtOTMuNy02Mi40LTE1MC42IDAtMTE3LjQgOTUuNS0yMTIuOSAyMTIuOS0yMTIuOSAyMS42IDAgNDIuOSAzLjIgNjMuMyA5LjYgNDIuNCAxMy4yIDgwLjUgNDAuMiAxMDcuMyA3NS45IDI3LjcgMzcgNDIuMyA4MS4xIDQyLjMgMTI3LjQgMCA0Ny4yLTE1LjEgOTEuOC00My43IDEyOS4yLTI3LjcgMzYuMi02Ni45IDYzLTExMC40IDc1LjUtMTkgNS41LTM4LjggOC4zLTU4LjcgOC4zeiBtMC0zODguOWMtOTcgMC0xNzYgNzguOS0xNzYgMTc2IDAgOTcgNzguOSAxNzYgMTc2IDE3NiAxNi41IDAgMzIuOS0yLjMgNDguNy02LjggMzYtMTAuMyA2OC40LTMyLjUgOTEuMy02Mi40IDIzLjYtMzAuOSAzNi4xLTY3LjggMzYuMS0xMDYuOCAwLTM4LjMtMTIuMS03NC43LTM1LTEwNS4zLTIyLjEtMjkuNi01My42LTUxLjktODguNy02Mi44LTE2LjktNS4yLTM0LjYtNy45LTUyLjQtNy45eiIgZmlsbD0iIzZBMzkwNiIgcC1pZD0iNTUyMCI+PC9wYXRoPjxwYXRoIGQ9Ik02NDQuNyA5ODEuMmMtMTcuOCAwLTM0LjUtMTEuMy00MC4xLTI5LTEzLjItNDEtNTEtNjguOC05NC02OS00My4xLTAuMi04MS4xIDI3LjEtOTQuOCA2OC03LjIgMjEuNy0zMSAzMy41LTUyLjkgMjYuNS0yNy4zLTguOC01My45LTIwLTc5LjEtMzMuNS0yMC4yLTEwLjctMjguMS0zNi4zLTE3LjYtNTYuOSAxOS41LTM4LjEgMTIuNC04NC4zLTE3LjctMTE0LjgtMzAtMzAuNS03Ni0zOC40LTExNC40LTE5LjYtMTAgNC45LTIxLjMgNS43LTMxLjkgMi40LTEwLjgtMy40LTE5LjYtMTAuOC0yNC43LTIwLjktMTMtMjUuNS0yMy44LTUyLjMtMzIuMS03OS42LTYuNy0yMi4xIDUuNi00NS42IDI3LjMtNTIuNSA0MS4xLTEzIDY5LTUwLjYgNjkuNS05My43IDAuNC00My0yNi42LTgxLjMtNjcuNC05NS4xLTIxLjYtNy4zLTMzLjQtMzEuMS0yNi4yLTUzLjEgOC45LTI3LjIgMjAuMy01My44IDMzLjgtNzguOSAxMS0yMC41IDM2LjItMjggNTcuMy0xNy4yIDE0IDcuMiAyOS43IDExIDQ1LjQgMTEgMjYgMCA1MC42LTEwIDY5LjItMjguMiAzMC43LTI5LjggMzguOC03NS43IDIwLjMtMTE0LjMtMTAtMjAuOS0xLjYtNDYuMiAxOC44LTU2LjUgMjUuNi0xMi45IDUyLjUtMjMuNSA3OS45LTMxLjcgMjIuMS02LjYgNDUuNiA1LjggNTIuMyAyNy43IDEyLjcgNDEuMSA1MC4xIDY5LjIgOTMuMSA3MGgxLjljNDIuMiAwIDc5LjktMjYuOSA5My44LTY2LjggNy41LTIxLjYgMzEuNC0zMy4yIDUzLjMtMjUuOSAyNy4xIDkuMSA1My42IDIwLjYgNzguNyAzNC4zIDIwLjEgMTEgMjcuNyAzNi42IDE3IDU3LjEtMTkuOCAzNy45LTEzLjIgODQuMiAxNi40IDExNSAxOC45IDE5LjYgNDQuNCAzMC41IDcxLjcgMzAuNSAxNC42IDAuMSAyOS4zLTMuMyA0Mi41LTkuNSAxMC00LjggMjEuMy01LjUgMzEuOC0yLjEgMTAuOCAzLjUgMTkuNSAxMSAyNC42IDIxLjEgMTEuMiAyMi41IDIwLjcgNDUuOSAyOC4yIDY5LjcgNyAyMi01LjEgNDUuNi0yNi44IDUyLjctNDEgMTMuNC02OC41IDUxLjMtNjguNSA5NC40IDAgNDMuMSAyNy41IDgxIDY4LjUgOTQuNCAyMS43IDcuMSAzMy43IDMwLjggMjYuOCA1Mi44LTguNiAyNy4yLTE5LjcgNTMuOS0zMy4xIDc5LjMtNS4yIDEwLTE0LjEgMTcuMy0yNC45IDIwLjYtMTAuNiAzLjItMjEuOSAyLjItMzEuOS0yLjgtMzguMy0xOS4yLTg0LjQtMTEuOS0xMTQuNyAxOC4zLTMwLjMgMzAuMi0zNy45IDc2LjMtMTguOSAxMTQuNiA1IDEwIDUuOSAyMS4zIDIuNiAzMS45LTMuNCAxMC44LTEwLjcgMTkuNi0yMC44IDI0LjgtMjUuNSAxMy4yLTUyLjIgMjQuMi03OS41IDMyLjYtNC4zIDEuMy04LjUgMS45LTEyLjcgMS45eiBtLTEzNC42LTEzNWgwLjdjNTkuMSAwLjQgMTEwLjkgMzguNCAxMjkgOTQuNyAwLjggMi41IDMuOCAzLjkgNi42IDMuMSAyNS4yLTcuOCA0OS45LTE4IDczLjUtMzAuMSAyLjYtMS4zIDMuNS00LjYgMi4xLTcuNS0yNi01Mi41LTE1LjYtMTE1LjcgMjYtMTU3LjEgNDEuNi00MS40IDEwNC44LTUxLjUgMTU3LjMtMjUuMSAyLjkgMS40IDYuMiAwLjUgNy41LTIgMTIuMy0yMy41IDIyLjYtNDguMSAzMC42LTczLjMgMC45LTIuNy0wLjUtNS44LTMuMS02LjYtNTYuMi0xOC40LTkzLjktNzAuNC05My45LTEyOS41IDAtNTkuMSAzNy44LTExMS4xIDkzLjktMTI5LjUgMi41LTAuOCAzLjktMy44IDMuMS02LjUtNy0yMS45LTE1LjctNDMuNi0yNi02NC40LTEuMy0yLjYtNC42LTMuNS03LjUtMi4xLTE4LjEgOC42LTM4LjEgMTMuMS01OCAxMy4xaC0wLjRjLTM3LjQgMC03Mi4zLTE0LjgtOTguMi00MS44LTQwLjctNDIuMy00OS43LTEwNS43LTIyLjUtMTU3LjcgMS41LTIuOCAwLjYtNi4yLTEuOS03LjYtMjMuMi0xMi43LTQ3LjctMjMuMy03Mi43LTMxLjctMi43LTAuOS01LjggMC41LTYuNyAzLTE5IDU0LjgtNzAuNyA5MS42LTEyOC42IDkxLjZoLTIuM2MtNTkuMS0xLTExMC41LTM5LjYtMTI3LjktOTYtMC44LTIuNS0zLjgtNC02LjUtMy4yLTI1LjMgNy41LTUwLjIgMTcuNC03My44IDI5LjMtMi42IDEuMy0zLjUgNC42LTIuMiA3LjUgMjUuNCA1Mi45IDE0LjMgMTE1LjktMjcuOCAxNTYuOC0yNS42IDI0LjktNTkuMyAzOC43LTk1IDM4LjctMjEuNiAwLTQzLjEtNS4yLTYyLjMtMTUuMS0yLjYtMS40LTYuMy0xLTcuOSAxLjgtMTIuNSAyMy4yLTIzIDQ3LjctMzEuMiA3Mi45LTAuOSAyLjcgMC41IDUuOCAzIDYuNiA1NS45IDE5IDkzLjEgNzEuNSA5Mi41IDEzMC41LTAuNyA1OS4xLTM5IDExMC44LTk1LjMgMTI4LjUtMi41IDAuOC00IDMuOC0zLjEgNi42IDcuNyAyNS4yIDE3LjYgNTAgMjkuNyA3My42IDEuMyAyLjYgNC42IDMuNSA3LjUgMi4xIDUyLjctMjUuNyAxMTUuOC0xNC45IDE1Ni45IDI2LjkgNDAuOCA0MS43IDUwLjUgMTA1IDIzLjggMTU3LjMtMS41IDIuOS0wLjYgNi4yIDIgNy42IDIzLjMgMTIuNCA0Ny45IDIyLjggNzMuMSAzMC45IDIuNyAwLjkgNS44LTAuNSA2LjYtMyAxOC43LTU1LjkgNzAuNi05My4zIDEyOS40LTkzLjN6IiBmaWxsPSIjNkEzOTA2IiBwLWlkPSI1NTIxIj48L3BhdGg+PC9zdmc+';
			var data_open='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHQ9IjE2NjE4Nzg2MjAzMjUiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CiAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9IiMxNmM2MGMiIC8+Cjwvc3ZnPg==';
			var data_close='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHQ9IjE2NjE4Nzg2MjAzMjUiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CiAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9IiNlODEyMjQiIC8+Cjwvc3ZnPg==';
			var style=':root{--tool_w:30px;--tool_h:99px;--tool_left:00px;--tool_top:250px;--box_size:30px;--span_size:20px;--vip_bgsize:30px;}#viptool_container{width:var(--tool_w);height:var(--tool_h);position:fixed;left:var(--tool_left);top:var(--tool_top);display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;z-index:99999;}.viptool_item{display:flex;flex-direction:column;justify-content:center;align-items:center;width:var(--box_size);height:var(--box_size);border-radius:3px;background-color:#a0cdff;margin-bottom:3px;}#viptool_vip{background-image:url('+data_vip+');background-repeat:no-repeat;background-size:var(--vip_bgsize);background-position:50% 50%;z-index:99999;}#viptool_vip:hover #viptool_viplist{display:initial;}#viptool_viplist{position:absolute;border-radius:5px;left:30px;top:0px;text-align:center;background-color:#a0cdff;border:1px solid #333;padding:0px 0px 8px 0px;width:380px;max-height:300px;overflow-y:auto;cursor:default;z-index:99999;display:none;}#viptool_viplist ul{padding-left:20px;}.viptool_viplist_li,#viptool_viplist li{border-radius:2px;font-size:12px;color:#000;text-align:center;width:calc(30% - 12px);line-height:20px;float:left;border:1px solid #808080;padding:2px 4px;margin:4px 4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;cursor:pointer;}#viptool_viplist li:hover{border:1px solid #1c84c6;color:#1c84c6;}.viplist_li_selected{border:1px solid #1c84c6;color:#0068CD;background-color:#fff;}#viptool_viplist::-webkit-scrollbar{width:10px;height:10px;display:static;}#viptool_viplist::-webkit-scrollbar-track{border-radius:5px;-webkit-box-shadow:inset 0 0 12px rgba(0,0,0,1);background:linear-gradient(to top,#FF567F,#FBEB91,#2EC2FF,#8375FF);display:none;}#viptool_viplist::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1);background:linear-gradient(to top,#FF567F,#FBEB91,#2EC2FF,#8375FF);}#viptool_viplist::-webkit-scrollbar-track:horizontal{border-radius:5px;-webkit-box-shadow:inset 0 0 12px rgba(0,0,0,1);background:linear-gradient(to left,#FF567F,#FBEB91,#2EC2FF,#8375FF);display:none;}#viptool_viplist::-webkit-scrollbar-thumb:horizontal{border-radius:5px;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1);background:linear-gradient(to left,#FF567F,#FBEB91,#2EC2FF,#8375FF);}#viptool_viplist::-webkit-scrollbar-button{background-color:#343d46;display:none;}#viptool_viplist::-webkit-scrollbar-corner{background:#000;}#viptool_viplist::-webkit-scrollbar-track-piece{background-color:#343d46;display:none;}#viptool_set>span{position:fixed;width:var(--span_size);height:var(--span_size);background-image:url('+data_set+');background-repeat:no-repeat;background-size:contain;transition:0.2s;}#viptool_set:hover .viptool_set_span{transform:rotate(90deg) scale(1.2);-ms-transform:rotate(90deg) scale(1.2);-webkit-transform:rotate(90deg) scale(1.2);transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transition:0.5s;}#viptool_swt>span{position:fixed;width:var(--span_size);height:var(--span_size);background-repeat:no-repeat;background-size:contain;transition:0.2s;}#viptool_swt:hover .viptool_swt_span{transform:rotate(90deg) scale(1.2);-ms-transform:rotate(90deg) scale(1.2);-webkit-transform:rotate(90deg) scale(1.2);transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transition:0.2s;}.viptool_open{background-image:url('+data_open+');}.viptool_close{background-image:url('+data_close+');}.displaynone{display:none;}#viptool_swt:hover span{background-origin:50% 50%;transform:scale(1.2);-ms-transform:scale(1.2);-webkit-transform:scale(1.2);transition:0.2s;}#viptool_setlist{position:relative;top:0px;left:calc(var(--box_size)*0);width:30px;display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:3px;transition:0.2s;z-index:-1;opacity:0;}.viptool_set_item{position:relative;left:0px;top:0px;display:flex;justify-content:center;align-items:center;width:var(--box_size);height:var(--box_size);background-color:#a0caff;transform:scale(0.1);border-radius:3px;margin:0px 0px 0px 0px;transition:0.2s;}.viptool_set_item span{transition:0.1s;}.viptool_set_item:hover .viptool_item_span{transform:scale(1.2);transition:0.3s;}.viptool_set_item:nth-child(1){position:relative;left:calc(var(--box_size) / 2*3);}.viptool_set_item:nth-child(2){position:relative;left:calc(var(--box_size) / 2*1.5);}.viptool_set_item:nth-child(3){position:relative;left:calc(var(--box_size) / 2*0);}.viptool_set_item:nth-child(4){position:relative;left:calc(var(--box_size) / 2*-1.5);}.viptool_set_item:nth-child(5){position:relative;left:calc(var(--box_size) / 2*-3);}#viptool_set:hover #viptool_setlist{position:relative;margin:0px 0px 0px 15px;left:calc(var(--box_size) * 3);width:calc(var(--box_size) * 5 + 3px*5);transition:0.4s;opacity:1;}#viptool_set:hover .viptool_set_item{margin:0px 0px 0px 3px;transition:0.4s;}#viptool_set:hover #viptool_setlist>.viptool_set_item:nth-child(1){left:calc(var(--box_size) * 0);transform:scale(1);transition:0.3s;}#viptool_set:hover #viptool_setlist>.viptool_set_item:nth-child(2){left:calc(var(--box_size) * 0);transform:scale(1);transition:0.23s;}#viptool_set:hover #viptool_setlist>.viptool_set_item:nth-child(3){left:calc(var(--box_size) * 0);transform:scale(1);transition:0.16s;}#viptool_set:hover #viptool_setlist>.viptool_set_item:nth-child(4){left:calc(var(--box_size) * 0);transform:scale(1);transition:0.1s;}#viptool_set:hover #viptool_setlist>.viptool_set_item:nth-child(5){left:calc(var(--box_size) * 0);transform:scale(1);transition:0.05s;}';
			// var style='';
			// var html=``;
			var html=`
				<div id="viptool_container">
					<div id="viptool_vip" class="viptool_item" title="选择解析源|按住移动">
						<div id="viptool_viplist">
							<h3 style="color:#1c84c6; font-weight: bold; font-size: 16px; padding:10px 0px;">[播放列表]</h3>
							<ul></ul>
							<div style="text-align:left;color:#0078d7;font-size:12px;padding:0px 10px;margin-top:10px;">
								<b>自动解析功能说明：</b>
								<br>1、自动解析功能默认关闭
								<br>2、开启自动解析，脚本将根据当前选中解析源自动解析视频
								<br>3、没有选中解析源将随机选取一个
								<br>4、若某网站有会员，可以关闭自动解析功能
							</div>
						</div>
					</div>
					<div id="viptool_set" class="viptool_item" title="设置|广告加速">
						<span class="viptool_set_span"></span>
						<div id="viptool_setlist">
							<div class="viptool_set_item time_x2" title="+2"><span class="viptool_item_span">▶️</span></div>
							<div class="viptool_set_item time_x_2" title="-2"><span class="viptool_item_span">◀️</span></div>
							<div class="viptool_set_item time_xx2" title="×2"><span class="viptool_item_span">⏩</span></div>
							<div class="viptool_set_item time_xx_2" title="/2"><span class="viptool_item_span">⏪</span></div>
							<div class="viptool_set_item time_reset" title="恢复正常"><span class="viptool_item_span">🔄</span></div>
						</div>
					</div>
					<div id="viptool_swt" class="viptool_item" title="当前关|插件开关" data-switch="🔴🟢">
						<span class="viptool_open viptool_swt_span   "></span>
						<span class="viptool_close viptool_swt_span displaynone"></span>
					</div>
				</div>
			`;
			var stylenode = document.createElement('style');
			stylenode.setAttribute("type", "text/css");
			if (stylenode.styleSheet) {// IE
				stylenode.styleSheet.cssText = style;
			}else {// w3c
				var cssText = document.createTextNode(style);
				stylenode.appendChild(cssText);
			}
			var node = document.createElement('div');
			node.innerHTML = html;
			document.head.appendChild(stylenode);
			document.body.appendChild(node);
			// $(document.head).append(stylenode);
			// $(document.body).append(node);
		}(),
		switch:function(){
			$('#viptool_swt').on('click',function(){
				if (!!GM_getValue('auto_player_key', null)) {
					$(this).attr('title','当前关|插件开关')
					$(this).find('span').eq(0).addClass('displaynone');
					$(this).find('span').eq(1).removeClass('displaynone');
				} else {
					$(this).attr('title','当前开|插件开关');
					$(this).find('span').eq(0).removeClass('displaynone');
					$(this).find('span').eq(1).addClass('displaynone');
				}
				// $(this).find('span').toggleClass('displaynone');
				// $(this).attr('title')=='当前开|插件开关'?
				// $(this).attr('title','当前关|插件开关'):
				// $(this).attr('title','当前开|插件开关')

			});
		}(),
		drag:function(){
			var bool_choose=false,bool_move=false;//后续使用
			var range={x: 0,y: 0};			//鼠标元素偏移量
			var page={x: 0,y: 0};			//鼠标在页面的坐标
			var lastPos = {x: 0, y: 0};		//拖拽对象的四个坐标
			var initPos = {x: 0, y: 0};		//记录拖拽元素左上角坐标
			var domSize = {w: 0,h: 0};		//拖拽元素数据
			var scrollSize={w:$(window).scrollLeft(),h:$(window).scrollTop()};	// 获取滚动距离
			var winSize={w:$(window).width(),h:$(window).height()};	// 获取浏览器窗口大小
			var _this=null;// 元素dom

			$('#viptool_container').on('contextmenu',function(event){
				event.preventDefault();//取消默认程序
			});
			$('#viptool_vip').on('mousedown',function(event){
				bool_choose=true;
				$('#viptool_vip').css({'cursor':'crosshair'});
				_this=$(this).parent();

				// 鼠标坐标
				page.x=event.pageX;
				page.y=event.pageY;

				// 记录拖拽元素初始位置
				initPos.x=_this.offset().left;
				initPos.y=_this.offset().top;

				// 鼠标元素相对偏移量
				range.x = page.x - initPos.x;
				range.y = page.y - initPos.y;

				// 拖拽元素赋值
				domSize.w=_this.width();
				domSize.h=_this.height();
			});
			// $('#viptool_vip').on('mouseup mouseout', function (event) {
			$(document).on('mouseup', function (event) {
				$('#viptool_vip').css({'cursor':'pointer'});
				if (!bool_choose) {return false;}
				if (!bool_move) {bool_choose = false;return false;}

				bool_move = false;bool_choose = false;
			});
			// $('#viptool_vip').on('mousemove', function (event) {
			$(document).on('mousemove', function (event) {
				if (!bool_choose) {return false;}
				bool_move = true;

				_this.css({left: lastPos.x + 'px', top: lastPos.y + 'px'});
				// 鼠标坐标
				page.x=event.pageX;
				page.y=event.pageY;

				/*检测滚动距离*/
				scrollSize={w:$(window).scrollLeft(),h:$(window).scrollTop()};
				/*检测屏幕变化*/
				winSize={w:$(window).width(),h:$(window).height()};

				var pos={
					x:page.x - range.x - scrollSize.w,		//定位x
					y:page.y - range.y - scrollSize.h		//定位y
				}

				lastPos.x = pos.x<0?0:pos.x + domSize.w>winSize.w?winSize.w - domSize.w:pos.x;
				lastPos.y = pos.y<0?0:pos.y + domSize.h>winSize.h?winSize.h - domSize.h:pos.y;

				// 拖拽元素随鼠标移动
				_this.css({left: lastPos.x + 'px', top: lastPos.y + 'px'});
			});
		}(),
		resetPosition:function(){
			document.onkeydown=function shortcutkey(event){
				switch (event.keyCode) {
					// Ctrl键
					case 17:
						if (event.altKey) {
							let vtid=document.getElementById('viptool_container').style;
							vtid.left='0';
							vtid.top='250px';
							console.error('[ResetPosition] Current: Alt + Ctrl, please press Ctrl + Alt');
						}
						break;
					default:;
				}
				if (event.ctrlKey && event.keyCode == 18){//Esc 27 | Ctrl 17 | Alt 18
					event.preventDefault();
					let vtid=document.getElementById('viptool_container').style;
					vtid.left='40%';
					vtid.top='40%';
					console.log('[ResetPosition] Reset Success! left:'+vtid.left+';top:'+vtid.top);
				}
			};
		}(),
		/**全网VIP视频免费破解，引用w__yi方法
		 * 修改了相关的界面样式
		 * 
		 * 原作者信息如下
		 * ---------------------------
		 * name: 全网VIP视频免费破解【专注一个脚本只做一件事件】长期更新，放心使用
		 * namespace: http://tampermonkey.net/
		 * author: w__yi
		 * version: 1.3.7
		 * description: 全网VIP视频免费破解【专注一个脚本只做一件事件】长期更新，放心使用。支持：腾讯、爱奇艺、优酷、芒果、Bilibili、pptv、乐视等其它网站；
		 * view: https://greasyfork.org/zh-CN/scripts/438657
		 * license: GPL License
		 * ---------------------------
		 */
		vipListInit:function(){
			// 初始常量参数
			var _CONFIG_ = {
				// 当前播放器节点
				currentPlayerNode: null,
				// 解析盒子元素
				vipBoxId: 'viptool_viplist',
				// 自动解析开关
				flag: "flag_vip",
				// 选中样式的类名
				selectedStyle: "viplist_li_selected",
				// 自动播放开关
				autoPlayerKey: "auto_player_key",// + window.location.host,
				// 自动播放序列
				autoPlayerVal: "auto_player_value_" + window.location.host,
				// 解析源列表
				videoList:[
					// {name:"xixicai",	url:"https://laisoyiba.com/mov/s/?sv=3&url="},
					{name:"天翼",		url:"https://jsap.attakids.com/?url="},
					{name:"综合/B站2",	url:"https://jx.jsonplayer.com/player/?url="},
					{name:"综合/B站",	url:"https://jx.bozrc.com:4433/player/?url="},
					{name:"m1907",		url:"https://z1.m1907.cn/?jx="},
					{name:"Player-JY",	url:"https://jx.playerjy.com/?url="},
					{name:"虾米",		url:"https://jx.xmflv.com/?url="},
					{name:"OK",			url:"https://api.okjx.cc:3389/jx.php?url="},
					{name:"OK解析",		url:"https://okjx.cc/?url="},
					{name:"乐多",		url:"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
					{name:"猪蹄",		url:"https://jx.iztyy.com/Bei/?url="},
					{name:"yparse",		url:"https://jx.yparse.com/index.php?url="},
					{name:"MAO",		url:"https://www.mtosz.com/m3u8.php?url="},
					{name:"诺讯",		url:"https://www.nxflv.com/?url="},
					{name:"M3U8TV",		url:"https://jx.m3u8.tv/jiexi/?url="},
					{name:"爱豆",		url:"https://jx.aidouer.net/?url="},
					{name:"夜幕",		url:"https://www.yemu.xyz/?url="},
					{name:"BL",			url:"https://svip.bljiex.cc/?v="},
					{name:"七彩",		url:"https://www.xymav.com/?url="},
					{name:"人人迷blbo",	url:"https://jx.blbo.cc:4433/?url="},
					{name:"七哥",		url:"https://jx.mmkv.cn/tv.php?url="},
					{name:"铭人云",		url:"https://parse.123mingren.com/?url="},
					{name:"江湖云",		url:"https://api.jhdyw.vip/?url="},
					{name:"4kdv",		url:"https://jx.4kdv.com/?url="},
					{name:"1717",		url:"https://ckmov.ccyjjd.com/ckmov/?url="},
					{name:"8090",		url:"https://www.8090g.cn/?url="},
					{name:"qianqi",		url:"https://api.qianqi.net/vip/?url="},
					{name:"laobandq",	url:"https://vip.laobandq.com/jiexi.php?url="},
					{name:"playm3u8",	url:"https://www.playm3u8.cn/jiexi.php?url="},
					{name:"无名小站",	url:"https://www.administratorw.com/video.php?url="},
					{name:"CK",			url:"https://www.ckplayer.vip/jiexi/?url="},
					{name:"盖世",		url:"https://www.gai4.com/?url="},
					{name:"盘古",		url:"https://go.yh0523.cn/y.cy?url="}
				],
				// 播放器列表
				playerList: [
					{host: "v.qq.com",			container: "#player-container,.container-player",	name: "Default",displayNodes: ["#mask_layer",".mod_vip_popup","#mask_layer",".panel-tip-pay"]},
					{host: "m.v.qq.com",		container: ".mod_player",							name: "Default",displayNodes: [".mod_vip_popup","[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]","div[dt-eid=open_app_bottom]","div.video_function.video_function_new","a[open-app]","section.mod_source","section.mod_box.mod_sideslip_h.mod_multi_figures_h,section.mod_sideslip_privileges,section.mod_game_rec"]},
					{host: "w.mgtv.com",		container: "#mgtv-player-wrap",						name: "Default",displayNodes: []},
					{host: "www.mgtv.com",		container: "#mgtv-player-wrap",						name: "Default",displayNodes: []},
					{host: "m.mgtv.com",		container: ".video-area",							name: "Default",displayNodes: ["div.adFixedContain,div.ad-banner,div.m-list-graphicxcy.fstp-mark","div[class^=mg-app],div#comment-id.video-comment div.ft,div.bd.clearfix,div.v-follower-info","div.ht.mgui-btn.mgui-btn-nowelt","div.personal","div[data-v-41c9a64e]"]},
					{host: "www.bilibili.com",	container: "#player_module,#bilibiliPlayer",		name: "Default",displayNodes: []},
					{host: "m.bilibili.com",	container: ".player-wrapper",						name: "Default",displayNodes: []},
					{host: "www.iqiyi.com",		container: "#flashbox",								name: "Default",displayNodes: ["#playerPopup","div[class^=qy-header-login-pop]"]},
					{host: "m.iqiyi.com",		container: ".m-video-player-wrap",					name: "Default",displayNodes: ["div.m-iqyGuide-layer","a[down-app-android-url]","[name=m-extendBar]","[class*=ChannelHomeBanner]","section.m-hotWords-bottom"]},
					{host: "www.iq.com",		container: ".intl-video-wrap",						name: "Default",displayNodes: []},
					{host: "v.youku.com",		container: "#player",								name: "Default",displayNodes: ["#iframaWrapper"]},
					{host: "m.youku.com",		container: "#player,.h5-detail-player",				name: "Default",displayNodes: []},
					{host: "tv.sohu.com",		container: "#player",								name: "Default",displayNodes: []},
					{host: "film.sohu.com",		container: "#playerWrap",							name: "Default",displayNodes: []},
					{host: "www.le.com",		container: "#le_playbox",							name: "Default",displayNodes: []},
					{host: "video.tudou.com",	container: ".td-playbox",							name: "Default",displayNodes: []},
					{host: "v.pptv.com",		container: "#pptv_playpage_box",					name: "Default",displayNodes: []},
					{host: "vip.pptv.com",		container: ".w-video",								name: "Default",displayNodes: []},
					{host: "www.wasu.cn",		container: "#flashContent",							name: "Default",displayNodes: []},
					{host: "www.acfun.cn",		container: "#player",								name: "Default",displayNodes: []},
					{host: "vip.1905.com",		container: "#player",								name: "Default",displayNodes: []},
				]
			};

			// 列表数据添加
			var dataInit=(function(){
				for (var i = 0; i < _CONFIG_.videoList.length; i++) {
					// 清除悬浮效果
					let el_cls='<div style="clear:both;"></div>';
					let el_li='<li class="viptool_viplist_li" title="'+
						_CONFIG_.videoList[i].name+'" data-index="'+i+'">'+
						_CONFIG_.videoList[i].name+'</li>';
					$('#viptool_viplist ul').append(el_li);
					i==_CONFIG_.videoList.length-1?$('#viptool_viplist ul').append(el_cls):i;
				}
			})();


			// 源码+个人修改
			// util模块修改:将util的const类型改为var 类型
			var util = (function () {

				function findTargetElement(targetContainer) {
					const body = window.document;
					let tabContainer;
					let tryTime = 0;
					const maxTryTime = 120;
					return new Promise((resolve, reject) => {
						let interval = setInterval(() => {
							tabContainer = body.querySelector(targetContainer);
							if (tabContainer) {
								clearInterval(interval);
								resolve(tabContainer);
							}
							if ((++tryTime) === maxTryTime) {
								clearInterval(interval);
								reject();
							}
						}, 500);
					});
				}

				function urlChangeReload() {
					const oldHref = window.location.href;
					let interval = setInterval(() => {
						let newHref = window.location.href;
						if (oldHref !== newHref) {
							clearInterval(interval);
							window.location.reload();
						}
					}, 500);
				}

				function reomveVideo() {
					setInterval(() => {
						for (let video of document.getElementsByTagName("video")) {
							if (video.src) {
								video.removeAttribute("src");
								video.muted = true;
								video.load();
								video.pause();
							}
						}
					}, 500);
				}

				function syncRequest(option) {
					return new Promise((resolve, reject) => {
						option.onload = (res) => {
							resolve(res);
						};
						option.onerror = (err) => {
							reject(err);
						};
						GM_xmlhttpRequest(option);
					});
				}

				return {
					req: (option) => syncRequest(option),
					findTargetEle: (targetEle) => findTargetElement(targetEle),
					urlChangeReload: () => urlChangeReload(),
					reomveVideo: () => reomveVideo()
				}
			})();

			// 解析模块
			var parseVip = (function(){

				// 盒子元素
				var vipBox = $(`#${_CONFIG_.vipBoxId}`);


				class BaseConsumer{
					// 构造函数
					constructor() {
						this.parse = () => {
							util.findTargetEle('body')
								.then((container) => this.preHandle(container))
								.then((container) => this.generateElement(container))
								.then((container) => this.bindEvent(container))
								.then((container) => this.autoPlay(container))
								.then((container) => this.postHandle(container));
						}
					}

					// 预处理
					preHandle(container) {
						_CONFIG_.currentPlayerNode.displayNodes.forEach((item, index) => {
							util.findTargetEle(item)
								.then((obj) => obj.style.display = 'none')
								.catch(e => console.warn("不存在元素", e));
						});
						return new Promise((resolve, reject) => resolve(container));
					}

					// 创建元素
					generateElement(container) {
						let autoPlay = !!GM_getValue(_CONFIG_.autoPlayerKey, null) ? "开" : "关";
						if (autoPlay=='关') {
							$('#viptool_swt').attr('title','当前关|插件开关')
							$('#viptool_swt').find('span').eq(0).addClass('displaynone');
							$('#viptool_swt').find('span').eq(1).removeClass('displaynone');
						}else{
							$('#viptool_swt').attr('title','当前开|插件开关');
							$('#viptool_swt').find('span').eq(0).removeClass('displaynone');
							$('#viptool_swt').find('span').eq(1).addClass('displaynone');
						}
						return new Promise((resolve, reject) => resolve(container));
					}

					// 绑定事件
					bindEvent(container) {
						let _this = this;
						vipBox.find("li").each((liIndex, item) => {
							item.addEventListener("click", () => {
								const index = parseInt($(item).attr("data-index"));
								GM_setValue(_CONFIG_.autoPlayerVal, index);
								GM_setValue(_CONFIG_.flag, "true");
								_this.showPlayerWindow(_CONFIG_.videoList[index]);
								vipBox.find("li").removeClass(_CONFIG_.selectedStyle);
								$(item).addClass(_CONFIG_.selectedStyle);
							});
						});
						return new Promise((resolve, reject) => resolve(container));
					}

					// 自动播放
					autoPlay(container) {
						vipBox.parent().siblings('#viptool_swt').on("click", function () {
							if (!!GM_getValue(_CONFIG_.autoPlayerKey, null)) {
								GM_setValue(_CONFIG_.autoPlayerKey, null);
								// $(this).attr('title','当前关|插件开关')
								// $(this).find('span').eq(0).addClass('displaynone');
								// $(this).find('span').eq(1).removeClass('displaynone');
							} else {
								GM_setValue(_CONFIG_.autoPlayerKey, "true");
								// $(this).attr('title','当前开|插件开关');
								// $(this).find('span').eq(0).removeClass('displaynone');
								// $(this).find('span').eq(1).addClass('displaynone');
							}
							setTimeout(function () {
								window.location.reload();
							}, 200);
						});

						if (!!GM_getValue(_CONFIG_.autoPlayerKey, null)) {
							// 调用播放源
							this.selectPlayer();
						}
						return new Promise((resolve, reject) => resolve(container));
					}

					// 选择播放源
					selectPlayer() {
						let index = GM_getValue(_CONFIG_.autoPlayerVal, 2);
						let autoObj = _CONFIG_.videoList[index];
						let _th = this;
						setTimeout(function () {
							_th.showPlayerWindow(autoObj);
							vipBox.find(`li`).removeClass(_CONFIG_.selectedStyle);
							vipBox.find(`li[title="${autoObj.name}"]`).addClass(_CONFIG_.selectedStyle);
						}, 1500);
					}

					// 显示播放窗口
					showPlayerWindow(videoObj) {
						util.findTargetEle(_CONFIG_.currentPlayerNode.container)
							.then((container) => {
								let url = videoObj.url + window.location.href;
								$(container).empty();
								util.reomveVideo();
								let iframeDivCss = "width:100%;height:100%;z-index:99999;";
								$(container).append(`<div style="${iframeDivCss}"><iframe id="iframe-player-c913f9" src="${url}" style="border:none;" allowfullscreen="true" width="100%" height="100%"></iframe></div>`);
							});
					}

					// 请求处理
					postHandle(container) {
						if (!!GM_getValue(_CONFIG_.autoPlayerKey, null)) {
							util.urlChangeReload();
						} else {
							let oldHref = window.location.href;
							let interval = setInterval(() => {
								let newHref = window.location.href;
								if (oldHref !== newHref) {
									oldHref = newHref;
									if (!!GM_getValue(_CONFIG_.flag, null)){
										clearInterval(interval);
										window.location.reload();
									}
								}
							}, 1000);
						}
					}

				}

				// 引用类
				class DefaultConsumer extends BaseConsumer {
				}

				return {
					start: () => {
						GM_setValue(_CONFIG_.flag, null);
						let mallCase = 'Default';
						let playerNode = _CONFIG_.playerList.filter(value => value.host === window.location.host);
						if (playerNode === null || playerNode.length <= 0) {
							console.warn(window.location.host + "该网站暂不支持，请联系作者，作者将会第一时间处理（注意：请记得提供有问题的网址）");
							return;
						}
						_CONFIG_.currentPlayerNode = playerNode[0];
						mallCase = _CONFIG_.currentPlayerNode.name;
						const targetConsumer = eval(`new ${mallCase}Consumer`);
						targetConsumer.parse();
					}
				}
			})();

			(function () {
				parseVip.start();
			})();
		}(),
		/**计时器掌控者设置，引用苍石居的劫持方法
		 * 修改了UI设置部分及快捷键操作内容
		 * 修改部分： applyUI registerShortcutKeys timerHooker.init timerHooker.change
		 * 原作者信息如下
		 * ---------------------------
		 * Time: 2017/11/20 19:28.
		 * Author: Cangshi苍石居
		 * View: http://palerock.cn
		 * require: https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=881251
		 * license: GPL-3.0-or-later
		 * ---------------------------
		 */
		timeController:function(){

			// GM中添加元素标签
			GM_addElement('script',{
				type:"text/javascript",
				src:"https://bencky1017.github.io/browserplugin/Everything-Hook.js"
				// src:"https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=881251"
			});

			window.isDOMLoaded = false;
			window.isDOMRendered = false;

			document.addEventListener('readystatechange', function () {
				if (document.readyState === "interactive" || document.readyState === "complete") {
					window.isDOMLoaded = true;
				}
			});

			~function (global) {
				var workerURLs = [];
				var extraElements = [];
				var suppressEvents = {};

				var helper = function (eHookContext, timerContext, util) {
					return {
						applyUI: function () {
							var  style='';
							// var displayNum = (1 / timerContext._percentage).toFixed(2);

							var clickMapper = {
								// '_item-input': function () {
								// 	changeTime();
								// },
								'time_x2': function () {
									changeTime(2, 0, true);
								},
								'time_x_2': function () {
									changeTime(-2, 0, true);
								},
								'time_xx2': function () {
									changeTime(0, 2);
								},
								'time_xx_2': function () {
									changeTime(0, -2);
								},
								'time_reset': function () {
									changeTime(0, 0, false, true);
								}
							};

							Object.keys(clickMapper).forEach(function (className) {
								var exec = clickMapper[className];
								var targetEle = document.getElementsByClassName(className)[0];
								if (targetEle) {
									targetEle.onclick = exec;
								}
							});

							if (!global.isDOMLoaded) {
								document.addEventListener('readystatechange', function () {
									if ((document.readyState === "interactive" || document.readyState === "complete") && !global.isDOMRendered) {
										// document.head.appendChild(stylenode);
										// document.body.appendChild(node);
										global.isDOMRendered = true;
										console.log('Time Hooker Works!');
									}
								});
							} else {
								// document.head.appendChild(stylenode);
								// document.body.appendChild(node);
								global.isDOMRendered = true;
								console.log('Time Hooker Works!');
							}
						},
						applyGlobalAction: function (timer) {
							// 界面半圆按钮点击的方法
							timer.changeTime = function (anum, cnum, isa, isr) {
								if (isr) {
									global.timer.change(1);
									console.log(0);
									return;
								}
								if (!global.timer) {
									return;
								}
								var result;
								if (!anum && !cnum) {
									var t = prompt("输入欲改变计时器变化倍率（当前：" + 1 / timerContext._percentage + "）");
									if (t == null) {
										return;
									}
									if (isNaN(parseFloat(t))) {
										alert("请输入正确的数字");
										timer.changeTime();
										return;
									}
									if (parseFloat(t) <= 0) {
										alert("倍率不能小于等于0");
										timer.changeTime();
										return;
									}
									result = 1 / parseFloat(t);
								} else {
									if (isa && anum) {
										if (1 / timerContext._percentage <= 1 && anum < 0) {
											return;
										}
										result = 1 / (1 / timerContext._percentage + anum);
									} else {
										if (cnum <= 0) {
											cnum = 1 / -cnum
										}
										result = 1 / ((1 / timerContext._percentage) * cnum);
									}
								}
								timer.change(result);
								console.log(1 / timerContext._percentage);
							};
							global.changeTime = timer.changeTime;
						},
						applyHooking: function () {
							var _this = this;
							// 劫持循环计时器
							eHookContext.hookReplace(window, 'setInterval', function (setInterval) {
								return _this.getHookedTimerFunction('interval', setInterval);
							});
							// 劫持单次计时
							eHookContext.hookReplace(window, 'setTimeout', function (setTimeout) {
								return _this.getHookedTimerFunction('timeout', setTimeout)
							});
							// 劫持循环计时器的清除方法
							eHookContext.hookBefore(window, 'clearInterval', function (method, args) {
								_this.redirectNewestId(args);
							});
							// 劫持循环计时器的清除方法
							eHookContext.hookBefore(window, 'clearTimeout', function (method, args) {
								_this.redirectNewestId(args);
							});
							var newFunc = this.getHookedDateConstructor();
							eHookContext.hookClass(window, 'Date', newFunc, '_innerDate', ['now']);
							Date.now = function () {
								return new Date().getTime();
							};
							eHookContext.hookedToString(timerContext._Date.now, Date.now);
							var objToString = Object.prototype.toString;

							Object.prototype.toString = function toString() {
								'use strict';
								if (this instanceof timerContext._mDate) {
									return '[object Date]';
								} else {
									return objToString.call(this);
								}
							};

							eHookContext.hookedToString(objToString, Object.prototype.toString);
							eHookContext.hookedToString(timerContext._setInterval, setInterval);
							eHookContext.hookedToString(timerContext._setTimeout, setTimeout);
							eHookContext.hookedToString(timerContext._clearInterval, clearInterval);
							timerContext._mDate = window.Date;
							this.hookShadowRoot();
						},
						getHookedDateConstructor: function () {
							return function () {
								if (arguments.length === 1) {
									Object.defineProperty(this, '_innerDate', {
										configurable: false,
										enumerable: false,
										value: new timerContext._Date(arguments[0]),
										writable: false
									});
									return;
								} else if (arguments.length > 1) {
									var definedValue;
									switch (arguments.length) {
										case 2:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1]
											);
											break;
										case 3:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1],
												arguments[2],
											);
											break;
										case 4:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1],
												arguments[2],
												arguments[3],
											);
											break;
										case 5:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1],
												arguments[2],
												arguments[3],
												arguments[4]
											);
											break;
										case 6:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1],
												arguments[2],
												arguments[3],
												arguments[4],
												arguments[5]
											);
											break;
										default:
										case 7:
											definedValue = new timerContext._Date(
												arguments[0],
												arguments[1],
												arguments[2],
												arguments[3],
												arguments[4],
												arguments[5],
												arguments[6]
											);
											break;
									}

									Object.defineProperty(this, '_innerDate', {
										configurable: false,
										enumerable: false,
										value: definedValue,
										writable: false
									});
									return;
								}
								var now = timerContext._Date.now();
								var passTime = now - timerContext.__lastDatetime;
								var hookPassTime = passTime * (1 / timerContext._percentage);
								// console.log(__this.__lastDatetime + hookPassTime, now,__this.__lastDatetime + hookPassTime - now);
								Object.defineProperty(this, '_innerDate', {
									configurable: false,
									enumerable: false,
									value: new timerContext._Date(timerContext.__lastMDatetime + hookPassTime),
									writable: false
								});
							};
						},
						getHookedTimerFunction: function (type, timer) {
							var property = '_' + type + 'Ids';
							return function () {
								var uniqueId = timerContext.genUniqueId();
								var callback = arguments[0];
								if (typeof callback === 'string') {
									callback += ';timer.notifyExec(' + uniqueId + ')';
									arguments[0] = callback;
								}
								if (typeof callback === 'function') {
									arguments[0] = function () {
										var returnValue = callback.apply(this, arguments);
										timerContext.notifyExec(uniqueId);
										return returnValue;
									}
								}
								// 储存原始时间间隔
								var originMS = arguments[1];
								// 获取变速时间间隔
								arguments[1] *= timerContext._percentage;
								var resultId = timer.apply(window, arguments);
								// 保存每次使用计时器得到的id以及参数等
								timerContext[property][resultId] = {
									args: arguments,
									originMS: originMS,
									originId: resultId,
									nowId: resultId,
									uniqueId: uniqueId,
									oldPercentage: timerContext._percentage,
									exceptNextFireTime: timerContext._Date.now() + originMS
								};
								return resultId;
							};
						},
						redirectNewestId: function (args) {
							var id = args[0];
							if (timerContext._intervalIds[id]) {
								args[0] = timerContext._intervalIds[id].nowId;
								// 清除该记录id
								delete timerContext._intervalIds[id];
							}
							if (timerContext._timeoutIds[id]) {
								args[0] = timerContext._timeoutIds[id].nowId;
								// 清除该记录id
								delete timerContext._timeoutIds[id];
							}
						},
						// registerShortcutKeys: function (timer) {
						// 	// 快捷键注册
						// 	addEventListener('keydown', function (e) {
						// 		switch (e.keyCode) {
						// 			case 57:
						// 				if (e.ctrlKey || e.altKey) {
						// 					// custom
						// 					timer.changeTime();
						// 				}
						// 				break;
						// 			// [=]
						// 			case 190:
						// 			case 187: {
						// 				if (e.ctrlKey) {
						// 					// console.log('+2');
						// 					timer.changeTime(2, 0, true);
						// 				} else if (e.altKey) {
						// 					// console.log('xx2');
						// 					timer.changeTime(0, 2);
						// 				}
						// 				break;
						// 			}
						// 			// [-]
						// 			case 188:
						// 			case 189: {
						// 				if (e.ctrlKey) {
						// 					// console.log('-2');
						// 					timer.changeTime(-2, 0, true);
						// 				} else if (e.altKey) {
						// 					// console.log('xx-2');
						// 					timer.changeTime(0, -2);
						// 				}
						// 				break;
						// 			}
						// 			// [0]
						// 			case 48: {
						// 				if (e.ctrlKey || e.altKey) {
						// 					// console.log('reset');
						// 					timer.changeTime(0, 0, false, true);
						// 				}
						// 				break;
						// 			}
						// 			default:
						// 			// console.log(e);
						// 		}
						// 	});
						// },
						/**
						 * 当计时器速率被改变时调用的回调方法
						 * @param percentage
						 * @private
						 */
						percentageChangeHandler: function (percentage) {
							// 改变所有的循环计时
							util.ergodicObject(timerContext, timerContext._intervalIds, function (idObj, id) {
								idObj.args[1] = Math.floor((idObj.originMS || 1) * percentage);
								// 结束原来的计时器
								this._clearInterval.call(window, idObj.nowId);
								// 新开一个计时器
								idObj.nowId = this._setInterval.apply(window, idObj.args);
							});
							// 改变所有的延时计时
							util.ergodicObject(timerContext, timerContext._timeoutIds, function (idObj, id) {
								var now = this._Date.now();
								var exceptTime = idObj.exceptNextFireTime;
								var oldPercentage = idObj.oldPercentage;
								var time = exceptTime - now;
								if (time < 0) {
									time = 0;
								}
								var changedTime = Math.floor(percentage / oldPercentage * time);
								idObj.args[1] = changedTime;
								// 重定下次执行时间
								idObj.exceptNextFireTime = now + changedTime;
								idObj.oldPercentage = percentage;
								// 结束原来的计时器
								this._clearTimeout.call(window, idObj.nowId);
								// 新开一个计时器
								idObj.nowId = this._setTimeout.apply(window, idObj.args);
							});
						},
						hookShadowRoot: function () {
							var origin = Element.prototype.attachShadow;
							eHookContext.hookAfter(Element.prototype, 'attachShadow',
								function (m, args, result) {
									extraElements.push(result);
									return result;
								}, false);
							eHookContext.hookedToString(origin, Element.prototype.attachShadow);
						},
						hookDefine: function () {
							const _this = this;
							eHookContext.hookBefore(Object, 'defineProperty', function (m, args) {
								var option = args[2];
								var ele = args[0];
								var key = args[1];
								var afterArgs = _this.hookDefineDetails(ele, key, option);
								afterArgs.forEach((arg, i) => {
									args[i] = arg;
								})
							});
							eHookContext.hookBefore(Object, 'defineProperties', function (m, args) {
								var option = args[1];
								var ele = args[0];
								if (ele && ele instanceof Element) {
									Object.keys(option).forEach(key => {
										var o = option[key];
										var afterArgs = _this.hookDefineDetails(ele, key, o);
										args[0] = afterArgs[0];
										delete option[key];
										option[afterArgs[1]] = afterArgs[2]
									})
								}
							})
						},
						hookDefineDetails: function (target, key, option) {
							if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
								option.configurable = true;
							}
							if (target instanceof HTMLVideoElement && key === 'playbackRate') {
								option.configurable = true;
								console.warn('[Timer Hook]', '已阻止默认操作视频倍率');
								key = 'playbackRate_hooked'
							}
							return [target, key, option];
						},
						suppressEvent: function (ele, eventName) {
							if (ele) {
								delete ele['on' + eventName];
								delete ele['on' + eventName];
								delete ele['on' + eventName];
								ele['on' + eventName] = undefined;
							}
							if (!suppressEvents[eventName]) {
								eHookContext.hookBefore(EventTarget.prototype, 'addEventListener',
									function (m, args) {
										var eName = args[0];
										if (eventName === eName) {
											console.warn(eventName, 'event suppressed.')
											args[0] += 'suppressed';
										}
									}, false);
								suppressEvents[eventName] = true;
							}
						},
						changePlaybackRate: function (ele, rate) {
							delete ele.playbackRate;
							delete ele.playbackRate;
							delete ele.playbackRate;
							ele.playbackRate = rate
							if (rate !== 1) {
								timerContext.defineProperty.call(Object, ele, 'playbackRate', {
									configurable: true,
									get: function () {
										return 1;
									},
									set: function () {
									}
								});
							}
						}
					}
				};

				var normalUtil = {
					isInIframe: function () {
						let is = global.parent !== global;
						try {
							is = is && global.parent.document.body.tagName !== 'FRAMESET'
						} catch (e) {
							// ignore
						}
						return is;
					},
					listenParentEvent: function (handler) {
						global.addEventListener('message', function (e) {
							var data = e.data;
							var type = data.type || '';
							if (type === 'changePercentage') {
								handler(data.percentage || 0);
							}
						})
					},
					sentChangesToIframe: function (percentage) {
						var iframes = document.querySelectorAll('iframe') || [];
						var frames = document.querySelectorAll('frame');
						if (iframes.length) {
							for (var i = 0; i < iframes.length; i++) {
								iframes[i].contentWindow.postMessage(
									{type: 'changePercentage', percentage: percentage}, '*');
							}
						}
						if (frames.length) {
							for (var j = 0; j < frames.length; j++) {
								frames[j].contentWindow.postMessage(
									{type: 'changePercentage', percentage: percentage}, '*');
							}
						}
					}
				};

				var querySelectorAll = function (ele, selector, includeExtra) {
					var elements = ele.querySelectorAll(selector);
					elements = Array.prototype.slice.call(elements || []);
					if (includeExtra) {
						extraElements.forEach(function (element) {
							elements = elements.concat(querySelectorAll(element, selector, false));
						})
					}
					return elements;
				};

				var generate = function () {
					return function (util) {
						// disable worker
						workerURLs.forEach(function (url) {
							if (util.urlMatching(location.href, 'http.*://.*' + url + '.*')) {
								window['Worker'] = undefined;
								console.log('Worker disabled');
							}
						});
						var eHookContext = this;
						var timerHooker = {
							// 用于储存计时器的id和参数
							_intervalIds: {},
							_timeoutIds: {},
							_auoUniqueId: 1,
							// 计时器速率
							__percentage: 1.0,
							// 劫持前的原始的方法
							_setInterval: window['setInterval'],
							_clearInterval: window['clearInterval'],
							_clearTimeout: window['clearTimeout'],
							_setTimeout: window['setTimeout'],
							_Date: window['Date'],
							__lastDatetime: new Date().getTime(),
							__lastMDatetime: new Date().getTime(),
							videoSpeedInterval: 1000,
							defineProperty: Object.defineProperty,
							defineProperties: Object.defineProperties,
							genUniqueId: function () {
								return this._auoUniqueId++;
							},
							notifyExec: function (uniqueId) {
								var _this = this;
								if (uniqueId) {
									// 清除 timeout 所储存的记录
									var timeoutInfos = Object.values(this._timeoutIds).filter(
										function (info) {
											return info.uniqueId === uniqueId;
										}
									);
									timeoutInfos.forEach(function (info) {
										_this._clearTimeout.call(window, info.nowId);
										delete _this._timeoutIds[info.originId]
									})
								}
								// console.log(uniqueId, 'called')
							},
							/**
							 * 初始化方法
							 */
							init: function () {
								var timerContext = this;
								var h = helper(eHookContext, timerContext, util);

								h.hookDefine();
								h.applyHooking();

								// 设定百分比属性被修改的回调
								Object.defineProperty(timerContext, '_percentage', {
									get: function () {
										return timerContext.__percentage;
									},
									set: function (percentage) {
										if (percentage === timerContext.__percentage) {
											return percentage;
										}
										h.percentageChangeHandler(percentage);
										timerContext.__percentage = percentage;
										return percentage;
									}
								});

								if (!normalUtil.isInIframe()) {
									console.log('[TimeHooker]', 'loading outer window...');
									h.applyUI();
									h.applyGlobalAction(timerContext);
									// h.registerShortcutKeys(timerContext);
								} else {
									console.log('[TimeHooker]', 'loading inner window...');
									normalUtil.listenParentEvent((function (percentage) {
										console.log('[TimeHooker]', 'Inner Changed', percentage)
										this.change(percentage);
									}).bind(this))
								}
							},
							/**
							 * 调用该方法改变计时器速率
							 * @param percentage
							 */
							change: function (percentage) {
								this.__lastMDatetime = this._mDate.now();
								this.__lastDatetime = this._Date.now();
								this._percentage = percentage;
								// var oldNode = document.getElementsByClassName('_th-click-hover');
								// var oldNode1 = document.getElementsByClassName('_th_times');
								// var displayNum = (1 / this._percentage).toFixed(2);
								// (oldNode[0] || {}).innerHTML = 'x' + displayNum;
								// (oldNode1[0] || {}).innerHTML = 'x' + displayNum;
								var a = document.getElementsByClassName('_th_cover-all-show-times')[0] || {};
								a.className = '_th_cover-all-show-times';
								this._setTimeout.bind(window)(function () {
									a.className = '_th_cover-all-show-times _th_hidden';
								}, 100);
								this.changeVideoSpeed();
								normalUtil.sentChangesToIframe(percentage);
							},
							changeVideoSpeed: function () {
								var timerContext = this;
								var h = helper(eHookContext, timerContext, util);
								var rate = 1 / this._percentage;
								rate > 16 && (rate = 16);
								rate < 0.065 && (rate = 0.065);
								var videos = querySelectorAll(document, 'video', true) || [];
								if (videos.length) {
									for (var i = 0; i < videos.length; i++) {
										h.changePlaybackRate(videos[i], rate);
									}
								}
							}
						};
						// 默认初始化
						timerHooker.init();
						return timerHooker;
					}
				};

				if (global.eHook) {
					global.eHook.plugins({
						name: 'timer',
						/**
						 * 插件装载
						 * @param util
						 */
						mount: generate()
					});
				}
			}(window);
		}()
	};
});
