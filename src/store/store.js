/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
import AuthModule from "./modules/auth";
import DummyModule from "./modules/dummy";

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    dummy: DummyModule
  },
  getters,
  mutations,
  state,
  actions,
  strict: process.env.NODE_ENV !== "production"
});
