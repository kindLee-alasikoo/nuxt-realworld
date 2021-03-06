
module.exports = {
    router: {
        linkActiveClass:'active',
        extendRoutes(routes, resolve) {
        //   routes.push({
        //     name: 'custom',
        //     path: '*',
        //     component: resolve(__dirname, 'pages/404.vue')
        //   })
       
        routes.splice(0)//清除nuxt自动生成的路由规则
        routes.push(...[
            {
                path:'/',
                component:resolve(__dirname,'pages/layout'),
                children:[
                    {
                        path:'',
                        name:'home',
                        component:resolve(__dirname,'pages/home/')
                    },
                    {
                        path:'/login',
                        name:'login',
                        component:resolve(__dirname,'pages/login/')
                    },
                    {
                        path:'/register',
                        name:'register',
                        component:resolve(__dirname,'pages/login/')
                    },
                    {
                        path:'/profile',
                        name:'profile',
                        component:resolve(__dirname,'pages/profile/')
                    },
                    {
                        path:'/settings',
                        name:'settings',
                        component:resolve(__dirname,'pages/settings/')
                    },
                    {
                        path:'/editor',
                        name:'editor',
                        component:resolve(__dirname,'pages/editor/')
                    },
                    {
                        path:'/article',
                        name:'article',
                        component:resolve(__dirname,'pages/article/')
                    }
                ]
            },
           
        ])
        }
      },
      server:{
          host:'0.0.0.0',
          port:3000
      },
    plugins:[
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}