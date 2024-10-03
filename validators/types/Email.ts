import { Base } from "../../classes";

export class Email extends Base {
  validate(value: any, fieldName: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof value !== "string" || !emailRegex.test(value)) {
      this.message = `${fieldName} must be a valid email`;
      return false;
    }
    return true;
  }
}
