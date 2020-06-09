export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 120,
        title: "Socials",
        icon: "mdi-facebook",
        color: "blue",
      },
      {
        id: 121,
        title: "Food",
        icon: "mdi-food",
        color: "red",
      },
      {
        id: 122,
        title: "Vacation",
        icon: "mdi-white-balance-sunny",
        color: "yellow",
      },
      {
        id: 123,
        title: "Accessories",
        icon: "mdi-sunglasses",
        color: "orange",
      },
      {
        id: 124,
        title: "Car parts",
        icon: "mdi-car",
        color: "green",
      },
      {
        id: 125,
        title: "Bugs",
        icon: "mdi-ladybug",
        color: "brown",
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
    getCategories: (state) => {
      return state.categories;
    },
    getTrendingCategories: (state) => {
      return state.categories.slice(0, 6);
    },
    getLoader: (state) => {
      return state.loader;
    },
    getError: (state) => {
      return state.error;
    },
  },
};
