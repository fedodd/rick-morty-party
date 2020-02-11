import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RICK_MORTY_SEARCH = gql`
  query Name($targetName: String!, $targetPage: Int) {
    characters(page: $targetPage, filter: { name: $targetName}) {
      info {
        count,
        pages
      }
      results {
        id,
        name,
        image
      }
    }
  }
`;

function useRickMortySearch(targetName, targetPage) {
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
    variables: { targetName, targetPage },
  });

  return {loading, error, data };
}

export default useRickMortySearch;
