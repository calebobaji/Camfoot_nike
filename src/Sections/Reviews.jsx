import ReviewCard from "../Cards/ReviewCard"
import customer1 from "../assets/images/customer1.jpeg"
import customer2 from "../assets/images/customer2.svg"
const Reviews = () => {
  const reviews = [
    {
        imgURL: customer1,
        customerName: 'Declan Thomas',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
]
  return (
    <section className="max-container mt-6 p-6">
        <h3 className="font-palanquin text-center text-4xl font-bold">
            What Our <span className="text-dull-yellow">Users</span> Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg text-center
        info-text">Listen to genuine reviews from some of our esteemed and satisfied customers
            about their exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly
        items-center max-lg:flex-col gap-14">
          {reviews.map ((review, index) =>
          (
            <ReviewCard
            key = {index}
            imgURL = {review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}
            />
          )
          )}
        </div>
    </section>
  )
}

export default Reviews
