/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGoals = /* GraphQL */ `
  mutation CreateGoals(
    $input: CreateGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    createGoals(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGoals = /* GraphQL */ `
  mutation UpdateGoals(
    $input: UpdateGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    updateGoals(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGoals = /* GraphQL */ `
  mutation DeleteGoals(
    $input: DeleteGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    deleteGoals(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTechnology = /* GraphQL */ `
  mutation CreateTechnology(
    $input: CreateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    createTechnology(input: $input, condition: $condition) {
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
export const updateTechnology = /* GraphQL */ `
  mutation UpdateTechnology(
    $input: UpdateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    updateTechnology(input: $input, condition: $condition) {
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
export const deleteTechnology = /* GraphQL */ `
  mutation DeleteTechnology(
    $input: DeleteTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    deleteTechnology(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
