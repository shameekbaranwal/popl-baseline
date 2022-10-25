const feedbacks = [
	{
		rating: 5,
		comment: 'This is a great product',
	},
];

const createCard = (rating, comment) => {
	const card = document.createElement('li');
	card.classList.add('feedbackCard');

	const ratingText = document.createElement('p');
	ratingText.textContent = rating;

	const commentText = document.createElement('p');
	commentText.textContent = comment;

	card.appendChild(ratingText);
	card.appendChild(commentText);

	return card;
};

const calculateLatestRating = () => {
	const latestRating = feedbacks.reduce((acc, feedback) => {
		return acc + feedback.rating;
	}, 0);
	return (latestRating / feedbacks.length).toFixed(1);
};

const calculateLatestCount = () => {
	return feedbacks.length;
};

const updateUI = () => {
	const feedbacksList = document.querySelector('#feedbacksList');
	feedbacksList.innerHTML = '';
	feedbacks.forEach(feedback => {
		const card = createCard(feedback.rating, feedback.comment);
		feedbacksList.appendChild(card);
	});

	const latestRating = calculateLatestRating();
	const latestRatingText = document.querySelector('#ratingsAverage');
	latestRatingText.textContent = latestRating;

	const latestCount = calculateLatestCount();
	const latestCountText = document.querySelector('#reviewCount');
	latestCountText.textContent = latestCount;
	// console.table({ latestCount, latestRating });
};

const handleSubmit = e => {
	e.preventDefault();

	const rating = parseInt(
		document.querySelector('input[type="radio"]:checked').id,
		10,
	);
	const comment = document.querySelector('#feedbackText').value;
	feedbacks.push({ rating, comment });
	updateUI();
};

const form = document.querySelector('form');
form.onsubmit = handleSubmit;
updateUI();
