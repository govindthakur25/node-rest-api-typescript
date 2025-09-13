const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG === "true",
};

export default config;
