<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      {{ category.name }}
    </p>
    <div
      v-for="entry,index in items"
      :key="entry.id"
      class="flex flex-col space-x-4 mt-2 mb-8"
    >
      <h2 class="my-0 font-light">{{ entry.title }}</h2>

      <p>{{ entry.description }}</p>
      <div class="flex space-x-4 mt-2 mb-8 justify-between">
        <NuxtLink
          class="font-normal text-md text-gray-500"
          :to="entry.path"
        >
          Leer mas
        </NuxtLink>

        <itemCheckedButton
          :model-value="isChecked(index)"
          @update:model-value="toggleChecked(index)"
        />

        <div
          v-if="entry.datePosted"
          class="font-normal text-md text-gray-500 flex-grow-1"
        >
          {{ entry.datePosted }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const allCategories = useExampleData();
const route = useRoute();

const category = computed(() => {
  return allCategories.find(
    (categoryItem) =>
      categoryItem.slug === route.params.categoria
  );
});

const items = computed(() => {
  return category.value.items;
});

const title = computed(() => {
  return `${category.value.name} - ${category.value.count} ofertas`;
});
useHead({
  title,
});

const progress = useLocalStorage('progress', []);

const isChecked = (itemIndex) => {
  const categoryIndex = allCategories.findIndex(
    (categoryItem) =>
      categoryItem.slug === category.value.slug
  );
  if (!progress.value[categoryIndex]) {
    return false;
  }

  if (!progress.value[categoryIndex][itemIndex]) {
    return false;
  }

  return progress.value[categoryIndex][itemIndex];
};

const toggleChecked = (itemIndex) => {
  const categoryIndex = allCategories.findIndex(
    (categoryItem) =>
      categoryItem.slug === category.value.slug
  );
  if (!progress.value[categoryIndex]) {
    progress.value[categoryIndex] = [];
  }
  progress.value[categoryIndex][itemIndex] =
    !isChecked(itemIndex);
};
</script>
