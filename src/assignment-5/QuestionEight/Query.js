import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query MyQuery($after: String, $before: String) {
    allFilms(after: $after, before: $before) {
      edges {
        cursor
      }
      films {
        characterConnection {
          characters {
            birthYear
            eyeColor
            name
          }
        }
      }
    }
  }
`;
