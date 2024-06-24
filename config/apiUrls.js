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
  getProject: `/${config.ecommerce_microservice}/${config.version3}/api/team/lists`,
  getSupplier: `/${config.ecommerce_microservice}/${config.version3}/api/team/lists`,
  getMonthlyReport: `/${config.ecommerce_microservice}/${config.version2}/api/carts`,
  getSustainability: `/${config.ecommerce_microservice}/${config.version2}/api/carts`,
  addProject: `/${config.ecommerce_microservice}/${config.version3}/api/team/lists`,
  addSupplierAndcontactor: `/${config.ecommerce_microservice}/${config.version3}/api/team/lists`,
  addMonthlyReport: `/${config.ecommerce_microservice}/${config.version2}/api/carts`,
  addSustainabilityData: `/${config.ecommerce_microservice}/${config.version2}/api/carts`,
  getPakages : `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/packages`






};
