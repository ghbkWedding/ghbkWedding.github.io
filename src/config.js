const gallery = [
  // galley image list
  require("./Image/gallery/01.jpeg"),
  require("./Image/gallery/02.jpeg"),
  require("./Image/gallery/03.jpeg"),
  require("./Image/gallery/04.jpeg"),
  require("./Image/gallery/05.jpeg"),
  require("./Image/gallery/06.jpeg"),
  require("./Image/gallery/07.jpeg"),
  require("./Image/gallery/08.jpeg"),
  require("./Image/gallery/09.jpeg"),
  require("./Image/gallery/10.jpeg"),
  require("./Image/gallery/11.jpeg"),
  require("./Image/gallery/12.jpeg"),
  require("./Image/gallery/13.jpeg"),
  require("./Image/gallery/14.jpeg"),
  require("./Image/gallery/15.jpeg"),
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
  title: "초대합니다 💍", // recomanded English
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
    account: "카카오뱅크 3333036818477",
    mother: "김숙란",
    motherPhone: "+8201076857852",
    motherAccount: "우리은행 1002447295137",
    father: "박영철",
    fatherPhone: false,
    fatherAccount: false,
    position: "딸",
  },
  groom: {
    name: "안병국",
    role: "신랑",
    image: require("./Image/groom.jpg"),
    phone: "+821088855038",
    account: "기업은행 01088855038",
    mother: "이주영",
    motherPhone: "+8201023376947",
    motherAccount: "국민은행 34810204028896",
    father: "안창영",
    fatherPhone: "+8201037505572",
    fatherAccount: "농협은행 13102043270",
    position: "아들",
  },
  accountBridal: {
    mother: "",
    bridal: "",
  },
  accountGroom: {
    mother: "",
    father: "",
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