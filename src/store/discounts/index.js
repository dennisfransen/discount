export default {
  namespaced: true,
  state: {
    discounts: [
      {
        id: 10,
        title: "H&M",
        date: "2020-06-28",
        imageUrl: "https://i.imgur.com/rXGUZh2.jpg",
      },
      {
        id: 11,
        title: "BR Fetter",
        date: "2020-09-21",
        imageUrl: "https://i.imgur.com/E3sBF1z.jpg",
      },
    ],
    loader: false,
    error: null,
  },
  mutations: {
    setLoader(state, loader) {
      state.loader = loader;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {},
  getters: {
    getDiscounts: (state) => {
      return state.discounts;
    },
    getTrendingDiscounts: (state) => {
      return state.discounts.slice(0, 5);
    },
    getLoader: (state) => {
      return state.loader;
    },
    getError: (state) => {
      return state.error;
    },
  },
};
