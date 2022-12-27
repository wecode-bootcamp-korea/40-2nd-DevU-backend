const appDataSource = require("./dataSource");

const signUp = async (kakaoId, email, name, profileImage) => {
  try {
    const result = await appDataSource.query(
      `
        INSERT INTO users(
            kakao_id,
            email,
            nickname,
            profile_image,
            point
        ) VALUES (?, ?, ?, ?)`,
      [kakaoId, email, name, profileImage]
    );
    return result;
  } catch {
    throw new Error("createErr");
  }
};

const getUserById = async (userId) => {
  const [user] = await appDataSource.query(
    `
    SELECT
        id,
        kakao_id,
        email,
        nickname,
        profile_image
    FROM users
    WHERE id=?`,
    [userId]
  );
  return user;
};

module.exports = {
  signUp,
  getUserById,
};
