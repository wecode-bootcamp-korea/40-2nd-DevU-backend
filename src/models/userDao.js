const appDataSource = require('./dataSource')

const signUp = async (kakaoId, email, name, profileImage) => {
    try {
        const result = await appDataSource.query(`
        INSERT INTO users(
            kakao_id,
            email,
            nickname,
            profile_image
        ) VALUES (?, ?, ?, ?)`
        , [kakaoId, email, name, profileImage]
        )
        return result
    } catch {
        throw new Error("createErr")
  }
}

const getUserById = async (kakaoId) => {
    const user = await appDataSource.query(`
    SELECT
        id,
        kakao_id,
        email,
        nickname,
        profile_image
    FROM users
    WHERE kakao_id=?`
    , [kakaoId]
    )
    return user[0]
} 

module.exports = {
    signUp,
    getUserById
}