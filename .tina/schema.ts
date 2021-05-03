import { defineSchema } from 'tina-graphql-gateway-cli'

const consumesField = {
  name: 'consumes',
  label: 'Consumes',
  type: 'group-list' as const,
  fields: [
    {
      type: 'text' as const,
      label: 'File',
      name: 'file',
    },
    {
      type: 'text' as const,
      label: 'Description',
      name: 'description',
    },
    {
      type: 'text' as const,
      label: 'Details',
      name: 'details',
    },
  ],
}

export default defineSchema({
  collections: [
    {
      label: 'Doc',
      name: 'doc',
      path: 'content/docs',
      templates: [
        {
          name: 'doc',
          label: 'Doc Teamplte',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'author',
              type: 'text',
              label: 'Author',
            },
            {
              name: 'date',
              type: 'text',
              label: 'Date',
            },
            {
              name: 'prev',
              type: 'reference',
              label: 'Prev',
              collection: 'blog',
            },
            {
              name: 'id',
              type: 'text',
              label: 'ID',
            },
            {
              name: 'last_edited',
              type: 'text',
              label: 'Last Edited',
            },
            {
              name: 'next',
              type: 'reference',
              label: 'Next',
              collection: 'blog',
            },
            consumesField,
          ],
        },
      ],
    },
    {
      label: 'Blog',
      name: 'blog',
      path: 'content/blog',
      templates: [
        {
          name: 'basic',
          label: 'Basic',
          fields: [
            {
              name: 'date',
              type: 'text',
              label: 'Date',
            },
            {
              name: 'author',
              type: 'text',
              label: 'Author',
            },
            {
              name: 'last_edited',
              type: 'text',
              label: 'Last Edited',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'draft',
              type: 'toggle',
              label: 'Draft',
            },
            {
              name: 'prev',
              type: 'reference',
              label: 'Prev',
              collection: 'blog',
            },
            {
              name: 'next',
              type: 'reference',
              label: 'Next',
              collection: 'blog',
            },
            consumesField,
          ],
        },
      ],
    },
  ],
})
