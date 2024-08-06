import Redis from 'ioredis';
import {API} from '../globals';

// Create a Redis client instance
const redis = new Redis({
  host: API.REDIS_HOST,  // Redis server hostname
  port: API.REDIS_PORT,     // Redis server port
});

export default redis;