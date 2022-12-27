const userService = require("../services/userService");
const { catchAsync } = require("../utils/error");

const signInKakao = catchAsync(async (req, res) => {
  try {
    const kakaoToken = req.headers.authorization;

    if (!kakaoToken) {
      return res.status(400).json({ message: "kakaoTokenError" });
    }

    const accessToken = await userService.signInKakao(kakaoToken);

    return res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    throw new Error("accessTokenError");
  }
});

module.exports = {
  signInKakao,
};
