import data from '../store/data.json';

export type DataType = typeof data;
export type SetsT = typeof data.sets;

const SetsArray = Object.entries(data);
export type SetEntriesT = typeof SetsArray;

const SetsEntries = Object.entries(data.sets)[0];
export type SetsEntriesT = typeof SetsEntries;

const CategoryCard = Object.values(data.sets)[0];
export type CategoryDataT = typeof CategoryCard;

const cardsData = Object.entries(CategoryCard);
export type cardsDataT = typeof cardsData;
const cardsValueData = cardsData[1];
export type cardsValueData = typeof cardsValueData;

export type ScoreStateScoreObjT = {
  clicks: number;
  right: number;
  whong: number;
  precent: number;
};
export type ScoreStateScoreArrayT = [string, string, ScoreStateScoreObjT];

export type ScoreStateT = [string, ScoreStateScoreArrayT];
