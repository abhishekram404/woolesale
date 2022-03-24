import firebase from "firebase/auth";
export interface IAuthContext {
  // user: { [key: string]: any } | undefined | null;
  user: firebase.User | undefined | null;
  setUser: Function;
}
