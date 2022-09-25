const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel ",
          name: "Manuel Lorenz ",
          phone: "01234-5678-991",
          email: "manuel@localhost.com",
        },
        {
          id: "Julie  ",
          name: "Julie Jones",
          phone: "01234-5678-991",
          email: "Julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailAreVisible ? 'Show': 'Hide'}} Details
      </button>
      <ul v-if="detailAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
  </li>

  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "Julie  ",
        name: "Julie Jones",
        phone: "01234-5678-991",
        email: "Julie@localhost.com",
      },
    };
  },
    methods: {
      toggleDetails() {
        this.detailAreVisible = !this.detailAreVisible;
      },
    },
});

app.mount("#app");
