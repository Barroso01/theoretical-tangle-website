/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGoals = /* GraphQL */ `
  subscription OnCreateGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onCreateGoals(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGoals = /* GraphQL */ `
  subscription OnUpdateGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onUpdateGoals(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGoals = /* GraphQL */ `
  subscription OnDeleteGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onDeleteGoals(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTechnology = /* GraphQL */ `
  subscription OnCreateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onCreateTechnology(filter: $filter) {
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
export const onUpdateTechnology = /* GraphQL */ `
  subscription OnUpdateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onUpdateTechnology(filter: $filter) {
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
export const onDeleteTechnology = /* GraphQL */ `
  subscription OnDeleteTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onDeleteTechnology(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
