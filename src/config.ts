const config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3000"),
  debug: process.env.DEBUG === "true",
  appSecret: process.env.APP_SECRET || "",
  defaultPageSize: parseInt(process.env.DEFAULT_PAGE_SIZE || "5"),
  issuerBaseUrl: process.env.ISSUER_BASE_URL || "",
  audience: process.env.AUDIENCE || "",
  logLevel: process.env.LOG_LEVEL || "info",
};

export default config;
