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
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D1.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D1.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D3.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D2.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D3.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D2.jpg'
  ],

  jackets: [ // 13
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNDAGRHEDAGRHEA_D3.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR_D2.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FOLECLTL_D5.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV_D2.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URBNAVOR_D5.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV_D5.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URBNAVOR_D3.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLUBK_D1.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBK_D3.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL_D3.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLABK_D4.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL_D5.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR_D5.jpg'
  ],

  shirts: [ // 2
    'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D2.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D1.jpg'
  ],

  vests: [ // 13
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/LTVIBL_D2.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D6.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/PEL_D2.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BK_D2.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/PEL_D6.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D7.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BK_D3.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/LTVIBL_D3.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/ATOBL_D2.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D9.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D8.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/CLANV_D3.jpg',
    'https://content.backcountry.com/images/items/900/PAT/PAT010X/CLANV_D2.jpg'
  ],

  shoes: [ // 7
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/TRBECHGR_D1.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/BLAGRE_D2.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D1.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D2.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/BLAGRE_D1.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D3.jpg',
    'https://content.backcountry.com/images/items/900/NKE/NKE01N4/EMGLPIGR_D1.jpg'
  ],

  sandals: [ // 6
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/SNBIR_D1.jpg',
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/ANLABIFL_D1.jpg',
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/GOBNBIFL_D1.jpg',
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/LICBIRFLO_D1.jpg',
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/BKBIRFLO_D1.jpg',
    'https://content.backcountry.com/images/items/900/BRK/BRK002X/MCBIR_D1.jpg'
  ],

  shorts: [ // 5
    'https://content.backcountry.com/images/items/900/PRA/PRA01JT/DARKH_D2.jpg',
    'https://content.backcountry.com/images/items/900/PRA/PRA01JT/MUD_D1.jpg',
    'https://content.backcountry.com/images/items/900/PRA/PRA01JT/BRO_D1.jpg',
    'https://content.backcountry.com/images/items/900/PRA/PRA01JT/CH_D3.jpg',
    'https://content.backcountry.com/images/items/900/PRA/PRA01JT/BRO_D2.jpg'
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DARSANOV.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/LAUGREFO.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DARGREA.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/BK.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROV.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBK.jpg',
    sizes: ['S', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'New Taupe Green/Tnf Black',
    detailImages: detailImages.jackets
  },
  {
    id: 9,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLABK.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$98.95',
    color: 'Tnf Black/Tnf Black',
    detailImages: detailImages.jackets
  },
  {
    id: 10,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/ZINORAGRE.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR.jpg',
    sizes: ['L', 'XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Urban Navy Heather/Mid Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 12,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNDAGRHEDAGRHEA.jpg',
    sizes: ['S', 'M', 'L', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Tnf Dark Grey Heather/Mid Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 13,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Shady Blue/Shady Blue',
    detailImages: detailImages.jackets
  },
  {
    id: 14,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/HERBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Heron Blue',
    detailImages: detailImages.jackets
  },
  {
    id: 15,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FOLECLTL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Four Leaf Clover/Crystal Teal',
    detailImages: detailImages.jackets
  },
  {
    id: 16,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FIEREDGRE.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Fiery Red/Asphalt Grey',
    detailImages: detailImages.jackets
  },
  {
    id: 17,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV.jpg',
    sizes: ['XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Cargo Khaki/Urban Navy',
    detailImages: detailImages.jackets
  },
  {
    id: 18,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLUBK.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Tnf Blue/Tnf Black',
    detailImages: detailImages.jackets
  },
  {
    id: 19,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBLWH.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'New Taupe Green/Tnf Black/Tnf White',
    detailImages: detailImages.jackets
  },
  {
    id: 20,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jackets',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/MIDGREGRE.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Mid Grey/Mid Grey',
    detailImages: detailImages.jackets
  },

  // SHIRT
  // SHIRT
  {
    id: 21,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/CITYELWH.jpg',
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
    imageURL: 'hhttps://content.backcountry.com/images/items/900/TNF/TNF000Y/AZTBLUWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Aztec Blue/Tnf White',
    detailImages: detailImages.shirts
  },
  {
    id: 22,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNFBLAYL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Citrine Yellow',
    detailImages: detailImages.shirts
  },
  {
    id: 23,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/URBNAVBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Urban Navy/Storm Blue',
    detailImages: detailImages.shirts
  },
  {
    id: 24,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNWHKHWOCMDEPR.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf White/Moab Khaki Woodchip Camo Desert Print',
    detailImages: detailImages.shirts
  },
  {
    id: 25,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNLTGRHEBKPSPR.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Light Grey Heather/Tnf Black Psychedelic Print',
    detailImages: detailImages.shirts
  },
  {
    id: 26,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNFBLAWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Tnf White',
    detailImages: detailImages.shirts
  },
  {
    id: 27,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirts',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/GAGRBKPSPR.jpg',
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
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Fiery Red/Tnf White',
    detailImages: detailImages.shirts
  },

  // VEST
  // VEST
  {
    id: 29,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/PEL.jpg',
    sizes: ['XS', 'S', 'M'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Pelican',
    detailImages: detailImages.vests
  },
  {
    id: 30,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Birch White',
    detailImages: detailImages.vests
  },
  {
    id: 31,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/LTVIBL.jpg',
    sizes: ['S', 'M'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Light Violet Blue',
    detailImages: detailImages.vests
  },
  {
    id: 32,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/CLANV.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Classic Navy',
    detailImages: detailImages.vests
  },
  {
    id: 33,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BK.jpg',
    sizes: ['XXS', 'XS', 'S', 'M', 'XL'],
    price: '$69.30',
    prevPrice: '$99.00',
    sale: '30% OFF',
    color: 'Black',
    detailImages: detailImages.vests
  },
  {
    id: 34,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    priceRange: 'sale $69.30 - $99.00',
    itemType: 'vests',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/ATOBL.jpg',
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
    id: 35,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/BLAGRE.jpg',
    sizes: ['6.0', '6.5', '7.0', '8.0', '8.5', '9.0', '9.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Black/White-gunsmoke-oil Grey',
    detailImages: detailImages.shoes
  },
  {
    id: 36,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/ALU.jpg',
    sizes: ['6.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Aluminum/Sail-Black',
    detailImages: detailImages.shoes
  },
  {
    id: 37,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN.jpg',
    sizes: ['6.0', '6.5', '7.0', '7.5', '8.5', '9.0', '9.5', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Half Blue/Black-hyper Pink-white',
    detailImages: detailImages.shoes
  },
  {
    id: 38,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/EMGLPIGR.jpg',
    sizes: ['6.5', '7.5', '8.0', '9.0', '9.5', '10.0', '11.0'],
    price: '$89.96',
    prevPrice: '$119.95',
    sale: '25% OFF',
    color: 'Ember Glow/Psychic Pink-Oil Grey',
    detailImages: detailImages.shoes
  },
  {
    id: 39,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    priceRange: 'sale $89.96 - $119.95',
    itemType: 'shoes',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/TRBECHGR.jpg',
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
    id: 40,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/SNBIR.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Stone Birkibuc',
    detailImages: detailImages.sandals
  },
  {
    id: 41,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/SNBIR.jpg',
    sizes: ['38.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Silver Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 42,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/MCBIR.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Mocha Birkibuc',
    detailImages: detailImages.sandals
  },
  {
    id: 43,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/LICBIRFLO.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Licorice Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 44,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/GOBNBIFL.jpg',
    sizes: ['36.0', '37.0', '38.0', '39.0', '40.0', '41.0', '42.0'],
    price: '$100.00',
    prevPrice: '',
    sale: '',
    color: 'Golden Brown Birko Flor',
    detailImages: detailImages.sandals
  },
  {
    id: 45,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    priceRange: '$100.00',
    itemType: 'sandals',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/BKBIRFLO.jpg',
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
    id: 46,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/BRO.jpg',
    sizes: ['28x10', '30x10', '30x12', '31x10', '31x12', '32x10', '32x12', '33x10', '33x12', '34x10', '34x12', '35x10', '35x12', '36x10', '36x12', '38x10', '38x12', '40x10', '40x12'],
    price: '$68.95',
    prevPrice: '',
    sale: '',
    color: 'Bronzed',
    detailImages: detailImages.shorts
  },
  {
    id: 47,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/CH.jpg',
    sizes: ['31x10', '31x12', '32x10', '33x10', '34x10', '35x10', '36x10', '38x10', '38x12'],
    price: '$68.95',
    prevPrice: '',
    sale: '',
    color: 'Charcoal',
    detailImages: detailImages.shorts
  },
  {
    id: 48,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/DARKH.jpg',
    sizes: ['28x10', '30x10', '31x10', '31x12', '32x10', '33x10', '33x12', '35x10', '35x12', '36x10', '38x10', '40x10', '40x12'],
    price: '$51.96',
    prevPrice: '$68.95',
    sale: '25% OFF',
    color: 'Dark Khaki',
    detailImages: detailImages.shorts
  },
  {
    id: 49,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/MUD.jpg',
    sizes: ['28x10', '30x12', '31x10', '31x12', '33x10', '33x12', '34x10', '35x12', '36x12', '38x10', '40x10', '40x12'],
    price: '$51.96',
    prevPrice: '$68.95',
    sale: '25% OFF',
    color: 'Mud',
    detailImages: detailImages.shorts
  },
  {
    id: 50,
    name: 'Prana Stretch Zion Short - Men\'s',
    priceRange: 'sale $51.71 - $68.95',
    itemType: 'shorts',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/NORGN.jpg',
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
    id: 51,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D1.jpg',
    itemType: 'pants'
  },
  {
    id: 52,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D1.jpg',
    itemType: 'pants'
  },
  {
    id: 53,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D3.jpg',
    itemType: 'pants'
  },
  {
    id: 54,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D2.jpg',
    itemType: 'pants'
  },
  {
    id: 55,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D3.jpg',
    itemType: 'pants'
  },
  {
    id: 56,
    name: 'Fjallraven Vidda Pro Trouser - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D2.jpg',
    itemType: 'pants'
  },

  // JACKETS
  {
    id: 57,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNDAGRHEDAGRHEA_D3.jpg',
    itemType: 'jackets'
  },
  {
    id: 58,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR_D2.jpg',
    itemType: 'jackets'
  },
  {
    id: 59,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FOLECLTL_D5.jpg',
    itemType: 'jackets'
  },
  {
    id: 60,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV_D2.jpg',
    itemType: 'jackets'
  },
  {
    id: 61,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URBNAVOR_D5.jpg',
    itemType: 'jackets'
  },
  {
    id: 62,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV_D5.jpg',
    itemType: 'jackets'
  },
  {
    id: 63,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URBNAVOR_D3.jpg',
    itemType: 'jackets'
  },
  {
    id: 64,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLUBK_D1.jpg',
    itemType: 'jackets'
  },
  {
    id: 65,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBK_D3.jpg',
    itemType: 'jackets'
  },
  {
    id: 66,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL_D3.jpg',
    itemType: 'jackets'
  },
  {
    id: 67,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLABK_D4.jpg',
    itemType: 'jackets'
  },
  {
    id: 68,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL_D5.jpg',
    itemType: 'jackets'
  },
  {
    id: 69,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR_D5.jpg'
    itemType: 'jackets'
  },

  // SHIRTS
  {
    id: 70,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D2.jpg',
    itemType: 'shirts'
  },
  {
    id: 71,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D1.jpg',
    itemType: 'shirts'
  },

  // VESTS
  {
    id: 72,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/LTVIBL_D2.jpg',
    itemType: 'vests'
  },
  {
    id: 73,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D6.jpg',
    itemType: 'vests'
  },
  {
    id: 74,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/PEL_D2.jpg',
    itemType: 'vests'
  },
  {
    id: 75,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BK_D2.jpg',
    itemType: 'vests'
  },
  {
    id: 76,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/PEL_D6.jpg',
    itemType: 'vests'
  },
  {
    id: 77,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D7.jpg',
    itemType: 'vests'
  },
  {
    id: 78,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BK_D3.jpg',
    itemType: 'vests'
  },
  {
    id: 79,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/LTVIBL_D3.jpg',
    itemType: 'vests'
  },
  {
    id: 80,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/ATOBL_D2.jpg',
    itemType: 'vests'
  },
  {
    id: 81,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D9.jpg',
    itemType: 'vests'
  },
  {
    id: 82,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/BIRWH_D8.jpg',
    itemType: 'vests'
  },
  {
    id: 82,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/CLANV_D3.jpg',
    itemType: 'vests'
  },
  {
    id: 83,
    name: 'Patagonia Better Sweater Fleece Vest - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PAT/PAT010X/CLANV_D2.jpg',
    itemType: 'vests'
  },

  // SHOES
  {
    id: 84,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/TRBECHGR_D1.jpg',
    itemType: 'shoes'
  },
  {
    id: 85,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/BLAGRE_D2.jpg',
    itemType: 'shoes'
  },
  {
    id: 86,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D1.jpg',
    itemType: 'shoes'
  },
  {
    id: 87,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D2.jpg',
    itemType: 'shoes'
  },
  {
    id: 88,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/BLAGRE_D1.jpg',
    itemType: 'shoes'
  },
  {
    id: 89,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/HALBLUPIN_D3.jpg',
    itemType: 'shoes'
  },
  {
    id: 90,
    name: 'Nike Air Zoom Pegasus 35 Running Shoe - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/NKE/NKE01N4/EMGLPIGR_D1.jpg',
    itemType: 'shoes'
  },

  // SANDALS
  {
    id: 91,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/SNBIR_D1.jpg',
    itemType: 'sandals'
  },
  {
    id: 92,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/ANLABIFL_D1.jpg',
    itemType: 'sandals'
  },
  {
    id: 93,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/GOBNBIFL_D1.jpg',
    itemType: 'sandals'
  },
  {
    id: 94,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/LICBIRFLO_D1.jpg',
    itemType: 'sandals'
  },
  {
    id: 95,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/BKBIRFLO_D1.jpg',
    itemType: 'sandals'
  },
  {
    id: 96,
    name: 'Birkenstock Mayari Sandal - Women\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/BRK/BRK002X/MCBIR_D1.jpg',
    itemType: 'sandals'
  },

  // SHORTS
  {
    id: 97,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/DARKH_D2.jpg',
    itemType: 'shorts'
  },
  {
    id: 98,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/MUD_D1.jpg',
    itemType: 'shorts'
  },
  {
    id: 99,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/BRO_D1.jpg',
    itemType: 'shorts'
  },
  {
    id: 100,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/CH_D3.jpg',
    itemType: 'shorts'
  },
  {
    id: 101,
    name: 'Prana Stretch Zion Short - Men\'s',
    imageURL: 'https://content.backcountry.com/images/items/900/PRA/PRA01JT/BRO_D2.jpg',
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

