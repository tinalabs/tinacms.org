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
      label: 'Doc Nav',
      name: 'docNav',
      path: 'content/docNav',
      templates: [
        {
          name: 'docNav',
          label: 'Doc Nav',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'sections',
              type: 'blocks',
              label: 'Sections',
              templates: [
                {
                  name: 'docSection',
                  label: 'Doc Section',
                  fields: [
                    {
                      name: 'id',
                      type: 'text',
                      label: 'ID',
                    },
                    {
                      name: 'slug',
                      type: 'text',
                      label: 'Slug',
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Title',
                    },
                    {
                      name: 'subItems',
                      type: 'group-list',
                      label: 'Sub Items',
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          label: 'Label',
                        },
                        {
                          name: 'value',
                          type: 'reference',
                          collection: 'doc',
                          label: 'Value',
                        },
                        {
                          name: 'subItems',
                          type: 'group-list',
                          label: 'subItems',
                          fields: [
                            {
                              name: 'label',
                              type: 'text',
                              label: 'Label',
                            },
                            {
                              name: 'value',
                              type: 'reference',
                              collection: 'doc',
                              label: 'Value',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'guideSection',
                  label: 'Guide Section',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Title',
                    },
                    {
                      name: 'subItems',
                      type: 'group-list',
                      label: 'Sub Items',
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          label: 'Label',
                        },
                        // {
                        //   name: 'value',
                        //   type: 'text',
                        //   label: 'Value',
                        // },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
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
              collection: 'doc',
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
              collection: 'doc',
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
