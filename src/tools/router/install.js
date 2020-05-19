import {isDef, getUrl} from './utils'
export default function install (_Vue) {
  let Vue = _Vue
      
  Vue.mixin({
    beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        Vue.util.defineReactive(this, '$router', this.$options.router)

        this.$router.init(Vue)
        return
      }
      const root = (this.$parent && this.$parent._routerRoot) || this
      Vue.util.defineReactive(this, '$router', root.$router)
    }
  })
}