export const pink = '#EC3EA8';
const underlayPink = '#ff8cd2';
const actionButtonColorPink = '#ff0a9f';
const imagePink = require('../assets/images/pink.png');

export const purple = '#6756A8';
const underlayPurple = '#9b8ece';
const actionButtonColorPurple = '#9682e5';
const warningBackground = '#EAEB5E';
const warningText = '#666804';
const imagePurple = require('../assets/images/purple.png');

export const yellow = '#f9fc2f';
const underlayYellow = '#feff8e';
const actionButtonColorYellow = '#fdff75';
const imageYellow = require('../assets/images/yellow.png');

export const green = '#56A87F';
const underlayGreen = '#95edc1';
const actionButtonColorGreen = '#82ffc0';
const imageGreen = require('../assets/images/green.png');

export const pinkRed = '#CB5C5C';
const underlayPinkRed = '#ff8c8c';
const actionButtonColorPinkRed = '#ff5454';
const imagePinkRed = require('../assets/images/pinkred.png');

const tintColor = pink;
const underlayColor = underlayPink;
const actionButtonColor = actionButtonColorPink;
const image = imagePink;

const theme = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  underlayColor,
  actionButtonColor,
  mainBackground: '#fff',
  line: '#D0D0D4',
  noMainTextFont: '#9EA2A7',
  mainTextFont: '#000',
  image,
};

export const pinkTheme = {
  ...theme,
  tintColor: pink,
  tabIconSelected: tintColor,
  noticeBackground: tintColor,
  underlayColor: underlayPink,
  actionButtonColor: actionButtonColorPink,
  image: imagePink,
};

export const yellowTheme = {
  ...theme,
  tintColor: yellow,
  tabIconSelected: tintColor,
  noticeBackground: tintColor,
  underlayColor: underlayYellow,
  actionButtonColor: actionButtonColorYellow,
  image: imageYellow,
};

export const purpleTheme = {
  ...theme,
  tintColor: purple,
  tabIconSelected: tintColor,
  noticeBackground: tintColor,
  underlayColor: underlayPurple,
  actionButtonColor: actionButtonColorPurple,
  image: imagePurple,
};

export const greenTheme = {
  ...theme,
  tintColor: green,
  tabIconSelected: tintColor,
  noticeBackground: tintColor,
  underlayColor: underlayGreen,
  actionButtonColor: actionButtonColorGreen,
  image: imageGreen,
};

export const pinkRedTheme = {
  ...theme,
  tintColor: pinkRed,
  tabIconSelected: tintColor,
  noticeBackground: tintColor,
  underlayColor: underlayPinkRed,
  actionButtonColor: actionButtonColorPinkRed,
  image: imagePinkRed,
};

export default theme;
