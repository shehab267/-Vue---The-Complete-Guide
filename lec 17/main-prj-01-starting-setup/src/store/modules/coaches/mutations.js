export default {
  registerCoach(state, payload) {
    // Add the new data to coaches array
    state.coaches.push(payload);
  },
};
