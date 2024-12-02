<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      {{ category.name }}
    </p>

  </div>
</template>

<script setup>
const allCategories = useExampleData();
const route = useRoute();

const category = computed(() => {
  return allCategories.find(
    (categoryItem) => categoryItem.slug === route.params.categoria
  );
});

</script>
