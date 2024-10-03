import { Base } from "../../classes";

export class Boolean extends Base {
  validate(value: any, fieldName: string): boolean {
    if (typeof value !== "boolean") {
      this.message = `${fieldName} must be a valid boolean`;
      return false;
    }
    return true;
  }
}
