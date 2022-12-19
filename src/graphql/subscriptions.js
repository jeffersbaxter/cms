/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateSeasonalStatLine = /* GraphQL */ `
  subscription OnCreateSeasonalStatLine(
    $filter: ModelSubscriptionSeasonalStatLineFilterInput
  ) {
    onCreateSeasonalStatLine(filter: $filter) {
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
export const onUpdateSeasonalStatLine = /* GraphQL */ `
  subscription OnUpdateSeasonalStatLine(
    $filter: ModelSubscriptionSeasonalStatLineFilterInput
  ) {
    onUpdateSeasonalStatLine(filter: $filter) {
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
export const onDeleteSeasonalStatLine = /* GraphQL */ `
  subscription OnDeleteSeasonalStatLine(
    $filter: ModelSubscriptionSeasonalStatLineFilterInput
  ) {
    onDeleteSeasonalStatLine(filter: $filter) {
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
