<script setup lang="ts">
import FormInput from "./FormInput.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <p>here is a {{ msg }} from the form</p>
    <FormInput
      v-for="input in inputs"
      :key="input.key"
      :label="input.label"
      v-model="input.value"
    />
    <button>{{ buttonLabel }}</button>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      buttonLabel: "Submit",
      inputs: [
        {
          key: 1,
          label: "Email",
          value: "",
        },
        {
          key: 2,
          label: "Password",
          value: "",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.inputs[0].value, this.inputs[1].value);
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
