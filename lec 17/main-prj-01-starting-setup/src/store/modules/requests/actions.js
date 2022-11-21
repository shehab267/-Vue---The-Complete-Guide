export default {
  contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    // Post requests on dataBase based on the CoachId
    const response = fetch(
      `https://finding-coach-web-app-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    // const responseData = response.json;
    if (!response.ok) {
      // Do something
    }

    // commit addRequests mutation and pass the payload 'newRequest'
    context.commit('addRequests', newRequest);
  },
};
