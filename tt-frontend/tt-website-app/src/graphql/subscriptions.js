/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStartup = /* GraphQL */ `
  subscription OnCreateStartup($filter: ModelSubscriptionStartupFilterInput) {
    onCreateStartup(filter: $filter) {
      id
      logo
      startupname
      coverimage
      verticals
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStartup = /* GraphQL */ `
  subscription OnUpdateStartup($filter: ModelSubscriptionStartupFilterInput) {
    onUpdateStartup(filter: $filter) {
      id
      logo
      startupname
      coverimage
      verticals
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStartup = /* GraphQL */ `
  subscription OnDeleteStartup($filter: ModelSubscriptionStartupFilterInput) {
    onDeleteStartup(filter: $filter) {
      id
      logo
      startupname
      coverimage
      verticals
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserTL = /* GraphQL */ `
  subscription OnCreateUserTL($filter: ModelSubscriptionUserTLFilterInput) {
    onCreateUserTL(filter: $filter) {
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
export const onUpdateUserTL = /* GraphQL */ `
  subscription OnUpdateUserTL($filter: ModelSubscriptionUserTLFilterInput) {
    onUpdateUserTL(filter: $filter) {
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
export const onDeleteUserTL = /* GraphQL */ `
  subscription OnDeleteUserTL($filter: ModelSubscriptionUserTLFilterInput) {
    onDeleteUserTL(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
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
export const onCreatePredio = /* GraphQL */ `
  subscription OnCreatePredio($filter: ModelSubscriptionPredioFilterInput) {
    onCreatePredio(filter: $filter) {
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
export const onUpdatePredio = /* GraphQL */ `
  subscription OnUpdatePredio($filter: ModelSubscriptionPredioFilterInput) {
    onUpdatePredio(filter: $filter) {
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
export const onDeletePredio = /* GraphQL */ `
  subscription OnDeletePredio($filter: ModelSubscriptionPredioFilterInput) {
    onDeletePredio(filter: $filter) {
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
export const onCreateTech = /* GraphQL */ `
  subscription OnCreateTech($filter: ModelSubscriptionTechFilterInput) {
    onCreateTech(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTech = /* GraphQL */ `
  subscription OnUpdateTech($filter: ModelSubscriptionTechFilterInput) {
    onUpdateTech(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTech = /* GraphQL */ `
  subscription OnDeleteTech($filter: ModelSubscriptionTechFilterInput) {
    onDeleteTech(filter: $filter) {
      id
      Name
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateGoals = /* GraphQL */ `
  subscription OnCreateGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onCreateGoals(filter: $filter) {
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
export const onUpdateGoals = /* GraphQL */ `
  subscription OnUpdateGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onUpdateGoals(filter: $filter) {
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
export const onDeleteGoals = /* GraphQL */ `
  subscription OnDeleteGoals($filter: ModelSubscriptionGoalsFilterInput) {
    onDeleteGoals(filter: $filter) {
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
