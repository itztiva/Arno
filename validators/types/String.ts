import { Base } from "../../classes/index";

export class String extends Base {
  validate(value: any, fieldName: string): boolean {
    if (typeof value !== "string" || value.trim() === "") {
      this.message = `${fieldName} must be a valid string`;
      return false;
    }
    return true;
  }
}
