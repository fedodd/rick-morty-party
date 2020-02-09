import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


// const queryVariables = {
//   "targetName": "Rick",
//   "page": "2"
// }

const RICK_MORTY_PAGE_COUNTER = gql`
  query Name($targetName: String!) {
    characters(filter: { name: $targetName}) {
      info {
        pages
      }
    }
  }
`;

function useRickMortyPageCounter(targetName) {
  const { loading, error, data } = useQuery(RICK_MORTY_PAGE_COUNTER, {
    variables: { targetName },
  });
  console.log();

  return {pageLoading: loading, pageError: error, pageData: data};
}

export default useRickMortyPageCounter;
