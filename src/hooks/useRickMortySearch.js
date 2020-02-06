import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RICK_MORTY_SEARCH = gql`
  query Name($targetName: String) {
    characters(filter: { name: $targetName}) {
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

function useRickMortySearch(targetName) {
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
    variables: { targetName },
  });
  //console.log('loading, error, data', loading, error, data);

  return {loading, error, data };
}

export default useRickMortySearch;
