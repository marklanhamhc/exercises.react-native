import { NewsArticle } from '../models';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const txtgen = require('txtgen');

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const id = () => {
  return Math.floor(Math.random());
};

const create = (): NewsArticle => {
  return {
    id: uuidv4(),
    title: txtgen.sentence(),
    description: txtgen.paragraph(),
    image: `https://picsum.photos/500/500/?test=${Math.random()}`,
    dateTime: randomDate(new Date(2019, 0, 1), new Date()).toISOString()
  };
};

export const newsMocks: NewsArticle[] = [];

for (var i = 0; i < 2000; i++) {
  newsMocks.push(create());
}

newsMocks.sort((a, b) => Date.parse(b.dateTime) - Date.parse(a.dateTime));
