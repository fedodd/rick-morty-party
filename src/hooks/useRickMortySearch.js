import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


// const queryVariables = {
//   "targetName": "Rick",
//   "page": "2"
// }

const RICK_MORTY_SEARCH = gql`
  query Name($targetName: String!, $targetPage: String!) {
    characters(page: $targetPage, filter: { name: $targetName}) {
      info {
        count,
        pages,
        next,
        prev
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
  const targetPage = '2';
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
    variables: { targetName, targetPage },
  });
  //console.log('loading, error, data', loading, error, data);

  return {loading, error, data };
}

export default useRickMortySearch;
