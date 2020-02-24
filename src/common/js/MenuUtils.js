export default (routers,data) => {
        //这里之所以要重新遍历一下，是因为，通常我们动态路由的时候，是获取服务端数据，这个component属性是一个字符串，或者可能连字段名都是其他的key
        //所以这里要做一些转换
        generaMenu(routers,data);
    }
    function generaMenu(routers,data){  //这里的routers是login页面
        data.forEach((item)=>{
            let menu = Object.assign({},item);
            var vuename = '';
            if(menu.component == 'Home' || menu.component == 'Login' || menu.component == 'Main' || menu.component == '404'){
                vuename = menu.component;//这几个页面都是主页面。
            }else{
                var tmpArr = menu.component.split("_");
                vuename = tmpArr[0] + '/' + tmpArr[1];  
            }
            // console.log(vuename);
            menu.component = LazyLoading(vuename);
            if(menu.children && menu.children.length > 0){
                menu.children = [];
                generaMenu(menu.children,item.children);
            }
            routers.push(menu);  //把所有的内容都放在了routers。也就是login页面的那个pageRouters里面
        });
    }