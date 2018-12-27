export type GraphQLData<T extends {}> = {
  value: T[keyof T]
}['value']
