var posts=["2023/06/24/CSS实现镜像反转/","2023/06/21/JS原型/","2022/06/02/android的fragment实现导航栏/","2022/06/02/android将图片插入数据库/","2022/06/07/aop/","2022/06/02/android使用sqlite基础/","2022/06/02/bat批处理/","2022/06/06/bean的自动装配/","2022/06/02/centos命令/","2022/06/02/centos安装配置node/","2022/06/02/centos常用命令（更全）/","2022/06/02/centos搭建本地服务器/","2023/03/28/css不常见属性/","2022/06/08/crud操作/","2022/06/02/docker入门/","2022/06/09/docker搭建wordpress/","2022/06/02/docker移动文件或者文件夹的命令/","2022/06/02/docker进阶/","2022/06/02/git基础/","2022/06/02/git命令/","2022/06/02/idea常用设置及插件/","2023/04/06/feign学习记录/","2023/04/16/javascript技术/","2023/06/28/java中spi的理解/","2022/06/02/java泛型-t与t的用法/","2023/06/28/java反射/","2023/06/28/java泛型/","2022/06/02/jquery/","2022/06/02/kali安装-deb的安装包/","2022/06/02/leetcode-442/","2022/06/02/leetcode-942/","2022/06/02/lex词法分析器语法实验/","2022/06/02/linux命令/","2022/06/02/linux基础/","2023/04/14/lodash的使用/","2023/03/27/mybatis-plus记录/","2022/06/08/mybatis简介/","2023/06/26/mybatis缓存详解和实现/","2022/06/02/mysql基础语句/","2022/06/08/mysql的engine/","2023/06/23/nginx基础/","2022/05/31/npm常用命令/","2022/06/02/office激活/","2022/06/01/openwrt下ipk包的安装、卸载与更新/","2022/06/01/openwrt安装主题/","2022/06/01/openwrt开启passwall/","2022/06/01/postmanapi接口调试器/","2022/06/01/ps快捷键/","2023/06/08/python-OS包/","2023/06/08/python学习记录/","2023/03/23/redisspringboot问题/","2023/03/24/redis常用命令/","2022/06/09/resultmap及分页/","2022/06/01/serializable对象序列化/","2022/06/03/springboot-helloworld/","2022/06/01/springboot学习/","2023/04/12/springboot应用开发问题/","2022/06/01/springboot项目实战/","2023/03/16/springcloud学习记录/","2023/04/02/springsecurity6-0使用/","2022/06/05/spring依赖注入（di）/","2022/06/05/spring快速上手spring/","2022/06/05/spring概述及ioc理论推导/","2022/05/31/staruml破解/","2022/09/07/ubuntu常见问题/","2022/08/03/typescript常用总结/","2022/05/31/vmware虚拟机中配置静态ip的方法/","2023/03/28/vue中组合式pinia/","2022/05/31/vmware安装openwrt/","2022/08/01/vue向后端请求数据/","2022/05/31/win11的资源管理器卡顿/","2022/05/31/yacc概述/","2022/06/02/二叉树遍历/","2022/06/07/代理模式/","2023/03/27/使用vue时遇到的问题/","2022/06/06/使用注解开发/","2023/06/26/关于ObjectMapper/","2023/06/28/关于java异常/","2023/06/25/关于数据库连接池/","2022/06/02/创建-docker-容器后修改挂载目录的方法/","2022/12/20/十大经典排序算法/","2022/06/01/图床搭建/","2022/06/02/基本类型和对象类型/","2023/03/24/前端开发常用工具/","2023/06/29/基础算法中的递归/","2022/06/02/宝塔面板+wordpress搭建博客/","2023/03/23/常用api/","2022/06/02/开发者必备mysql命令/","2022/06/02/拓扑排序/","2022/10/28/汇编语言debug命令/","2022/06/02/线性规划问题/","2023/04/11/统一网关gateway/","2022/11/11/英语16种时态/","2022/06/02/远程控制sakurafrp实现非局域网远程控制/","2023/06/30/关于无聊时的思考/","2023/07/03/关于protobuf/","2023/07/04/测试用例设计/","2023/07/05/等价类划分法/","2023/07/05/边界值分析法/","2023/07/07/selenium的基本使用和常用方法/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};