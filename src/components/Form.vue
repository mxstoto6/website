<template>
  <div>
    <input type="text" placeholder="Name" v-model="name">
    <div>
      <button @click="submitForm" v-bind:disabled="name.length == 0">Submit</button>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const name = ref('')

      const submitForm = () => {
        console.log(`Form submitted! Name = ${name.value}`)
      }

      return {
      name,
      submitForm,
      }
    },
  }
</script>

<style>
  input[type='text'] {
    padding: 5px;
  }

  button {
    margin-top: 20px;
  }
</style>