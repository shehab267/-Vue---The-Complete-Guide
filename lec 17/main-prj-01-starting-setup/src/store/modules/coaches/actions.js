export default {
  registerCoach(context, data) {
    // Transforming the incomming data to proper Data
    const coachData = {
      // id is temporary till fetching data to the cloud
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };
    //  adding the fixed data to the action
    context.commit('registerCoach', coachData);
  },
};
