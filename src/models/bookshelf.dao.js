const appDataSource = require("./dataSource");

const getBookshelfByUserId = async (userId) => {
  return await appDataSource.query(
    `
      SELECT
          bs.book_id,
          b.title,
          b.image_url
      FROM bookshelves bs
      JOIN users u ON u.id = bs.user_id
      JOIN books b ON b.id = bs.book_id
      WHERE u.id = ?;
    `,
    [userId]
  );
};

const getBookContentsByBookshelfId = async (userId, bookId) => {
  return await appDataSource.query(
    `
      SELECT
          b.id, 
          b.title,
          b.list, 
          b.list_number,
          bc.content_url
      FROM bookshelves bs
      JOIN book_contents bc ON bc.book_id = b.id
      JOIN books b ON b.id = bc.book_id
      WHERE u.id=? AND b.id=?;
    `,
    [userId, bookId]
  );
};

module.exports = { getBookshelfByUserId, getBookContentsByBookshelfId };
