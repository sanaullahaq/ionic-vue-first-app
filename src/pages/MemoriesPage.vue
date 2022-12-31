<template>
  <base-layout page-title="All Memories">
    <memories-list :memories="memories"> </memories-list>
    <!-- above will go to the default slot -->
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
      <!-- slot="icon-only", means the there is only one icon thus the icon will be fitted correctly inside button tag -->
    </template>
    <!-- Utilizing the named slot -->
  </base-layout>
</template>

<script>
import { IonButton, IonIcon} from "@ionic/vue";
import { add } from 'ionicons/icons'; //Need to import icon, more icons at: https://ionic.io/ionicons/v4
import MemoriesList from "../components/memories/MemoriesList.vue";

export default {
  data(){
    return { add }; // need to return the icon as data to use in the template
  },
  components: {
    IonButton,
    IonIcon,
    MemoriesList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>