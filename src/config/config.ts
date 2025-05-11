export default {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.MONGODB_URI ,
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: process.env.CORS_METHODS || "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
}