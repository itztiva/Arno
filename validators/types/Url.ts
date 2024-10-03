import { Base } from "../../classes";

export class Url extends Base {
  validate(value: any, fieldName: string): boolean {
    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (typeof value !== "string" || !urlRegex.test(value)) {
      this.message = `${fieldName} must be a valid URL`;
      return false;
    }
    return true;
  }
}
