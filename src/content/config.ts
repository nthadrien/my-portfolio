// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projetsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        startDate: z.date(),
        duration: z.string(),
        description: z.string(),
        team: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string()) // frameworks
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    projects: projetsCollection,
};