export interface IAuthContext {
  user: { [key: string]: any } | undefined | null;
  setUser: Function;
}
