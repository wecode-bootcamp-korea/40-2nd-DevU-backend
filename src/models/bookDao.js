const appDataSource  = require("./dataSource");

const getAllBooks = async () => {
  return await appDataSource.query(`
		SELECT 
      b.id,
      b.sub_category_id,
      b.title,
      b.image_url,
      b.published_date,
      b.offline_price,
      b.online_price,
      b.author,
      b.publisher,
      b.description,
      b.publisher_review,
      b.list,
      b.created_at
    FROM books b
  `);
};

const getBooksByMainCategoryId = async bookId => { 
  return await appDataSource.query(`
		SELECT
      b.id,
      b.title,
      b.image_url,
      b.author,
      b.list,
      b.created_at,
      m.id as mainCategoryId
    FROM
      books b
    INNER JOIN sub_categories s ON s.id = b.sub_category_id
    INNER JOIN main_categories m ON m.id = s.main_category_id
    WHERE
      m.id = ?`,
      [bookId]
  );
};

module.exports = {
  getAllBooks,
  getBooksByMainCategoryId
};
