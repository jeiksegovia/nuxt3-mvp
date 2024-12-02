<template>
  <div class="flex flex-row justify-center flex-grow prose mb-12 bg-white rounded-md container max-w-[95ch] max-h-10">
    <h1>
      <span class="font-light">
        Posts
      </span>
    </h1>
  </div>

  <div class="flex flex-row justify-center flex-grow">
    <div
      class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
    >
      <h3>Categories</h3>

    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch]">
      
    </div>
  </div>
</template>

<script setup>
const categories = useExampleData();

const resetError = (error) => {
  error.value = null;
};
</script>
