import Card from './models/card';

const cards = [];

const card1 = new Card('Card 1');
card1.id = 1;
card1.x = 123;
card1.y = 234;
card1.width = 123;
card1.height = 90;
cards.push(card1);

const card2 = new Card('Card 2');
card2.id = 2;
card2.x = 321;
card2.y = 432;
card2.width = 223;
card2.height = 80;
cards.push(card2);

const card3 = new Card('Card 3');
card3.id = 3;
card3.x = 623;
card3.y = 142;
card3.width = 142;
card3.height = 111;
cards.push(card3);

export default cards;
