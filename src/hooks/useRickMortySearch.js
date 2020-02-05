import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RICK_MORTY_SEARCH = gql`
  query Name($target: String) {
    characters(filter: { name: $target}) {
      info {
        count
      }
      results {
        id,
        name,
        image
      }
    }
  }
`;

function useRickMortySearch(target) {
  console.log('target', target);
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
    variables: { target },
  });
  console.log('loading, error, data', loading, error, data);

  return {loading, error, data };
}

export default useRickMortySearch;
