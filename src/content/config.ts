import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  })
})

export const collections = { blog }