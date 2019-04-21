
## 运行项目
```
①：clone仓库，然后使用编辑器打开，把project.config.json中的appid换成你的appid

②：npm install 安装依赖

③：npm run dev 运行项目

④：使用微信开发者工具选择项目下的dist中的wx文件夹，即可预览效果
```
## 微信开发者工具配置
```
  微信开发者工具->详情:
  ①：设置调试基础库为2.3.0, 否则部分微信API不能使用
  ②：勾选上不校验合法域名选项，否则歌曲信息可能抓取不到，配置如图：
```
![Image text](https://github.com/XieTongXue/github-img/blob/master/mpvue-music/tips.png)

## 效果预览
#### 主页（未播放歌曲）
![Image text](https://github.com/XieTongXue/github-img/blob/master/mpvue-music/singer.png)

#### 歌手页（未播放歌曲）
![Image text](https://github.com/XieTongXue/github-img/blob/master/mpvue-music/singer-detail.png)

#### 歌手页（播放歌曲）
![Image text](https://github.com/XieTongXue/github-img/blob/master/mpvue-music/song-play.png)

#### 主页页（播放歌曲）
![Image text](https://github.com/XieTongXue/github-img/blob/master/mpvue-music/singer-play.png)

