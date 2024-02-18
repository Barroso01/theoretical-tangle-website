/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGoals = /* GraphQL */ `
  query GetGoals($id: ID!) {
    getGoals(id: $id) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTechnology = /* GraphQL */ `
  query GetTechnology($id: ID!) {
    getTechnology(id: $id) {
      id
      Name
      Description
      image
      activeresearchers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTechnologies = /* GraphQL */ `
  query ListTechnologies(
    $filter: ModelTechnologyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechnologies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        image
        activeresearchers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      location
      email
      profilepicture
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        location
        email
        profilepicture
        bio
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      technologyclass
      name
      description
      pagelink
      coverimage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        technologyclass
        name
        description
        pagelink
        coverimage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
