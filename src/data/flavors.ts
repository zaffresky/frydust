import { Flavor } from '../types';

export const FLAVORS: Flavor[] = [
  {
    id: 'tokyo-umami',
    name: 'Tokyo Umami Smoke',
    tagline: 'Dark garlic crunch, roasted kombu & toasted sesame',
    regionInspiration: 'Tokyo, Japan',
    image: '/images/flavor_tokyo_umami.jpg',
    heatLevel: 2,
    umamiLevel: 5,
    tangLevel: 1,
    keyNotes: ['Black Fermented Garlic', 'Toasted Nori Flakes', 'Roasted White Sesame', 'Cherrywood Smoked Sea Salt'],
    description: 'A deep, savory tsunami that coats every fry in velvety toasted umami. Smoked cherrywood salt meets aged black garlic and crisp sea nori.',
    idealFryCut: 'Shoestring / Thin Cut',
    dipPairing: 'Kewpie Wasabi Mayo or Miso Aioli',
    ingredients: 'Aged black garlic powder, toasted sesame, hand-harvested nori seaweed, smoked sea salt, shichimi togarashi, white pepper, natural rice husk anti-caking.',
    accentColor: '#38bdf8'
  },
  {
    id: 'havana-mojo',
    name: 'Havana Mojo Lime',
    tagline: 'Sun-blistered habanero with tart Persian lime crystals',
    regionInspiration: 'Havana, Cuba',
    image: '/images/flavor_havana_mojo.jpg',
    heatLevel: 4,
    umamiLevel: 3,
    tangLevel: 5,
    keyNotes: ['Persian Lime Crystal', 'Roasted Cuban Habanero', 'Crushed Cumin Seed', 'Smoked Pimentón'],
    description: 'Electric citrus tang strikes first, followed by a warm habanero blossom and earthy roasted cumin. Turns standard fries into irresistible street-food gold.',
    idealFryCut: 'Thick Cut / Belgian Frites',
    dipPairing: 'Garlic Mojo Crema or Cilantro Chimichurri',
    ingredients: 'Crystallized Persian lime juice, slow-roasted habanero, toasted sweet paprika, crushed wild cumin, roasted onion, raw cane sugar, sea salt.',
    accentColor: '#f97316'
  },
  {
    id: 'truffle-masala',
    name: 'Truffle Masala Noir',
    tagline: 'Earthy Himalayan truffle married with roasted Kashmiri spices',
    regionInspiration: 'Kashmir Valley & Piedmont',
    image: '/images/hero_exotic_fries.jpg',
    heatLevel: 2,
    umamiLevel: 5,
    tangLevel: 2,
    keyNotes: ['Black Summer Truffle', 'Roasted Kashmiri Chili', 'Kastoori Fenugreek', 'Black Cardamom'],
    description: 'An opulent marriage of European black truffle aroma and fragrant northern Indian tandoor aromatics. Unapologetically rich and decadent.',
    idealFryCut: 'Crinkle Cut / Truffle Wedges',
    dipPairing: 'Parmigiano-Reggiano Dip or Saffron Garlic Mayo',
    ingredients: 'Black truffle essence & carob carrier, Kashmiri mild chili, toasted cumin, kasoori methi, green cardamom, black salt (Kala Namak), pink rock salt.',
    accentColor: '#fbbf24'
  },
  {
    id: 'seoul-fire-maple',
    name: 'Seoul Fire Maple',
    tagline: 'Fermented sweet gochujang chili & amber maple flakes',
    regionInspiration: 'Seoul, South Korea',
    image: '/images/spice_shaker_bottle.jpg',
    heatLevel: 4,
    umamiLevel: 4,
    tangLevel: 3,
    keyNotes: ['Aged Gochujang Dust', 'Grade-A Maple Sugar', 'Toasted Doenjang', 'Crisp Scallion'],
    description: 'The addictive Korean street-style duality: intense sticky-sweet maple sugar balancing a slow, deep gochujang heat with fermented soybean depth.',
    idealFryCut: 'Waffle Fries / Curly Fries',
    dipPairing: 'Gochujang Ranch or Sweet Honey Butter Dip',
    ingredients: 'Fermented red chili powder (Gochugaru), dehydrated gochujang paste, granulated Quebec maple sugar, dehydrated green scallion, toasted sesame oil powder.',
    accentColor: '#ef4444'
  }
];

export const INITIAL_WAITLIST_COUNT = 3482;
