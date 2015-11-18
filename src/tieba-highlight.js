$(function () {
    function loadAsyncScript(srcArr, callback) {
        var totalCount = srcArr.length;
        var readyCount = 0;
        srcArr.forEach(function (src) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", src);
            script.setAttribute("async", true);
            script.setAttribute("defer", true);
            head.appendChild(script);
            script.onload = function () {
                readyCount++;
                if (totalCount == readyCount) {
                    callback();
                }
            };
        });
    }

    var srcArr = [
        "http://apps.bdimg.com/libs/highlight.js/8.9.1/highlight.min.js",
        "http://tool.oschina.net/js/jsbeautify.js"
    ];

    loadAsyncScript(srcArr, function () {
        $('.d_post_content').each(function (i, block) {
            var text = $(block).text().replace(/^\s+/, '');
            var beautifyText = js_beautify(text, 4, " ");
            var beautifyHtml = beautifyText.replace(/\n/g, "<br/>").replace(/\s/g, '&nbsp;');
            $(block).html(beautifyHtml);
            hljs.highlightBlock(block);
        });
    });
});