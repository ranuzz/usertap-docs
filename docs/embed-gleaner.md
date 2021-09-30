---
slug: embed-gleaner
title: 'Embed Code'
tags: []
---

Once you login go to Account->UserProfile in the application dashboard. There you will find the embed code for integration. Just put this code before the `</body>` in the pages where you want to integrate [Gleaner](https://gleaner.in) widgets. Once integrated everything can be configured, tested and deployed from the [Gleaner](https://gleaner.in) dashboard.


```js
<script>
    (function (w,d,s,o,f,js,fjs) {
        w['devmakeall-UserTap-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
        js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', 'glw', https://gleaner.in/lib/widget.js));
    glw('deploy', 'unique_code');
</script>
```