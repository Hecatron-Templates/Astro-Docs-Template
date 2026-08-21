import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection } from 'astro:content'
import { ExtendDocsSchema } from '@hecatron/starlight-theme-black-category/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: ExtendDocsSchema,
    }),
  }),
}
