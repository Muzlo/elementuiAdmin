// import { LoadingBar } from 'view-design'
import router from './router'
import store from './store'
import createRoutes from '@/utils/createRoutes'
import { getDocumentTitle, resetTokenAndClearUser } from './utils'
// 是否有菜单数据
let hasMenus = false
router.beforeEach(async (to, from, next) => {
    document.title = getDocumentTitle(to.meta.title)
    // LoadingBar.start()
    if (localStorage.getItem('token')) {
        // if(token过期){
        //     next('/login')
        // }
        // if(token没过期){
        //     tokenExpire()
        // }
        tokenExpire()
        function tokenExpire(){
            if (to.path === '/login') {
                next({ path: '/' })
            } else if (hasMenus) {
                next()
            } else {
                try {
                    // 这里可以用 await 配合请求后台数据来生成路由
                    // const data = await axios.get('xxx')
                    // const routes = createRoutes(data)
                    const arr= [
                        {
                            name: 'home', // 要跳转的路由名称 不是路径
                            size: 18, // icon大小
                            type: 'md-home', // icon类型
                            text: '主页', // 文本内容
                        },
                        {
                            text: '第二菜单',
                            type: 'ios-paper',
                            children: [
                                {
                                    type: 'ios-grid',
                                    name: 't1',
                                    text: '表格',
                                    // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                                    //hidden: true,
                                },
                            ],
                        },
                        {
                            text: '第三菜单',
                            type: 'ios-paper',
                            children: [
                                {
                                    text: '三级菜单',
                                    type: 'ios-paper',
                                    children: [
                                        {
                                            type: 'ios-notifications-outline',
                                            name: 'msg',
                                            text: '通知消息',
                                        },
                                        {
                                            type: 'md-lock',
                                            name: 'password',
                                            text: '修改密码',
                                        },
                                        {
                                            type: 'md-person',
                                            name: 'userinfo',
                                            text: '基本资料',
                                        },
                                    ],
                                },
                                
                            ],
                        }
                    ];
                    
                    store.commit("setMenus",arr)
                    localStorage.setItem("setMenus",arr)
    
                    const routes = createRoutes(arr)
                    // const routes = createRoutes(store.state.menuItems)
                    // 动态添加路由
                    router.addRoutes(routes)
                    hasMenus = true
                    next({ path: to.path || '/' })
                } catch (error) {
                    resetTokenAndClearUser()
                    next(`/login?redirect=${to.path}`)
                }
            }
        }

    } else {
        hasMenus = false
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
    // LoadingBar.finish()
})