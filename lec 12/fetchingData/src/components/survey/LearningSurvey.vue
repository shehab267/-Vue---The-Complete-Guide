<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <transition name="invalidInput">
          <p class="invalid" v-if="invalidInput">
            One or more input fields are invalid. Please check your provided
            data.
          </p>
        </transition>
        <p class="invalid" v-if="errorMsg">{{ errorMsg }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      errorMsg: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      //   this.enteredName = '';
      //   this.chosenRating = null;

      this.errorMsg = null;
      fetch(
        'https://vue-http-demo-aadd3-default-rtdb.firebaseio.com/serveys.json/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error("Couldn't save data!");
          }
        })
        .catch((errorMsg) => {
          console.error(errorMsg);
          this.errorMsg = errorMsg.message;
        });
      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
.invalid {
  color: rgb(209, 42, 13);
  font-weight: 550;
}
.invalidInput-leave-from {
  /* transform: translateY(0px); */
  opacity: 1;
}
.invalidInput-enter-active {
  /* transition: all 0.5s ease-out; */
  animation: kf_shake 0.4s 1 linear;
}

.invalidInput-leave-active {
  transition: all 0.5s ease-in-out;
}
.invalidInput-leave-to {
  /* transform: translateY(-20px); */
  opacity: 0;
}

.invalid {
  animation: kf_shake 0.4s 1 linear;
}

@keyframes kf_shake {
  0% {
    -webkit-transform: translate(30px);
  }
  20% {
    -webkit-transform: translate(-30px);
  }
  40% {
    -webkit-transform: translate(15px);
  }
  60% {
    -webkit-transform: translate(-15px);
  }
  80% {
    -webkit-transform: translate(8px);
  }
  100% {
    -webkit-transform: translate(0px);
  }
}
</style>
