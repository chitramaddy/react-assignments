import responseJson from './data.json';

/* const restaurants = [
  {
    id: '001',
    img: '',
    name: 'restaurant 1',
    cuisines: ['Indian', 'Indo-Chinese'],
    location: 'Jersey City',
    stars: '4.5',
  },

  {
    id: '002',
    img: '',
    name: 'restaurant 2',
    cuisines: ['Italian', 'American'],
    location: 'Edison',
    stars: '4.8',
  },

  {
    id: '003',
    img: '',
    name: 'restaurant 3',
    cuisines: ['Indian', 'Chat', 'Salads'],
    location: 'Jersey City',
    stars: '4.5',
  },

  {
    id: '004',
    img: '',
    name: 'restaurant 4',
    cuisines: ['Chinese', 'American'],
    location: 'Edison',
    stars: '4.8',
  },
];
*/

const restaurantData = responseJson.data.cards.filter(
  (card) => card.cardType === 'seeAllRestaurants'
);

const restaurants = restaurantData[0].data.data.cards;
export default restaurants;
