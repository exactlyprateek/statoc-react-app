import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

test('Movie List renders', () => {
  const listOfMovies = [
    {
      title: 'American History X',
      description:
        'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
          width: 497,
          height: 736
        }
      },
      releaseYear: 1998
    },
    {
      title: 'Catch Me If You Can',
      description:
        "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
      images: {
        posterArt: {
          url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/catch_me_if_you_can.jpg',
          width: 485,
          height: 719
        }
      },
      releaseYear: 2002
    }
  ];
  render(<MovieList listOfMovies={listOfMovies} />);
  const codeMessage = screen.getByText(/American History/i);
  expect(codeMessage).toBeInTheDocument();
});
