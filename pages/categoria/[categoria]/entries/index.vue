<template>
  <div>
    <ScrollArea class="h-[calc(100vh-h-16)] flex">
      <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
        <button
              v-for="entry,index in items"
            :key="entry.id"
            :class="cn(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent'
            )"
            @click="toggleChecked(index)"
          >
            <div class="flex w-full flex-col gap-1">
              <div class="flex items-center">
                <div class="flex items-center gap-2">
                  <div class="font-semibold">
                    {{ entry.title }}
                  </div>
                  <ClientOnly>
                    <span v-if="!isChecked(index)" class="flex h-2 w-2 rounded-full bg-blue-600" />
                  </ClientOnly>
                </div>
                <ClientOnly>
                  <div
                    :class="cn(
                      'ml-auto text-xs',
                      !isChecked(index)
                        ? 'text-foreground'
                        : 'text-muted-foreground',
                    )"
                  >
                    {{ formatDistanceToNow(new Date(entry.datePosted), { addSuffix: true }) }}
                  </div>
              </ClientOnly>
              </div>

              <div class="text-xs font-medium">
                {{ entry.contact }}
              </div>
            </div>
            <div class="text-xs text-muted-foreground">
              {{ entry.description }}
            </div>
            <div class="flex items-center gap-2">
              <label v-for="label of [entry.location,entry.price]" :key="label"  class="rounded bg-gray-200 p-1  ">
                {{ label }}
              </label>
            </div>
          </button>
      </div>
    </ScrollArea>
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'

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

function getBadgeVariantFromLabel(label) {
  if (['work'].includes(label.toLowerCase()))
    return 'default'

  if (['personal'].includes(label.toLowerCase()))
    return 'outline'

  return 'secondary'
}
</script>
