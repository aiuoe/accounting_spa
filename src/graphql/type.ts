/* eslint-disable prettier/prettier */
import gql from "graphql-tag";

export const FETCH_TYPES = gql(`query {
    types {
      data {
        id
        name
      }
    }
}`);
