import React from "react";
import Slider from "react-slick";
import styles from "./Home.module.css";

// Fake data cho slider phim hot
const hotMovies = [
  {
    id: 1,
    title: "Spider-Man: No Way Home",
    image: "https://via.placeholder.com/800x400?text=Spider-Man",
  },
  {
    id: 2,
    title: "The Batman",
    image: "https://via.placeholder.com/800x400?text=The+Batman",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    image: "https://via.placeholder.com/800x400?text=Avengers",
  },
];

// Fake data cho bài viết đánh giá phim
const movieReviews = [
  {
    id: 1,
    title: "Spider-Man Review",
    excerpt: "An exciting and emotional journey of Spider-Man.",
    image: "https://via.placeholder.com/300x200?text=Spider-Man+Review",
  },
  {
    id: 2,
    title: "The Batman Analysis",
    excerpt: "A dark and thrilling take on Gotham's hero.",
    image: "https://via.placeholder.com/300x200?text=Batman+Review",
  },
  {
    id: 3,
    title: "Avengers: Endgame Breakdown",
    excerpt: "A masterpiece culmination of the Marvel saga.",
    image: "https://via.placeholder.com/300x200?text=Avengers+Review",
  },
];

function Home() {
  // Cấu hình slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.home}>
      {/* Slider phim hot */}
      <section className={styles.sliderSection}>
        <h2 className={styles.sectionTitle}>Hot Movies</h2>
        <Slider {...sliderSettings}>
          {hotMovies.map((movie) => (
            <div key={movie.id} className={styles.sliderItem}>
              <img src={movie.image} alt={movie.title} />
              <h3 className={styles.sliderTitle}>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* Danh sách bài viết đánh giá */}
      <section className={styles.reviewSection}>
        <h2 className={styles.sectionTitle}>Movie Reviews</h2>
        <div className={styles.reviewGrid}>
          {movieReviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <img src={review.image} alt={review.title} />
              <h3 className={styles.reviewTitle}>{review.title}</h3>
              <p className={styles.reviewExcerpt}>{review.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
