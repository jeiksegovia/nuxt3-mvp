<template>
  <label
    class="rounded text-white font-bold py-0.5 px-2 cursor-pointer"
    :class="{
      'bg-green-500': !modelValue,
      'bg-gray-500': modelValue,
    }"
  >
    <input
      type="checkbox"
      class="hidden"
      v-model="modelValue"
    />
    {{ modelValue ? 'leido' : 'Marcar como leido' }}
  </label>
</template>

<script setup>
const modelValue = defineModel('modelValue',{ default: false });

</script>

<style scoped>
::selection {
  display: none;
}
</style>
