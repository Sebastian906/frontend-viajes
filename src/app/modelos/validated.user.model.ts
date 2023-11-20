import { userModel } from "./user.model";

export class ValidatedUserModel {
  user?: userModel;
  token?: string = "";
}
