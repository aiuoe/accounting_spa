/* eslint-disable prettier/prettier */
import gql from "graphql-tag";

export const FETCH_LABELS = gql(`query {
    labels {
      data {
        id
        name
        icon
        color
        background
      }
    }
}`);


export const CREATE_LABEL = gql(`mutation 
($id: ID, $name: String!, $icon: String!, $color: String!, $background: String!) {
  upsertLabel(
    id: $id
    name: $name
    icon: $icon
    color: $color
    background: $background
  ) {
    id
    name
    icon
    color
    background
    created_at
    updated_at
  }
}`);