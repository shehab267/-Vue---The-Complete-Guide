export default {
  // * using the modern way "async - await" insted of 'promise - then'
  async registerCoach(context, data) {
    // Transforming the incomming data to proper Data

    // id is temporary till fetching data to the cloud
    const userId = context.rootGetters.userId; // defined in a seprate const to use it for now till authentication as a coach
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    // Fetch data with Vuex using 'fireBase'
    // * using the modern way "async - await" insted of 'promise - then'
    const response = await fetch(
      `https://finding-coach-web-app-default-rtdb.firebaseio.com/${userId}.json`,
      {
        // 'PUT' request => overWritten data if existed, or created if not
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json()

    // Catching errors
    if (!response.ok) {
      // Throw error
    }

    //  adding the fixed data to the action
    context.commit('registerCoach', {
      //  Merge the coach data with userId
      //  **I didn't send userId to the server, Because it would be doplicated with in the fetch request, So I will merge it here for the locally using sake
      ...coachData,
      id: userId,
    });
  },
};
