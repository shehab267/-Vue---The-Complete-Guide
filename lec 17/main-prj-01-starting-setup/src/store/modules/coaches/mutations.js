export default {
  registerCoach(state, payload) {
    // Add the new data to coaches array
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    // here I want to set the coaches from local into DataBase's Coaches
    state.coaches = payload;
  },
};
