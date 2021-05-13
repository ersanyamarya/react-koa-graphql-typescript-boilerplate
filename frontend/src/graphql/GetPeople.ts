/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeople
// ====================================================

export interface GetPeople_personMany {
  __typename: "Person";
  _id: any;
  lastName: string;
  firstName: string;
  email: string;
  updatedAt: any | null;
  createdAt: any | null;
}

export interface GetPeople {
  personMany: GetPeople_personMany[];
}
