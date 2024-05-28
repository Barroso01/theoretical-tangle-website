/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      owner
      recipientId
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        recipientId
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPredio = /* GraphQL */ `
  query GetPredio($id: ID!) {
    getPredio(id: $id) {
      id
      name
      description
      address
      lat
      long
      coverimage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPredios = /* GraphQL */ `
  query ListPredios(
    $filter: ModelPredioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPredios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        address
        lat
        long
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
export const getTech = /* GraphQL */ `
  query GetTech($id: ID!) {
    getTech(id: $id) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeches = /* GraphQL */ `
  query ListTeches(
    $filter: ModelTechFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeches(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getGoals = /* GraphQL */ `
  query GetGoals($id: ID!) {
    getGoals(id: $id) {
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
