/**
 * Created by xiaoqiang on 12/11/2018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 用于检测组件状态(打印日志信息)
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 控制严格模式和plugins只在开发模式下生效
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
