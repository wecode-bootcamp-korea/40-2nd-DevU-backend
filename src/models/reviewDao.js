const appDataSource = require("./dataSource");

const addReview = async (userId, bookId, review, rating) => {
  return await appDataSource.query(`
	  INSERT INTO reviews (
      user_id,
      book_id,
      review,
      rating
		) VALUES (?, ?, ?, ?)`,
    [userId, bookId, review, rating]
  ); 
};

const getReview = async (bookId) => {
  const numberOfReviews = await appDataSource.query(`
    SELECT COUNT(review) as COUNT,
        AVG(rating) as AVG
    FROM reviews
    WHERE book_id=?
`,[bookId])

  const getReviewsByBookId = await appDataSource.query(`
		SELECT
      id,
      review,
      rating,
      created_at
		FROM reviews
    WHERE book_id=?
    `,[bookId])
  numberOfReviews[0].Reviews = getReviewsByBookId
  
  return numberOfReviews
};

const updateReview = async (id, review, rating, userId, bookId) => {
  return await appDataSource.query(`
    UPDATE
      reviews
    SET
      review=?,
      rating=?
    WHERE id=? AND user_id=? AND book_id=?
  `,[review, rating, id, userId, bookId]
  );
};

const deleteReview = async (id, userId, bookId)  => {
  return await appDataSource.query(`
	  DELETE 
    FROM reviews 
    WHERE id=? AND user_id=? AND book_id=? 
    `,
     [id, userId, bookId]
  );
};

module.exports = {
  getReview,
  addReview,
  updateReview,
  deleteReview
};
