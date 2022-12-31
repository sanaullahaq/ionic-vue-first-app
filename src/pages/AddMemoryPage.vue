<template>
  <base-layout page-title="Add a Memory" page-default-back-button="/memories">
    <!-- <h2>Add a Memory</h2> -->
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>
<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';
export default {
  components:{
    CreateMemoryForm
  },
  methods:{
    saveMemory(memoryData){
      this.$store.dispatch('addMemory', memoryData) //dispatching all calling the addMemory() in actions in the vuex store.
      this.$router.replace('/memories') // instead of replace() we can use push(), but push will let the user to able to come back
                                        // but we dont want it here, since after submiting the form this will take the user to the memory list and the already submitted form should not be able to back accessible
    }
  }
};
</script>