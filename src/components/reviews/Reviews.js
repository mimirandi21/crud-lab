import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
	render() {
		const { reviews, deleteReview, restaurantId } = this.props;
		const restaurantReviews = reviews.filter(
			(review) => review.restaurantId === restaurantId
		);
		const renderReviews = restaurantReviews.map((review) => {
			return (
				<Review review={review} key={review.id} deleteReview={deleteReview} />
			);
		});
		return <ul>{renderReviews}</ul>;
	}
}

export default Reviews;
