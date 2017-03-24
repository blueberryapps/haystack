const items = [
  {
    date: { day: 1, month: 1, year: 1996 },
    hideDate: true,
    title: 'Once upon a time…',
    text: 'Long, long ago…'
  },
  {
    date: { day: 2, month: 1, year: 1996 },
    hideDate: true,
    picture: './images/prince.png',
    pictureBottom: true,
    title: 'Prince of Persia!',
    text: 'In our primary school years, we spent our nights playing Prince of Persia in between homework.'
  },
  {
    date: { day: 2, month: 9, year: 1996 },
    picture: './images/hardware.png',
    pictureBottom: true,
    title: 'What does that Prince run on?',
    text: 'The Prince of Persia sequel was disappointing and we got more curious about the machine it was running on. And that never left us.'
  },
  {
    date: { day: 3, month: 9, year: 1996 },
    hideDate: true,
    picture: './images/disketa.png',
    title: 'Hardware -> software -> Internet',
    text: 'We went from hardware to software. And then the Internet came. We had no idea that it would be making us a living one day.'
  },
  {
    date: { day: 4, month: 9, year: 1996 },
    hideDate: true,
    title: 'The red pill or the blue pill?',
    text: 'At the turn of the millennium, we were waiting in front of our monitors for someone outside the Matrix to come and pull that cable out of our head. Nobody came and we made do with a life in the Matrix, still studying the Internet and computer programs.'
  },
  {
    date: { day: 5, month: 9, year: 1996 },
    hideDate: true,
    title: 'The buck stops here!',
    text: 'In high school, we started taking our interest in computers and the Internet seriously. Our parents didn\'t.<br /><br /> … asteroids came and then our life started anew'
  },
  {
    date: { day: 1, month: 1, year: 2007 },
    hideDate: true,
    title: 'Nuclear physics or IT?',
    text: 'In uni, we started taking our interest in computers and the Internet very seriously. Our parents stopped understanding what we were studying.'
  },
  {
    date: { day: 1, month: 1, year: 2008 },
    hideDate: true,
    title: 'When I\'m big, I\'m going to be an IT guy!',
    text: 'After university, actually during it too, we started taking our interest in computers and the Internet as something that we could do for a living. Our parents definitively stopped understanding us.'
  },
  {
    date: { day: 2, month: 1, year: 2008 },
    hideDate: true,
    title: 'Zologicka.cz',
    text: 'CTU students Pavel Vachek and Jiří Zajpt are launching zologicka.cz — our first website. We offered hosting services and it was a bit of an underground, but serious and we were freelancing. The beginning of Pavel & Jirka\'s entrepreneurship.'
  },
  {
    customDate: 'April 2008',
    date: { day: 1, month: 4, year: 2008 },
    hideDate: true,
    title: 'Staying busy',
    text: 'We\'re working like crazy, from home and cafés for now.'
  },
  {
    date: { day: 1, month: 1, year: 2009 },
    title: 'We know where this is going',
    text: 'We made starting a company our New Year\'s resolution. We\'re going to be making websites and apps!'
  },
  {
    customDate: 'January and February 2009',
    date: { day: 2, month: 1, year: 2009 },
    title: 'We need a name',
    text: 'We can\'t start a business because we don\'t have a name. We\'re brainstorming furiously in cafés, restaurants, even on ICQ and Skype.'
  },
  {
    date: { day: 2, month: 3, year: 2009 },
    title: 'We\'re a serious business',
    text: 'We were officially running a business now! We privately limited our liability and are officially a private limited company.'
  },
  {
    customDate: 'November 2009',
    date: { day: 1, month: 11, year: 2009 },
    title: 'Our first web project',
    text: 'We have our first order for a website project! We\'re starting work on the Luxido auction system and our company and its order business is off to a great start.'
  },
  {
    date: { day: 2, month: 11, year: 2009 },
    hideDate: true,
    title: 'We\'re launching BillApp',
    text: 'We\'re launching our first application for online invoicing billapp.cz. As of today, it\'s a success, with thousands of users.'
  },
  {
    date: { day: 17, month: 5, year: 2010 },
    title: 'We\'re buying a domain',
    text: 'We bought the domain and the original FakturaOnline.cz system (in PHP)'
  },
  {
    date: { day: 28, month: 7, year: 2010 },
    title: 'Juras has a job for us',
    text: 'Jiří Brhel found us a client and so started our long-term cooperation.'
  },
  {
    customDate: 'November 2011',
    date: { day: 1, month: 11, year: 2011 },
    title: 'Tsech comes to Czechia',
    text: '“I started drinking large amounts of beer.” — Edward Tsech. He came to us all the way from Russia and he likes Czech beer. No regrets. :)'
  },
  {
    date: { day: 2, month: 11, year: 2011 },
    hideDate: true,
    title: 'Going global',
    text: 'We\'re launching FakturaOnline.sk'
  },
  {
    date: { day: 1, month: 1, year: 2012 },
    hideDate: true,
    title: '3-year birthday',
    text: 'We\'re celebrating our third birthday!'
  },
  {
    customDate: 'Jan. 2012',
    date: { day: 2, month: 1, year: 2012 },
    title: 'Designer on board',
    text: 'Ondřej Žáček comes on board, making our designs even more kick-ass!'
  },
  {
    date: { day: 19, month: 3, year: 2012 },
    title: 'Blueberry gets a guardian',
    text: 'Tomáš Dundáček joins us, bringing crisis management to the company!'
  },
  {
    date: { day: 6, month: 6, year: 2012 },
    title: 'Graduate engineer',
    text: 'We have our first Blueberry engineer, so let\'s get to work. Tom…'
  },
  {
    date: { day: 28, month: 6, year: 2012 },
    title: 'One barrel less',
    text: 'One of our business owners loses a barrel of Stella in badminton…'
  },
  {
    date: { day: 30, month: 1, year: 2013 },
    title: 'New assistant',
    text: 'Michal finds out we have a new assistant. Someone emptied his ashtray.'
  },
  {
    date: { day: 31, month: 1, year: 2013 },
    title: 'Everything\'s fine',
    text: 'Tomáš D. is happy to report that work on the task is going well. He did everything except what the task was asking for.'
  },
  {
    customDate: 'February 2013',
    date: { day: 1, month: 2, year: 2013 },
    title: 'Marketing festival',
    text: 'Jindra Fáborský gives Pavel a call, asking whether Blueberry could make him a nice website for some marketing conference, which he plans to organize. Why not, right?'
  },
  {
    customDate: 'March 2013',
    date: { day: 1, month: 3, year: 2013 },
    picture: './images/parizek.png',
    title: 'Branching out into marketing',
    text: 'Karel joins our team — a top-notch marketer that can help us grow our service portfolio and move our company a notch higher.'
  },
  {
    customDate: 'March 2013',
    date: { day: 1, month: 3, year: 2013 },
    title: 'Years piling on',
    text: 'We\'re celebrating our 4th birthday!'
  },
  {
    customDate: 'June 2013',
    date: { day: 1, month: 6, year: 2013 },
    picture: './images/pleskac.png',
    title: 'More coding help',
    text: 'We have a new coder — Tonda. He has a tendency to adhere to the “notpossible” religion sometimes, but in all, he\'s pretty great and it still gets done in the end :)'
  },
  {
    customDate: 'Sept. 2013',
    date: { day: 1, month: 9, year: 2013 },
    title: 'Moving day',
    text: 'We\'re leaving our cozy and increasingly crowded office in Štěpánská and moving to a modern open space in Smíchov, where we can fit everyone. And we\'re ready to grow some more. :)'
  },
  {
    customDate: 'Oct. 2013',
    date: { day: 1, month: 10, year: 2013 },
    title: 'Google Partner',
    text: 'Blueberry is now an official Google Partner!'
  },
  {
    date: { day: 2, month: 10, year: 2013 },
    hideDate: true,
    title: 'We can\'t manage on our own',
    text: 'We have a new project manager Michal — finally someone to help us manage! :)'
  },
  {
    date: { day: 1, month: 11, year: 2013 },
    hideDate: true,
    title: 'Marketing Festival partner',
    text: 'We became a proud partner of Marketing Festivalu — the biggest marketing conference in Central Europe! Yes, it\'s that event that Jindra Fáborský came to us with in February…'
  },
  {
    date: { day: 2, month: 11, year: 2013 },
    hideDate: true,
    title: 'Company hackathon',
    text: 'We decided to try to hold our first company hackathon — we spent a very fun and productive week-end in the office and we ended up with several interesting projects as a result'
  },
  {
    customDate: 'Dec. 2013',
    date: { day: 1, month: 12, year: 2013 },
    title: 'Admin x 2',
    text: 'We have a new admin and everything\'s running more smoothly than before. If one has no time, the other one does. Well, usually… :)'
  },
  {
    date: { day: 1, month: 1, year: 2014 },
    hideDate: true,
    picture: './images/grabmullerova.png',
    title: 'Another female element',
    text: 'We\'re getting more reinforcement in the marketing department, doubling the number of women in the company. And just so we don\'t get our girls mixed up, now that we have so many, our new marketer is also named Eva.'
  },
  {
    date: { day: 2, month: 1, year: 2014 },
    hideDate: true,
    title: 'Mini-office',
    text: 'Tomáš Šorejs decided that it\'s too long a way to the office for him and his trusty sidekick #Tondaisadog. And so he parked his minivan in the parking lot in front of the office. And they lived there happily ever after.'
  },
  {
    date: { day: 20, month: 10, year: 2014 },
    title: 'Dave Nekovář commits',
    text: 'We\'re doing things that make people fall in love. After four years of being a user, Dave Nekovář decided to leave his job and commit to a career life with Faktura Online. He\'s joining us as a product owner and now he\'s caring for his beloved daily.'
  },
  {
    date: { day: 1, month: 11, year: 2014 },
    hideDate: true,
    picture: './images/lehatka.png',
    title: 'Mission: Google deckchairs',
    text: 'Unnamed attendees of Google Agency day borrowed some deckchairs at around 23:30. Unfortunately, nobody saw them. As we\'re polite, we returned them the next day and admitted to “borrowing” them. They still laugh at us at Google\'s European headquarters.'
  },
  {
    customDate: 'Feb. 2015',
    date: { day: 1, month: 2, year: 2015 },
    title: 'Higher and higher',
    text: 'We\'re aiming higher and higher. And so we moved three floors higher. It\'s Blueberry\'s fifth move, because we keep growing and keep needing more space.'
  },
  {
    customDate: 'May 2015',
    date: { day: 1, month: 5, year: 2015 },
    picture: './images/horakova.png',
    title: 'Number 5 is alive!',
    text: 'The quality of our office life is now being cared for by Blueberry lady number five, Lenka Horáková.'
  },
  {
    date: { day: 14, month: 5, year: 2015 },
    title: 'Karel expands his horizons',
    text: 'Our marketer Karel gains a new skill — birthing assistant. In early morning hours at home, his wife Lenka unexpectedly gave birth to a second daughter Magdalena. The discussion around establishing company daycare grows.'
  },
  {
    date: { day: 15, month: 5, year: 2015 },
    title: 'Twenty thousand tasks',
    text: 'Historic milestone. Task number 20 000 was created in our beloved Redmine tracker. We named our triumphal twenty thousandth duty “Set DNS on heroku”. So much for reflecting the fact that we\'re creating history.'
  },
  {
    date: { day: 20, month: 5, year: 2015 },
    title: 'Filling up on sugar',
    text: 'The quality of our office life is growing. Adam says that he\'s a much more effective coder now, thanks to a supply of sponsored sweets.'
  },
  {
    date: { day: 1, month: 6, year: 2015 },
    title: 'One out of the ordinary Children\'s Day',
    text: 'A Children\'s Day for the history books! One of our Blueberry children grew up and it was time for it to stand on its own feet. Faktura Online becomes a separate company!'
  }
];

