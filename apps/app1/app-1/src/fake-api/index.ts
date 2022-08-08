const games = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image: '/assets/settlers.jfif', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
    description:
      'Help your bug family claim the best real estate in a spilled can of beans.',
    price: 35,
    rating: Math.random(),
  },
  {
    id: 'chess-pie',
    name: 'Chess Pie',
    image: '/assets/chessPie.jpg', // 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
    description:
      'Chess Pie is a delicious classic that’s perfect for a celebration or holiday gathering..',
    price: 15,
    rating: Math.random(),
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/purrfection.jfif', // 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
