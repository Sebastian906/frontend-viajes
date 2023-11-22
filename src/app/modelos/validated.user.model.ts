import { PermissionsModel } from "./permissions.model";
import { userModel } from "./user.model";

export class ValidatedUserModel {
  user?: userModel;
  token?: string = "";
  menu:PermissionsModel[]=[];
}