export const itemsWithLinesEnhanced = items.map((item, index) => ({
  ...item,
  index,
  titleLines: Math.ceil(item.title.length / 30),
  lines: Math.ceil(item.text.length / 33),
  position: index % 2 === 1 ? 'right' : 'left'
}));

export const calucateItemHeight = item => (
  (item.titleLines * 16) + // title
    10 + // space between title and lines
    20 + // date
    (item.lines * 23) + // lines
    48 // padding bottom
);

import { POINT_RADIUS, CURVE_OFFSET, CURVE_LENGTH, SCALE_Y, SCALE_X } from './Curve.react';

const getSineXForY = y => Math.sin(y / SCALE_Y) * SCALE_X;
const curveOffsetY = CURVE_OFFSET * CURVE_LENGTH * SCALE_Y;

let top = 200 + 7;

export const itemsWithLines = itemsWithLinesEnhanced.map((item) => {
  const result = { ...item, top, moveToCurve: getSineXForY(top - curveOffsetY - POINT_RADIUS) };
  top += calucateItemHeight(item);
  return result;
});

export const historiesHeight = top;

const itemsByYear = itemsWithLines.reduce((acc, item) => {
  const previousItems = acc[item.date.year] || [];

  return {
    ...acc,
    [item.date.year]: [...previousItems, item]
  };
}, {});


export const linesCount = itemsWithLines.reduce((acc, item) => acc + item.lines, 0);
export const historiesCount = itemsWithLines.length;
export default itemsByYear;
