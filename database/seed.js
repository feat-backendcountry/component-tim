// Pants: 1 - 7
// Jacket: 8 - 20
// Shirt: 21 -28
//


var detailImages = {
  // first image is always the image URL!
  pants: [
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D1.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D1.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D3.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D2.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DUS_D3.jpg',
    'https://content.backcountry.com/images/items/900/FJR/FJR00EP/DAROLI_D2.jpg'
  ],

  jacket: [
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

  shirt: [
    'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D2.jpg',
    'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH_D1.jpg'
  ],
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
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBK.jpg',
    sizes: ['S', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'New Taupe Green/Tnf Black',
    detailImages: detailImages.jacket
  },
  {
    id: 9,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLABK.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$98.95',
    color: 'Tnf Black/Tnf Black',
    detailImages: detailImages.jacket
  },
  {
    id: 10,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/ZINORAGRE.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Zinnia Orange/Asphalt Grey',
    detailImages: detailImages.jacket
  },
  {
    id: 11,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/URNVHEGR.jpg',
    sizes: ['L', 'XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Urban Navy Heather/Mid Grey',
    detailImages: detailImages.jacket
  },
  {
    id: 12,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNDAGRHEDAGRHEA.jpg',
    sizes: ['S', 'M', 'L', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Tnf Dark Grey Heather/Mid Grey',
    detailImages: detailImages.jacket
  },
  {
    id: 13,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/SHABLUBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Shady Blue/Shady Blue',
    detailImages: detailImages.jacket
  },
  {
    id: 14,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/HERBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Heron Blue',
    detailImages: detailImages.jacket
  },
  {
    id: 15,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FOLECLTL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Four Leaf Clover/Crystal Teal',
    detailImages: detailImages.jacket
  },
  {
    id: 16,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/FIEREDGRE.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Fiery Red/Asphalt Grey',
    detailImages: detailImages.jacket
  },
  {
    id: 17,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/CARKHANV.jpg',
    sizes: ['XL', 'XXL', '3XL'],
    price: '$69.26',
    prevPrice: '$98.95',
    sale: '30% OFF',
    color: 'Cargo Khaki/Urban Navy',
    detailImages: detailImages.jacket
  },
  {
    id: 18,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/TNFBLUBK.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Tnf Blue/Tnf Black',
    detailImages: detailImages.jacket
  },
  {
    id: 19,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/NETPGRBLWH.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'New Taupe Green/Tnf Black/Tnf White',
    detailImages: detailImages.jacket
  },
  {
    id: 20,
    name: 'The North Face Venture 2 Hooded Jacket - Men\'s',
    priceRange: 'sale $69.26 - $118.95',
    itemType: 'jacket',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF02ZY/MIDGREGRE.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '$89.21',
    prevPrice: '$118.95',
    sale: '25% OFF',
    color: 'Mid Grey/Mid Grey',
    detailImages: detailImages.jacket
  },

  // SHIRT
  // SHIRT
  {
    id: 21,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/CITYELWH.jpg',
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Citrine Yellow/Vintage White',
    detailImages: detailImages.shirt
  },
  {
    id: 22,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'hhttps://content.backcountry.com/images/items/900/TNF/TNF000Y/AZTBLUWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Aztec Blue/Tnf White',
    detailImages: detailImages.shirt
  },
  {
    id: 22,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNFBLAYL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Citrine Yellow',
    detailImages: detailImages.shirt
  },
  {
    id: 23,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/URBNAVBL.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Urban Navy/Storm Blue',
    detailImages: detailImages.shirt
  },
  {
    id: 24,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNWHKHWOCMDEPR.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf White/Moab Khaki Woodchip Camo Desert Print',
    detailImages: detailImages.shirt
  },
  {
    id: 25,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNLTGRHEBKPSPR.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Light Grey Heather/Tnf Black Psychedelic Print',
    detailImages: detailImages.shirt
  },
  {
    id: 26,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/TNFBLAWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Tnf Black/Tnf White',
    detailImages: detailImages.shirt
  },
  {
    id: 27,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/GAGRBKPSPR.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Garden Green/Tnf Black Psychedelic Print',
    detailImages: detailImages.shirt
  },
  {
    id: 28,
    name: 'The North Face Half Dome T-Shirt - Men\'s',
    priceRange: 'sale $17.46 - $34.95',
    itemType: 'shirt',
    imageURL: 'https://content.backcountry.com/images/items/900/TNF/TNF000Y/FIEREDWH.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    price: '$17.46',
    prevPrice: '$24.95',
    sale: '30% OFF',
    color: 'Fiery Red/Tnf White',
    detailImages: detailImages.shirt
  },



];

