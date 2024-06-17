/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserTL = /* GraphQL */ `
  mutation CreateUserTL(
    $input: CreateUserTLInput!
    $condition: ModelUserTLConditionInput
  ) {
    createUserTL(input: $input, condition: $condition) {
      id
      username
      email
      profilepicture
      bio
      cognitoid
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserTL = /* GraphQL */ `
  mutation UpdateUserTL(
    $input: UpdateUserTLInput!
    $condition: ModelUserTLConditionInput
  ) {
    updateUserTL(input: $input, condition: $condition) {
      id
      username
      email
      profilepicture
      bio
      cognitoid
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserTL = /* GraphQL */ `
  mutation DeleteUserTL(
    $input: DeleteUserTLInput!
    $condition: ModelUserTLConditionInput
  ) {
    deleteUserTL(input: $input, condition: $condition) {
      id
      username
      email
      profilepicture
      bio
      cognitoid
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createPredio = /* GraphQL */ `
  mutation CreatePredio(
    $input: CreatePredioInput!
    $condition: ModelPredioConditionInput
  ) {
    createPredio(input: $input, condition: $condition) {
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
export const updatePredio = /* GraphQL */ `
  mutation UpdatePredio(
    $input: UpdatePredioInput!
    $condition: ModelPredioConditionInput
  ) {
    updatePredio(input: $input, condition: $condition) {
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
export const deletePredio = /* GraphQL */ `
  mutation DeletePredio(
    $input: DeletePredioInput!
    $condition: ModelPredioConditionInput
  ) {
    deletePredio(input: $input, condition: $condition) {
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
export const createTech = /* GraphQL */ `
  mutation CreateTech(
    $input: CreateTechInput!
    $condition: ModelTechConditionInput
  ) {
    createTech(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTech = /* GraphQL */ `
  mutation UpdateTech(
    $input: UpdateTechInput!
    $condition: ModelTechConditionInput
  ) {
    updateTech(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTech = /* GraphQL */ `
  mutation DeleteTech(
    $input: DeleteTechInput!
    $condition: ModelTechConditionInput
  ) {
    deleteTech(input: $input, condition: $condition) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGoals = /* GraphQL */ `
  mutation CreateGoals(
    $input: CreateGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    createGoals(input: $input, condition: $condition) {
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
export const updateGoals = /* GraphQL */ `
  mutation UpdateGoals(
    $input: UpdateGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    updateGoals(input: $input, condition: $condition) {
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
export const deleteGoals = /* GraphQL */ `
  mutation DeleteGoals(
    $input: DeleteGoalsInput!
    $condition: ModelGoalsConditionInput
  ) {
    deleteGoals(input: $input, condition: $condition) {
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
