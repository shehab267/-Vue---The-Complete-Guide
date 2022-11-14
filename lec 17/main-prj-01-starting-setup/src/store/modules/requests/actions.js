export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      userMessage: payload.message,
    };
    // commit addRequests mutation and pass the payload 'newRequest'
    context.commit('addRequests', newRequest);
  },
};
