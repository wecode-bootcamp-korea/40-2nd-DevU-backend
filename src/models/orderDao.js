const appDataSource = require("./dataSource");
const queryRunner = appDataSource.createQueryRunner();

const checkOrder = async (userId, bookId) => {
  const getBookInfoByBookId = await appDataSource.query(
    `
  SELECT
      b.title,
      b.image_url,
      b.author,
      b.online_price
      FROM books b   
    WHERE b.id = ?
      `,
    [bookId]
  );

  const getPointsByUserId = await appDataSource.query(
    `SELECT
      u.point
      FROM users u
      WHERE u.id =?
      `,
    [userId]
  );

  return getBookInfoByBookId.concat(getPointsByUserId);
};

const createOrder = async (userId, bookId, online_price) => {
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `
        INSERT INTO bookshelves
          (user_id, book_id, online_price)
        VALUES
        (?, ?, ?)
     `,
      [userId, bookId, online_price]
    );
    await queryRunner.query(
      `
        UPDATE users
        SET 
            point = (point - ?)
        WHERE
            id = ?
      `,
      [online_price, userId]
    );

    let [newPoint] = await queryRunner.query(
      `
        SELECT point FROM users WHERE id = ?
      `,
      [userId]
    );

    if (newPoint.point < 0) {
      throw new Error("포인트가 부족 합니다!");
    }

    await queryRunner.commitTransaction();

    return newPoint.point;
  } catch (err) {
    await queryRunner.rollbackTransaction();

    if (err.message == "포인트가 부족합니다!") {
      throw err;
    } else {
      await queryRunner.release();
    }
  }
};

module.exports = { checkOrder, createOrder };
