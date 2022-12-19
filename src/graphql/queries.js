/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSeasonalStatLine = /* GraphQL */ `
  query GetSeasonalStatLine($id: ID!) {
    getSeasonalStatLine(id: $id) {
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
export const listSeasonalStatLines = /* GraphQL */ `
  query ListSeasonalStatLines(
    $filter: ModelSeasonalStatLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonalStatLines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        goals
        assists
        points
        gamesPlayed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
