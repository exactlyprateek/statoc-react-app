import styles from './MovieList.module.css';

function MovieList({ listOfMovies }) {
  return (
    <div className={styles.MovieGridContainer}>
      {listOfMovies.map(
        ({
          title,
          description,
          images,
          releaseYear
        }: {
          title: string;
          description: string;
          images: { posterArt: { url: string } };
          releaseYear: string;
        }) => (
          <div key={title} className={styles.GridItem}>
            <div
              className={styles.MovieOverlay}
              style={{
                backgroundImage: `url(${images.posterArt.url})`,
                overflow: 'hidden'
              }}
            ></div>
            <div className={styles.MovieInfo}>
              <div className={styles.MovieTitleWrapper}>
                <p className={styles.MovieTitle}>{title}</p>
              </div>
              <div className={styles.MovieReleaseYear}>{releaseYear}</div>
              <div className={styles.MovieDescription}>{description}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MovieList;
