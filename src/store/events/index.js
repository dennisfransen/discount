export default {
  namespaced: true,
  state: {
    events: [
      {
        id: 29,
        title: "Roskilde",
        date: "2020-06-28",
        qrCode: "https://i.imgur.com/KLmcTxP.jpg",
        imageUrl: "https://i.imgur.com/wsxyrXO.jpg",
      },
      {
        id: 30,
        title: "Metaltown",
        date: "2020-08-13",
        qrCode: "https://i.imgur.com/KLmcTxP.jpg",
        imageUrl: "https://i.imgur.com/LnVR5d1.jpg",
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
    getEvents: (state) => {
      return state.events;
    },
    getTrendingEvents: (state) => {
      return state.events.slice(0, 5);
    },
    getLoader: (state) => {
      return state.loader;
    },
    getError: (state) => {
      return state.error;
    },
  },
};
