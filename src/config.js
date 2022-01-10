const gallery = [
  // galley image list
  require("./Image/gallery/1.png"),
  require("./Image/gallery/2.jpg"),
  require("./Image/gallery/3.jpg"),
  require("./Image/gallery/4.jpg"),
  require("./Image/gallery/5.jpg"),
  require("./Image/gallery/6.jpg"),
];

export default {
  global: {
    googleMapAPIKey: "AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o",
    comment: {
      livere: {
        enable: true, // if false, not rendering livere comment component
        service: "city",
        uid: "MTAyMC8yNTYzNi8yMjMy",
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: "1535680996513864",
      },
    },
  },
  title: "Invitation", // recomanded English
  wedding: {
    place: {
      name: "더컨벤션 신사점 4층",
      address: "서울 강남구 강남대로 652",
      latitude: 37.5192784,
      longitude: 127.0169826,
      image: require("./Image/map.png"),
    },
    at: "2022-02-26 18:30",
  },
  bridal: {
    name: "박규휘",
    role: "신부",
    image: require("./Image/bridal.jpg"),
    phone: "+821088923983",
    facebook: false, // if false, not showing facebook icon
    father: "박영철",
    mother: "김숙란",
    fatherPhone: false,
    motherPhone: "+8201076857852",
    position: "장녀",
  },
  groom: {
    name: "안병국",
    role: "신랑",
    image: require("./Image/groom.jpg"),
    phone: "+821022222222",
    father: "안창영",
    mother: "이덕순",
    fatherPhone: "+8201076857852",
    motherPhone: "+8201076857852",
    position: "차남",
  },
  account: {
    bridal: "",
    groom: "",
  },
  image: {
    header: require("./Image/header.jpg"),
    gallery: gallery.map((item) => ({
      original: item,
      thumbnail: item,
    })),
  },
};
