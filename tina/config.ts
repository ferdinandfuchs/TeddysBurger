import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'siteSettings',
        label: 'Site Settings',
        path: 'content/settings',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Restaurant Name',
            required: true,
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
          },
          {
            type: 'string',
            name: 'tagline',
            label: 'Tagline',
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Phone Number',
          },
          {
            type: 'string',
            name: 'email',
            label: 'Email',
          },
          {
            type: 'string',
            name: 'domain',
            label: 'Website Domain',
          },
          {
            type: 'string',
            name: 'address',
            label: 'Address',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'openingHours',
            label: 'Opening Hours',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.day || 'New Opening Hours',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'day',
                label: 'Day',
                required: true,
              },
              {
                type: 'string',
                name: 'hours',
                label: 'Hours',
                required: true,
              },
            ],
          },
          {
            type: 'object',
            name: 'socialLinks',
            label: 'Social Links',
            fields: [
              {
                type: 'string',
                name: 'instagram',
                label: 'Instagram URL',
              },
              {
                type: 'string',
                name: 'facebook',
                label: 'Facebook URL',
              },
            ],
          },
        ],
      },
      {
        name: 'menuItem',
        label: 'Menu Items',
        path: 'content/menu',
        format: 'json',
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values?.name?.toLowerCase().replace(/\s+/g, '-') || 'new-item';
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'number',
            name: 'price',
            label: 'Price (€)',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: [
              { value: 'burgers', label: 'Burgers' },
              { value: 'kids', label: 'Kids Menus' },
              { value: 'fingerfood', label: 'Fingerfood' },
              { value: 'sides', label: 'Sides' },
              { value: 'drinks', label: 'Drinks' },
            ],
          },
          {
            type: 'boolean',
            name: 'available',
            label: 'Available',
            ui: {
              component: 'toggle',
            },
          },
        ],
        defaultItem: {
          available: true,
        },
      },
      {
        name: 'pageContent',
        label: 'Page Content',
        path: 'content/pages',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
                required: true,
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Subtitle',
              },
              {
                type: 'image',
                name: 'backgroundImage',
                label: 'Background Image',
              },
              {
                type: 'image',
                name: 'backgroundVideo',
                label: 'Background Video (MP4)',
              },
              {
                type: 'string',
                name: 'buttonText',
                label: 'Button Text',
              },
            ],
          },
        ],
      },
      {
        name: 'location',
        label: 'Location',
        path: 'content/location',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Location Name',
            required: true,
          },
          {
            type: 'string',
            name: 'address',
            label: 'Address',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Phone Number',
          },
          {
            type: 'object',
            name: 'openingHours',
            label: 'Opening Hours',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.day || 'New Day',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'day',
                label: 'Day',
                required: true,
              },
              {
                type: 'string',
                name: 'hours',
                label: 'Hours',
                required: true,
              },
            ],
          },
          {
            type: 'image',
            name: 'image',
            label: 'Location Image',
          },
        ],
      },
      {
        name: 'galleryImage',
        label: 'Gallery',
        path: 'content/gallery',
        format: 'json',
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values?.caption?.toLowerCase().replace(/\s+/g, '-') || `gallery-${Date.now()}`;
            },
          },
        },
        fields: [
          {
            type: 'image',
            name: 'image',
            label: 'Image',
            required: true,
          },
          {
            type: 'string',
            name: 'caption',
            label: 'Caption',
            isTitle: true,
            required: true,
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
            description: 'Lower numbers appear first',
          },
        ],
        defaultItem: {
          order: 0,
        },
      },
    ],
  },
});
