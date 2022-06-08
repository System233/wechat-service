<!--
 Copyright (c) 2022 System233
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Wechat-Service

Linux wechat for UOS as service.

将uos wechat的native后端转为对外公开的服务供调用.

## ❌WIP

工作正在进行...

## TODO

- [x] 公开native层接口.
- [x] 转发native层数据.
- [x] 反编译protobufjs.
- [ ] 重新实现/Hook `libuosdevicea.so`.
- [ ] 重新实现js前端.
- [ ] 修复 本地-远程 资源路径.
- [ ] qemu (+docker?) 最小linux跨平台运行

## 当前进度

* 可启动到登录页面
在Windows上通过Electron指令启动`wechat`的js部分，Linux上运行`native`部分作为服务，同时Hook `alita.node`转发js-native通信数据，能够让wechat启动到登录页面。
由于路径问题，这样启动的登录窗口无法显示出登录二维码，但本地缓存中是存在的，扫描linux服务启动目录下`$userData/wechat/users/cache/loginqrcode`中的缓存二维码，能够成功扫码并在该目录中生成头像，但暂时无法进一步登录。