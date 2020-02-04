import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';




function useRickMortySearch(target) {
  console.log('target', target);

  const RICK_MORTY_SEARCH = gql`
  query {
    characters(filter: { name: "${target}" }) {
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

  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH);
  console.log('loading, error, data', loading, error, data);

  return {loading, error, data };
}

export default useRickMortySearch;
