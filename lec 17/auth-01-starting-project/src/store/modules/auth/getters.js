export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    // return a Boolean value if we have token or not
    return !!state.token;
  },
};
