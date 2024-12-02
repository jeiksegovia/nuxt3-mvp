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
      <NuxtLink
          v-for="(category, index) in categories"
          :key="category.slug"
          class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
          :to="`/categoria/${category.slug}/entries`"
          :class="{
            'text-blue-500':
              category.slug === $route.params.categoria,
            'text-gray-600':
              category.slug !== $route.params.categoria,
          }"
        >
          <span class="text-gray-500"
            >{{ index + 1 }}.</span
          >
          <span>{{ category.name }}</span>
        </NuxtLink>
    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch]">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const categories = useExampleData();
</script>
