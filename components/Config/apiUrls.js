const config = {
  version2: "v2",
  version3: "v3",
  api: "api",
  user_microservice: "user",
  common_microservice: "utilities",
  collection_microservice: "collections",
  notification_microservice: "notification",
  games_microservice: "games",
  ecommerce_microservice: "ecommerce",
  reels_microservice: "reels",
};

export const apiUrls = {
  login: `/${config.user_microservice}/${config.version2}/login`,
  getTeam: `/${config.ecommerce_microservice}/${config.version3}/api/team/lists`,
  getCardData: `/${config.ecommerce_microservice}/${config.version2}/api/carts`,
  checkAvailability: `/${config.ecommerce_microservice}/${config.version2}/api/check/availability`,
  updateMultiCart: `/${config.ecommerce_microservice}/${config.version2}/api/cart/update`,
  newpaymentInitiate: "/payment/v2/api/checkout/initiate",
  newpaymentFinalize: "/payment/v2/api/checkout/finalise",
  captchaVerify: `/${config.user_microservice}/${config.version3}/captchaVerify`,
  joinTeam: `/${config.ecommerce_microservice}/${config.version3}/api/team/jointeam`,
  transaction: `/${config.ecommerce_microservice}/${config.version2}/api/user/transaction`,
  removeTeam:`/${config.ecommerce_microservice}/${config.version3}/api/team/remove/teammember`,//https://uatapi.turnkeytix.com/ecommerce/v3
  getTeams:`/events/v2/api/team/list`,
  faq: `/utilities/v2/faq`

};
