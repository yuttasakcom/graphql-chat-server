import { gql } from "apollo-server-express";

export default gql`
  enum Role {
    USER
    ADMIN
  }
`;
