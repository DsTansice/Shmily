import{_ as e,c as a,o as l,Q as s}from"./chunks/framework.93a61f05.js";const _=JSON.parse('{"title":"Get","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/get.md","filePath":"guide/use/get.md","lastUpdated":1700308839000}'),n={name:"guide/use/get.md"},o=s(`<h1 id="get" tabindex="-1">Get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;Get&quot;">​</a></h1><p>从 <a href="./get.html#支持列表">支持列表</a> 中选择所需项目, 按照相应的文档操作</p><h2 id="支持列表" tabindex="-1">支持列表 <a class="header-anchor" href="#支持列表" aria-label="Permalink to &quot;支持列表&quot;">​</a></h2><p>下面列出现有已知的 Get 项目, 更多项目可在 <code>Github</code> 搜索 <a href="https://github.com/search?q=Shmily-Get-&amp;type=repositories" target="_blank" rel="noreferrer"><code>Shmily-Get-</code></a></p><ul><li><p><code>QQ</code> QQ 电脑版</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-QQ-PC_MHT" target="_blank" rel="noreferrer">mht 格式聊天记录</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-QQ-PC_Clipboard" target="_blank" rel="noreferrer">通过剪贴板导出</a></li></ul></li><li><p><code>MobileQQ</code> QQ 手机版</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-MobileQQ-Andriod" target="_blank" rel="noreferrer">Andriod</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-MobileQQ-S60v3" target="_blank" rel="noreferrer">Nokia Symbian S60v3</a></li></ul></li><li><p><code>Wechat</code> 微信</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Wechat" target="_blank" rel="noreferrer">Android</a></li></ul></li><li><p><code>SMS</code> <code>CallLog</code> 短信与通话记录</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-Android" target="_blank" rel="noreferrer">Android</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-calendar_google_com" target="_blank" rel="noreferrer">GoogleCalendar</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-ic_qq_com" target="_blank" rel="noreferrer">QQ 同步助手</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-S60v3_MMS" target="_blank" rel="noreferrer">Nokia Symbian S60v3 彩信</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-S60v3_SMS" target="_blank" rel="noreferrer">Nokia Symbian S60v3 短信</a></li></ul></li><li><p><code>Camera</code> 照片与视频</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Camera" target="_blank" rel="noreferrer">照片与视频</a></li></ul></li><li><p><code>EMAIL</code> 电子邮件</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Email" target="_blank" rel="noreferrer">电子邮件</a></li></ul></li></ul><h2 id="产物结构" tabindex="-1">产物结构 <a class="header-anchor" href="#产物结构" aria-label="Permalink to &quot;产物结构&quot;">​</a></h2><p>最终可以在输出目录（一般是 <code>dist</code>）获得 <code>数据文件</code> 和 <code>资源文件</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 示例</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- dist</span></span>
<span class="line"><span style="color:#e1e4e8;">    - MobileQQ-lqzh-20230101.json  &lt;--- 数据文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - data                         &lt;---  资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">      - MobilqQQ-lqzh-20230101</span></span>
<span class="line"><span style="color:#e1e4e8;">        - images</span></span>
<span class="line"><span style="color:#e1e4e8;">        - videos</span></span>
<span class="line"><span style="color:#e1e4e8;">           ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - _temp                        &lt;--- 输出过程中的一些信息，如下载错误的列表等</span></span>
<span class="line"><span style="color:#e1e4e8;">      - DOWN_ERROR.json</span></span>
<span class="line"><span style="color:#e1e4e8;">      - XXXX.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 示例</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- dist</span></span>
<span class="line"><span style="color:#24292e;">    - MobileQQ-lqzh-20230101.json  &lt;--- 数据文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - data                         &lt;---  资源文件</span></span>
<span class="line"><span style="color:#24292e;">      - MobilqQQ-lqzh-20230101</span></span>
<span class="line"><span style="color:#24292e;">        - images</span></span>
<span class="line"><span style="color:#24292e;">        - videos</span></span>
<span class="line"><span style="color:#24292e;">           ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - _temp                        &lt;--- 输出过程中的一些信息，如下载错误的列表等</span></span>
<span class="line"><span style="color:#24292e;">      - DOWN_ERROR.json</span></span>
<span class="line"><span style="color:#24292e;">      - XXXX.json</span></span></code></pre></div><ul><li><p><code>数据文件</code></p><p><a href="./msg/schema.html">Shmily-Msg</a> 格式的 JSON 文件，内容是从数据(库)导出的消息内容。</p><details><summary> 给开发者的一些建议</summary><pre><code>-   尽量导出消息相关的所有数据而非所需数据, 这样会给其他人带来帮助, 也便于丰富更多信息
-   尽量补充完整信息, 如 自定义表情, 补充 表情包名称 与 描述, 对于统计来说更准确全面
</code></pre></details></li><li><p><code>资源文件</code></p><p>消息相关的静态资源文件,如图片、表情、视频等</p><details><summary> 给开发者的一些建议</summary><pre><code>-   对于外链的资源，建议能爬下来的资源(如图片)都本地化, 过个几年这些 URL 都打不开了
</code></pre></details></li></ul>`,9),t=[o];function p(r,i,c,h,d,m){return l(),a("div",null,t)}const u=e(n,[["render",p]]);export{_ as __pageData,u as default};
