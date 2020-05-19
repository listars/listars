import install from './install'

class Router {
  constructor (options) {
    this.$options = options
    // 路由映射
    this.routerMap = {}
    this.currentPath = '/'
  }

  /**
   * @func init
   * @desc 初始化router
   */
  init (app) {
    this.initRouteMap()
    this.initEvent()
  
    app.component('router-view', {
      render: h => {
        return h(this.getCurrentComponent())
      }
    })
  }

  /**
   * @func push
   * @desc 路由跳转方法 有生成记录
   * @param {string | object} path 跳转的目标地址/地址对象
   */
  push (path) {
    window.location.hash = path
  }

  /**
   * @func replace
   * @desc 路由替换方法
   * @param {string | object} path 跳转的目标地址/地址对象
   */
  replace (path) {}

  /**
   * @func onHashChange
   * @desc hash路由更新事件
   */
  onHashChange () {
    this.currentPath = location.hash.slice(1) || '/'
    // this.app.$current = this.getCurrentComponent()
  }

  /**
   * @func initEvent
   * @desc 初始化加载事件
   */
  initEvent () {
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  /**
   * @func initRouteMap
   * @desc 初始化路由的集合
   */
  initRouteMap () {
    this.routerMap = this.$options.routes.reduce((sum, item) => {
      sum[item.path] = item
      return sum
    }, {})
  }

  /**
   * @func getCurrentComponent
   * @desc 获取当前的路由组件
   * @returns {object<Dom>} 路由组件
   */
  getCurrentComponent () {
    const component = this.routerMap[this.currentPath].component
    return component
  }
}

Router.install = install

export default Router