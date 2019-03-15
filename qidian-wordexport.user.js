// ==UserScript==
// @name         起点章节导出
// @namespace    https://www.saintic.com/
// @version      0.3
// @description  阅文作家专区已发布章节中，文章内容导出为文档。
// @author       staugur
// @match        http*://write.qq.com/booknovels/chaptermanage/CBID/*
// @icon         data:image/png;base64,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
// @license      MIT
// @date         2018-06-07
// @modified     2018-06-15
// @github       https://github.com/staugur/scripts/blob/master/userscripts/qidian-wordexport.user.js
// @supportURL   https://github.com/staugur/scripts/issues
// ==/UserScript==

(function() {
    'use strict';
    /*
        公共接口
    */
    //字符串是否包含子串
    function isContains(str, substr) {
        //str是否包含substr
        return str.indexOf(substr) >= 0;
    }
    //判断页面中id是否存在
    function hasId(id) {
        //有此id返回true，否则返回false
        var element = document.getElementById(id);
        if (element) {
            return true
        } else {
            return false
        }
    }
    //加载js文件
    function addJS(src, cb) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
        script.onload = typeof cb === "function" ? cb : function() {};
    }
    /*
        主要代码
    */
    //由于@require方式引入jquery时其他组件使用异常，故引用cdn中jquery v1.10.1；加载完成后引用又拍云中其他依赖
    addJS("https://cdn.bootcss.com/jquery/1.10.1/jquery.min.js", function() {
        addJS("https://static.saintic.com/cdn/doc/FileSaver.min.js", function() {
            addJS("https://static.saintic.com/cdn/doc/jquery.wordexport.js", function() {
                setTimeout(function() {
                    if (hasId("viewChapterBox") && hasId("portamento_container") && hasId("chapterContent") && hasId("chapterTitle")) {
                        //定位
                        var ct = document.getElementById('chapterTitle');
                        var pt = document.getElementById('portamento_container').getElementsByClassName('titleBtn')[0];
                        //添加下载按钮
                        if (isContains(pt.innerText, "导出") === false) {
                            pt.insertAdjacentHTML('afterbegin', '<a id="downloadChapterBtn" class="button" href="javascript:">导出</a>')
                        }
                        //监听点击下载事件
                        document.getElementById("downloadChapterBtn").onclick = function() {
                            try {
                                $("#chapterContent").wordExport(ct.innerText);
                            } catch (e) {
                                console.error(e);
                                alert("当前文章无法导出为doc文档！");
                            }
                        };
                    }
                }, 1000);
            });
        });
    });
})();