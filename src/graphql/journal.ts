/* eslint-disable prettier/prettier */
import gql from "graphql-tag";

export const FETCH_TOTAL_INCOME = gql(`query {
  totalIncome
}`)

export const FETCH_TOTAL_EXPENSE = gql(`query {
  totalExpense
}`)

export const FETCH_TOTAL_TITHE = gql(`query {
  totalTithe
}`)

export const FETCH_JOURNALS = gql(`query {
  journals {
    id
    user_id {
      name
    }
    type_id {
      name
    }
    label_id {
      name
      icon
      color
      background
    }
    amount
    note
    created_at
    updated_at
  }
}`);

export const CREATE_JOURNAL = gql(`mutation 
($type_id: Int!, $label_id: Int!, $amount: Float!, $note: String!) {
  upsertJournal(id: null, type_id: $type_id, label_id: $label_id, amount: $amount, note: $note) {
    id
    type_id {
      id
      name
    }
    label_id {
      id
      name
      icon
      color
      background
    }
    amount
    note
    created_at
    updated_at
  }
}`)