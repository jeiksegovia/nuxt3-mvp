import exampleData from './exampleData';

export const useExampleData = () => {
  const categories = exampleData.categories.map(
    (category) => {
      const newItems = category.items.map(
        (entry) => ({
          ...entry,
          path: `/detalles/${entry.id}/${entry.title}`,
        })
      );
      const slug = category.name.toLowerCase().replace(/ /g, '-');
      return {
        ...category,
        items: newItems,
        count: newItems?.length || 0,
        slug
      };
    }
  );
  return categories;
};
