<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-button="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the gived id.</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  components: {
    MemoryOverview,
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  // watch:{
  //     '$route'(currentRoute){
  //         this.memoryId = currentRoute.params.id
  //     }
  // }
  //this watcher method trigger whenever the route will change, but initially it does not trigger
  // we can trigger is maybe using any button, since we can read the params.id initially in data() this we dont need watch right now
};
</script>