import { defineType, defineField } from 'sanity';

export const products = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for the product',
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the product',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the product',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product',
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      description: 'Quantity of the product in stock',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image of the product',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 96,
      },
      description: 'Unique slug for the product, used in URLs',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Size of the product',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      description: 'Discount percentage on the product',
    }),
  ],
});
