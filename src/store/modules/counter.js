import * as types from '../types';

const state = {
    counter: 0
  };

const getters = {
    [types.DOUBLE_COUNTER]: state => {
      return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
      return state.counter + ' Clicks';
    }
  };

const mutations = {
    increment: (state, payload) => {
      console.log('payload: ', payload);
      state.counter += payload;
    },
    decrement: (state, payload) => {
      console.log('payload: ', payload);
      state.counter -= payload;
    }
  };

const actions = {
    increment: (context, payload) => {
      console.log('payload: ', payload);
      context.commit('increment', payload);
    },
    decrement: ({commit}, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: (context, payload) => {
      setTimeout(() => {
        context.commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  };

module.exports = {
  state,
  getters,
  mutations,
  actions
};