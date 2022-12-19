/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      position
      shoots
      seasonalStatLineId
      seasonalStatLine {
        id
        goals
        assists
        points
        gamesPlayed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      position
      shoots
      seasonalStatLineId
      seasonalStatLine {
        id
        goals
        assists
        points
        gamesPlayed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      position
      shoots
      seasonalStatLineId
      seasonalStatLine {
        id
        goals
        assists
        points
        gamesPlayed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSeasonalStatLine = /* GraphQL */ `
  mutation CreateSeasonalStatLine(
    $input: CreateSeasonalStatLineInput!
    $condition: ModelSeasonalStatLineConditionInput
  ) {
    createSeasonalStatLine(input: $input, condition: $condition) {
      id
      goals
      assists
      points
      gamesPlayed
      createdAt
      updatedAt
    }
  }
`;
export const updateSeasonalStatLine = /* GraphQL */ `
  mutation UpdateSeasonalStatLine(
    $input: UpdateSeasonalStatLineInput!
    $condition: ModelSeasonalStatLineConditionInput
  ) {
    updateSeasonalStatLine(input: $input, condition: $condition) {
      id
      goals
      assists
      points
      gamesPlayed
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeasonalStatLine = /* GraphQL */ `
  mutation DeleteSeasonalStatLine(
    $input: DeleteSeasonalStatLineInput!
    $condition: ModelSeasonalStatLineConditionInput
  ) {
    deleteSeasonalStatLine(input: $input, condition: $condition) {
      id
      goals
      assists
      points
      gamesPlayed
      createdAt
      updatedAt
    }
  }
`;
