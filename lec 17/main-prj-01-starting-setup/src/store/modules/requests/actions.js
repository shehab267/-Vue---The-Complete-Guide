export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    // Post requests on dataBase based on the CoachId
    const response = await fetch(
      `https://finding-coach-web-app-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    // Next data needed for extracting and using the generating ID from fireBase with POST new request
    const responseData = await response.json();

    // convert the fireBase's id to name
    newRequest.id = responseData.name;

    if (!response.ok) {
      // Throw error
      const error = new Error(responseData.message || 'Faild to fetch data!');
      throw error;
    }

    // commit addRequests mutation and pass the payload 'newRequest'
    context.commit('addRequests', newRequest);
  },
};
