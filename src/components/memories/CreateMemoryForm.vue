<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <!-- @submit.prevent this prevent the browser from requesting submission form and it will let the JS to handle the submission of the form  -->
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageURL" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button expand="block" type="submit">save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default {
  emits: ["save-memory"], //defining a custom event called save-memory
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      enteredTitle: "",
      enteredImageURL: "",
      enteredDescription: "",
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageURL: this.enteredImageURL,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData); // trigering the 'save-memory' event
    },
  },
};
</script>