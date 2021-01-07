(function(){
    const MyPlugin = {}

    MyPlugin.install = function(Vue, options){
        //1.添加全局方法和属性  
        Vue.MyGlobalMethod = function(){
            alert('Vue函数对象方法执行')
        }

        Vue.directive('my-directive',function(el, bind){
            el.innerHTML = ' MyPlugin my-directive' + bind.value
        })

        Vue.prototype.$myMethod = function(){
            alert('vue实例对象方法执行')
        }
    }

    window.MyPlugin = MyPlugin
})()