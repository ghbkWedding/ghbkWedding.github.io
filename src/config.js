const gallery = [
  // galley image list
  require("./Image/gallery/01.jpg"),
  require("./Image/gallery/02.jpg"),
  require("./Image/gallery/03.jpg"),
  require("./Image/gallery/04.jpg"),
  require("./Image/gallery/05.jpg"),
  require("./Image/gallery/06.jpg"),
  require("./Image/gallery/07.jpg"),
  require("./Image/gallery/08.jpg"),
  require("./Image/gallery/09.jpg"),

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
  // title: "π Wedding Day π", // recomanded English
  wedding: {
    place: {
      name: "λμ»¨λ²€μ μ μ¬μ  4μΈ΅",
      address: "μμΈ κ°λ¨κ΅¬ κ°λ¨λλ‘ 652",
      latitude: 37.5192784,
      longitude: 127.0169826,
      image: require("./Image/map.png"),
    },
    at: "2022-02-26 18:30",
  },
  bridal: {
    name: "λ°κ·ν",
    name_short: "κ·ν",
    role: "μ λΆ",
    image: require("./Image/bridal.jpg"),
    image_icon: require("./Image/bridal_icon.jpg"),
    phone: "+821088923983",
    account: "μΉ΄μΉ΄μ€λ±ν¬ 3333036818477",
    mother: "κΉμλ",
    motherPhone: "+8201076857852",
    motherAccount: "μ°λ¦¬μν 1002447295137",
    father: "λ°μμ² ",
    fatherPhone: false,
    fatherAccount: false,
    position: "λΈ ",
  },
  groom: {
    name: "μλ³κ΅­",
    name_short: "λ³κ΅­",
    role: "μ λ",
    image: require("./Image/groom.jpg"),
    image_icon: require("./Image/groom_icon.jpg"),
    phone: "+821088855038",
    account: "κΈ°μμν 01088855038",
    mother: "μ΄μ£Όμ",
    motherPhone: "+8201023376947",
    motherAccount: "κ΅­λ―Όμν 34810204028896",
    father: "μμ°½μ",
    fatherPhone: "+8201037505572",
    fatherAccount: "λνμν 13102043270",
    position: "μλ€",
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
    header_title: require("./Image/header_title.jpg"),
    header: require("./Image/header.jpg"),
    gallery: gallery.map((item) => ({
      original: item,
      thumbnail: item,
    })),
  },
  icon: {
    flower_pink: require("./Image/icon/flower_pink.png"),
    flower_yellow: require("./Image/icon/flower_yellow.png"),
    flower_green: require("./Image/icon/flower_green.png"),
  },
  jeju: [
    {
      src: require("./Image/gallery/10.jpeg"),
      width: 2,
      height: 3,
    },
    {
      src: require("./Image/gallery/11.jpeg"),
      width: 2,
      height: 3,
    },
    {
      src: require("./Image/gallery/12.jpeg"),
      width: 2,
      height: 3,
    },
    {
      src: require("./Image/gallery/13.jpeg"),
      width: 2,
      height: 3,
    },
    {
      src: require("./Image/gallery/14.jpeg"),
      width: 2,
      height: 3,
    },
    {
      src: require("./Image/gallery/15.jpeg"),
      width: 2,
      height: 3,
    },
  ],
};
