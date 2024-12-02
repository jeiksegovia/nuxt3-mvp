import exampleData from './exampleData';

export type Item = {
  id: string; // Unique identifier for the service
  title: string; // Title of the service being offered
  description: string; // Description of the service
  price: string; // Price for the service (e.g., "20,000 COP por hora")
  contact: string; // Contact email of the user offering the service
  location: string; // Physical or virtual location of the service
  datePosted: string; // Date the service was posted (ISO format)
  path?: string; // Path to the item's details page
};

// Type definition for a category containing multiple items
export type Category = {
  slug: string; // URL slug for the category
  name: string; // Name of the category (e.g., "Educación y Tutorías")
  items: Item[]; // List of items under this category
  count?: number; // Number of items in this category
};

export const useExampleData = (): Category[] => {
  const categories: Category[] = exampleData.categories.map(
    (category) => {
      const newItems: Item[] = category.items.map(
        (entry) => ({
          ...entry,
          path: `/detalles/${entry.id}/${entry.title.toLowerCase().replace(/ /g, '-')}`,
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
  return categories
};
