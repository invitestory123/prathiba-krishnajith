/**
 * wedding-data.js — Customer-facing editable data layer for ivory-waltz
 * Edit this file to update couple names, parents, dates, venue, slokas, schedule, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Prathibha",
    groom: "Krishnajith",
    brideFull: "Prathibha Namboodiri",
    groomFull: "Krishnajith Namboothiri",
    brideParents: "D/o Smt. Sathi Namboodiri & Sri. Prasannan Namboodiri",
    groomParents: "S/o Smt. Bijitha Unnikrishnan & Sri. Unnikrishnan Namboothiri",
    hashtag: "",
    monogram: "P · K",
    monogramImage: "./editable/assets/monogram.png",
    familyNote: "With love and blessings",
  },

  wedding: {
    dateISO: "2027-05-09T07:30:00+05:30",
    dateLabel: "Sunday, 9th May 2027",
    timeLabel: "Muhurtham: 07:30 AM – 08:30 AM",
  },

  venue: {
    name: "Sulaity Tower & Convention Center",
    address: "Chuduvalathur, Cheruthuruthy, Kerala 679531",
    mapsQuery: "Sulaity Tower and Convention Center Cheruthuruthy Kerala",
  },

  verse: {
    arabic: "॥ श्री गणेशाय नमः ॥",
    text: "We, Prathibha, daughter of Smt. Sathi Namboodiri and Shri. Prasannan Namboodiri & Krishnajith, son of Smt. Bijitha Unnikrishnan and Shri. Unnikrishnan Namboothiri, are delighted to invite you and your family to our wedding festivities.",
  },

  introTitle: "Wedding Invitation Of ",
  introSubtitle: "",
  heroWelcome: "Welcome you to their Wedding",
  countdownTitle: "Until the Wedding",

  events: [
    {
      name: "Sangeeth",
      icon: "music",
      date: "Friday, 7th May 2027",
      dayLabel: "Friday",
      dayNum: "07",
      monthLabel: "May 2027",
      time: "From 5:00 PM Onwards",
      venue: "",
      note: "An evening of music, melody, dance, and celebratory joy.",
    },
    {
      name: "Ayaniyoonu",
      icon: "heart",
      date: "Saturday, 8th May 2027",
      dayLabel: "Saturday",
      dayNum: "08",
      monthLabel: "May 2027",
      time: "From 7:00 AM Onwards",
      venue: "",
      note: "Pre wedding ritual",
    },
    {
      name: "Wedding",
      icon: "heart",
      date: "Sunday, 9th May 2027",
      dayLabel: "Sunday",
      dayNum: "09",
      monthLabel: "May 2027",
      time: "Muhurtham: 07:30 AM – 08:30 AM",
      venue: "",
      note: "",
    },
  ],

  program: [
    { name: "Sangeeth Celebrations", time: "07 May, 5:00 PM" },
    { name: "Ayaniyoonu", time: "08 May, 7:00 AM" },
    { name: "Muhurtham", time: "09 May, 7:30 AM – 8:30 AM" },
  ],

  music: {
    title: "Kannukku Niranja Kalyanam",
    artist: "Arjun B Nair, Sadhika K R",
    src: "./editable/assets/bg-music.mp3",
    youtube: "https://music.youtube.com/watch?v=F7Sfw9xWqdg",
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  images: {
    monogram: "./editable/assets/monogram.png",
    couple: "./editable/assets/layer-couple.png",
    background: "./editable/assets/layer-01-background.png",
    shadows: "./editable/assets/layer-02-shadows.png",
    groom: "./editable/assets/layer-03-groom.png",
    bride: "./editable/assets/layer-04-bride.png",
    bouquet: "./editable/assets/layer-05-bouquet.png",
    heroComposite: "./editable/assets/hero-composite.jpg",
  },

  footer: {
    blessingTitle: "With love and blessings",
    blessings: [
      "Pournami - Prashanth",
      "Keerthana - Shashank"
    ],
    familyNote: "With love and blessings\nPournami - Prashanth\nKeerthana - Shashank",
  },
};
