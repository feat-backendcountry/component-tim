const mongoose = require('mongoose');
const Items = require('./index.js');
// Pants: 1 - 7
// Jackets: 8 - 20
// Shirts: 21 - 28
// Vests: 29 - 34
// Shoes: 35 - 39
// Sandals: 40 - 45
// Shorts: 46 - 50


var detailImages = {
  // first image is always the image URL!

  pants: [ // 6
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_52.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_53.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_54.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_55.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_56.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_57.jpg'
  ],

  jackets: [ // 13
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_58.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_59.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_60.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_61.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_62.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_63.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_64.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_65.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_66.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_67.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_68.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_69.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_70.jpg'
  ],

  shirts: [ // 2
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_71.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_72.jpg'
  ],

  vests: [ // 13
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_73.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_74.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_75.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_76.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_77.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_78.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_79.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_80.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_81.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_82.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_83.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_84.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_85.jpg',
  ],

  shoes: [ // 7
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_86.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_87.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_88.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_89.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_90.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_91.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_92.jpg',
  ],

  sandals: [ // 6
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_93.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_94.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_95.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_96.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_97.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_98.jpg',
  ],

  shorts: [ // 5
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_99.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_100.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_101.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_102.jpg',
    'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_103.jpg',
  ]
};


var seedItems = [
  {
    // PANTS
    // PANTS
    id: 1,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_1.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54', 'US 38-39/EU 56', 'US 40/EU 58'],
    price: 149.95,
    color: 'Dusk',
    detailImages: detailImages.pants
  },
  {
    id: 2,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_2.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54'],
    price: 149.95,
    color: 'Dark Sand/Dark Olive',
    detailImages: detailImages.pants
  },
  {
    id: 3,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_3.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54', 'US 38-39/EU 56'],
    price: 149.95,
    color: 'Laurel Green/Deep Forest',
    detailImages: detailImages.pants
  },
  {
    id: 4,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_4.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54', 'US 38-39/EU 56', 'US 40/EU 58'],
    price: 149.95,
    color: 'Dark Olive',
    detailImages: detailImages.pants
  },
  {
    id: 5,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_5.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54', 'US 38-39/EU 56', 'US 40/EU 58'],
    price: 149.95,
    color: 'Dark Grey',
    detailImages: detailImages.pants
  },
  {
    id: 6,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_6.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50', 'US 36/EU 52', 'US 37/EU 54', 'US 38-39/EU 56', 'US 40/EU 58'],
    price: 149.95,
    color: 'Black/Black',
    detailImages: detailImages.pants
  },
  {
    id: 7,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    priceRange: 'sale $109.98 - $149.95',
    itemType: 'pants',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/pants_7.jpg',
    sizes: ['US 29/EU 44', 'US 30-31/EU 46', 'US 37/EU 54'],
    price: '$109.98',
    prevPrice: '$149.95',
    sale: '27% OFF',
    color: 'Dark Olive/Dark Olive',
    detailImages: detailImages.pants
  },

  // JACKET
  // JACKET
  {
    id: 8,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_8.jpg',
    sizes: ['S', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'New Taupe Green/Tnf Black/Tnf White',
    detailImages: detailImages.jackets
  },
  {
    id: 9,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_9.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$98.95',
    color: 'Mid Grey/Mid Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 10,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_10.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Zinnia Orange/Asphalt Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 11,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_11.jpg',
    sizes: ['L', 'XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Urban Navy/Zion Orange',
    detailImages: detailImages.jackets
  },
  {
    id: 12,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_12.jpg',
    sizes: ['S', 'M', 'L', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Urban Navy Heather/Mid Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 13,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_13.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Tnf Dark Grey Heather/Tnf Dark Grey Heather/Mid Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 14,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_14.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Shady Blue/Shady Blue',
    detailImages: detailImages.jackets
  },
  {
    id: 15,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_15.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'New Taupe Green/Tnf Black',
    detailImages: detailImages.jackets
  },
  {
    id: 16,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_16.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Mid Grey Ripstop Heather/Mid Grey Ripstop Heather',
    detailImages: detailImages.jackets
  },
  {
    id: 17,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_17.jpg',
    sizes: ['XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Heron Blue',
    detailImages: detailImages.jackets
  },
  {
    id: 18,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_18.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Four Leaf Clover/Crystal Teal',
    detailImages: detailImages.jackets
  },
  {
    id: 19,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_19.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Fiery Red/Asphalt Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 20,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/jacket_20.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Cargo Khaki/Urban Navy',
    detailImages: detailImages.jackets
  },

  // SHIRT
  // SHIRT
  {
    id: 21,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_21.jpg',
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Citrine Yellow/Vintage White',
    detailImages: detailImages.shirts
  },
  {
    id: 22,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_22.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Urban Navy/Storm Blue',
    detailImages: detailImages.shirts
  },
  {
    id: 23,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_23.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf White/Moab Khaki Woodchip Camo Desert Print',
    detailImages: detailImages.shirts
  },
  {
    id: 24,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_24.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Light Grey Heather/Tnf Black Psychedelic Print',
    detailImages: detailImages.shirts
  },
  {
    id: 25,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_25.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Tnf White',
    detailImages: detailImages.shirts
  },
  {
    id: 26,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_26.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Citrine Yellow',
    detailImages: detailImages.shirts
  },
  {
    id: 27,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_27.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Garden Green/Tnf Black Psychedelic Print',
    detailImages: detailImages.shirts
  },
  {
    id: 28,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_28.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Fiery Red/Tnf White',
    detailImages: detailImages.shirts
  },
  {
    id: 29,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shirt_29.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Aztec Blue/Tnf White',
    detailImages: detailImages.shirts
  },

  // VEST
  // VEST
  {
    id: 30,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_30.jpg',
    sizes: ['XS', 'S', 'M'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Pelican',
    detailImages: detailImages.vests
  },
  {
    id: 31,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_31.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Birch White',
    detailImages: detailImages.vests
  },
  {
    id: 32,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_32.jpg',
    sizes: ['S', 'M'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Light Violet Blue',
    detailImages: detailImages.vests
  },
  {
    id: 33,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_33.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Classic Navy',
    detailImages: detailImages.vests
  },
  {
    id: 34,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_34.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Black',
    detailImages: detailImages.vests
  },
  {
    id: 35,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/vest_35.jpg',
    sizes: ['XXS'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Atoll Blue',
    detailImages: detailImages.vests
  },

  // SHOES
  // SHOES
  {
    id: 36,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shoes_36.jpg',
    sizes: ['6.0', '6.5', '7.0', '8.0', '8.5', '9.0', '9.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Black/White-gunsmoke-oil Grey',
    detailImages: detailImages.shoes
  },
  {
    id: 37,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shoes_37.jpg',
    sizes: ['6.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Aluminum/Sail-Black',
    detailImages: detailImages.shoes
  },
  {
    id: 38,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shoes_38.jpg',
    sizes: ['6.0', '6.5', '7.0', '7.5', '8.5', '9.0', '9.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Half Blue/Black-hyper Pink-white',
    detailImages: detailImages.shoes
  },
  {
    id: 39,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shoes_39.jpg',
    sizes: ['6.5', '7.5', '8.0', '9.0', '9.5', '10.0', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Ember Glow/Psychic Pink-Oil Grey',
    detailImages: detailImages.shoes
  },
  {
    id: 40,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shoes_40.jpg',
    sizes: ['6.0', '6.5', '8.0', '8.5', '9.0', '9.5', '10.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'True Berry/Plum Chalk-Vast Grey',
    detailImages: detailImages.shoes
  },

  // SANDALS
  // SANDALS
  {
    id: 41,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_41.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Stone Birkibuc',
    detailImages: detailImages.sandals
  },
  {
    id: 42,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_42.jpg',
    sizes: ['38.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Silver Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 43,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_43.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Mocha Birkibuc',
    detailImages: detailImages.sandals
  },
  {
    id: 44,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_44.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Licorice Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 45,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_45.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Golden Brown Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 46,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/sandals_46.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Black Birko Flor',
    detailImages: detailImages.sandals
  },

  // SHORTS
  // SHORTS
  {
    id: 47,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shorts_47.jpg',
    sizes: ['28x10', '30x10', '30x12', '31x10', '31x12', '32x10', '32x12', '33x10', '33x12', '34x10', '34x12', '35x10', '35x12', '36x10', '36x12', '38x10', '38x12', '40x10', '40x12'],
    price: '$68.95',
    prevPrice: '',
    sale: '',
    color: 'Bronzed',
    detailImages: detailImages.shorts
  },
  {
    id: 48,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shorts_48.jpg',
    sizes: ['31x10', '31x12', '32x10', '33x10', '34x10', '35x10', '36x10', '38x10', '38x12'],
    price: '$68.95',
    prevPrice: '',
    sale: '',
    color: 'Charcoal',
    detailImages: detailImages.shorts
  },
  {
    id: 49,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shorts_49.jpg',
    sizes: ['28x10', '30x10', '31x10', '31x12', '32x10', '33x10', '33x12', '35x10', '35x12', '36x10', '38x10', '40x10', '40x12'],
    price: '$51.96',
    prevPrice: '$68.95',
    sale: '25% OFF',
    color: 'Dark Khaki',
    detailImages: detailImages.shorts
  },
  {
    id: 50,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shorts_50.jpg',
    sizes: ['28x10', '30x12', '31x10', '31x12', '33x10', '33x12', '34x10', '35x12', '36x12', '38x10', '40x10', '40x12'],
    price: '$51.96',
    prevPrice: '$68.95',
    sale: '25% OFF',
    color: 'Mud',
    detailImages: detailImages.shorts
  },
  {
    id: 51,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/shorts_51.jpg',
    sizes: ['28x10', '30x10', '30x12', '31x10', '31x12', '32x10', '33x12', '34x10', '34x12', '35x10', '35x12', '36x10', '36x12', '38x10', '38x12', '40x10', '40x12'],
    price: '$68.95',
    prevPrice: '',
    sale: '',
    color: 'Nori Green',
    detailImages: detailImages.shorts
  },


  // DETAILED IMAGES
  // PANTS
  {
    id: 52,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_52.jpg',
    itemType: 'pants'
  },
  {
    id: 53,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_53.jpg',
    itemType: 'pants'
  },
  {
    id: 54,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_54.jpg',
    itemType: 'pants'
  },
  {
    id: 55,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_55.jpg',
    itemType: 'pants'
  },
  {
    id: 56,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_56.jpg',
    itemType: 'pants'
  },
  {
    id: 57,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_57.jpg',
    itemType: 'pants'
  },

  // JACKETS
  {
    id: 58,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_58.jpg',
    itemType: 'jackets'
  },
  {
    id: 59,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_59.jpg',
    itemType: 'jackets'
  },
  {
    id: 60,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_60.jpg',
    itemType: 'jackets'
  },
  {
    id: 61,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_61.jpg',
    itemType: 'jackets'
  },
  {
    id: 62,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_62.jpg',
    itemType: 'jackets'
  },
  {
    id: 63,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_63.jpg',
    itemType: 'jackets'
  },
  {
    id: 64,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_64.jpg',
    itemType: 'jackets'
  },
  {
    id: 65,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_65.jpg',
    itemType: 'jackets'
  },
  {
    id: 66,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_66.jpg',
    itemType: 'jackets'
  },
  {
    id: 67,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_67.jpg',
    itemType: 'jackets'
  },
  {
    id: 68,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_68.jpg',
    itemType: 'jackets'
  },
  {
    id: 69,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_69.jpg',
    itemType: 'jackets'
  },
  {
    id: 70,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_70.jpg',
    itemType: 'jackets'
  },

  // SHIRTS
  {
    id: 71,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_71.jpg',
    itemType: 'shirts'
  },
  {
    id: 72,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_72.jpg',
    itemType: 'shirts'
  },

  // VESTS
  {
    id: 73,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_73.jpg',
    itemType: 'vests'
  },
  {
    id: 74,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_74.jpg',
    itemType: 'vests'
  },
  {
    id: 75,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_75.jpg',
    itemType: 'vests'
  },
  {
    id: 76,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_76.jpg',
    itemType: 'vests'
  },
  {
    id: 77,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_77.jpg',
    itemType: 'vests'
  },
  {
    id: 78,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_78.jpg',
    itemType: 'vests'
  },
  {
    id: 79,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_79.jpg',
    itemType: 'vests'
  },
  {
    id: 80,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_80.jpg',
    itemType: 'vests'
  },
  {
    id: 81,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_81.jpg',
    itemType: 'vests'
  },
  {
    id: 82,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_82.jpg',
    itemType: 'vests'
  },
  {
    id: 83,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_83.jpg',
    itemType: 'vests'
  },
  {
    id: 84,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_84.jpg',
    itemType: 'vests'
  },
  {
    id: 85,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_85.jpg',
    itemType: 'vests'
  },

  // SHOES
  {
    id: 86,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_86.jpg',
    itemType: 'shoes'
  },
  {
    id: 87,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_87.jpg',
    itemType: 'shoes'
  },
  {
    id: 88,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_88.jpg',
    itemType: 'shoes'
  },
  {
    id: 89,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_89.jpg',
    itemType: 'shoes'
  },
  {
    id: 90,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_90.jpg',
    itemType: 'shoes'
  },
  {
    id: 91,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_91.jpg',
    itemType: 'shoes'
  },
  {
    id: 92,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_92.jpg',
    itemType: 'shoes'
  },

  // SANDALS
  {
    id: 93,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_93.jpg',
    itemType: 'sandals'
  },
  {
    id: 94,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_94.jpg',
    itemType: 'sandals'
  },
  {
    id: 95,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_95.jpg',
    itemType: 'sandals'
  },
  {
    id: 96,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_96.jpg',
    itemType: 'sandals'
  },
  {
    id: 97,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_97.jpg',
    itemType: 'sandals'
  },
  {
    id: 98,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_98.jpg',
    itemType: 'sandals'
  },

  // SHORTS
  {
    id: 99,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_99.jpg',
    itemType: 'shorts'
  },
  {
    id: 100,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_100.jpg',
    itemType: 'shorts'
  },
  {
    id: 101,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_101.jpg',
    itemType: 'shorts'
  },
  {
    id: 102,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_102.jpg',
    itemType: 'shorts'
  },
  {
    id: 103,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://backcountry-items.s3-us-west-1.amazonaws.com/detailed_103.jpg',
    itemType: 'shorts'
  }

];

// seed into database
const seedFunction = () => {
  Items.create(seedItems)
  .then( () => {
    console.log('database seeded!');
    mongoose.connection.close();
  })
  .catch( (err) => console.error(err))
};

seedFunction();

