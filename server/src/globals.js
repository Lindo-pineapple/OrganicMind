import dotenv from 'dotenv'

dotenv.config();

const API = {
  PORT: process.env.PORT || 5001,
  DB_STRING: process.env.MONGO_CONNECTION_STRING,
  AUTH_SECRET: process.env.AUTH_SECRET,
  REDIS_HOST: process.env.REDIS_HOST || 'redis',
  REDIS_PORT: process.env.REDIS_PORT || 6379
}

const HTTP_CODES = {
  OK: 200,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  CREATED: 201,
  BAD_REQUEST: 400,
  ACCESS_DENIED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
}

const DEFAULT_ERROR_MESSAGE = 'An error occured while processing your request. Please try again later.'

export { API, HTTP_CODES, DEFAULT_ERROR_MESSAGE }
