/**
 * Created by xiaoqiang on 12/11/2018.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}
export default mutations
