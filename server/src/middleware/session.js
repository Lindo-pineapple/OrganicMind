import redis from '../utilities/redis'; // Import the Redis client

// Function to save a session in Redis
async function saveSession(userId, refreshToken) {
  await redis.set(`session:${userId}`, refreshToken, 'EX', 60 * 60 * 1000); // Expire in 30 days
}
// Function to get a session from Redis
async function getSession(userId) {
    const refreshToken = await redis.get(`session:${userId}`);
    return refreshToken;
  }
  
// Function to delete a session from Redis (e.g., on logout)
  async function deleteSession(userId) {
    await redis.del(`session:${userId}`);
  }