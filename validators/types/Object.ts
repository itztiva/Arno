import { IValidator } from "../../interfaces";
import { Base } from "../../classes";

export class Object extends Base {
  private schema: { [key: string]: IValidator };

  constructor(schema: { [key: string]: IValidator }) {
    super();
    this.schema = schema;
  }

  validate(value: any, fieldName: string): boolean {
    if (typeof value !== "object" || value === null) {
      this.message = `${fieldName} must be a valid object`;
      return false;
    }

    for (const key in this.schema) {
      const validator = this.schema[key];
      const itemValue = value[key];

      if (!validator.validate(itemValue, key)) {
        this.message = `${fieldName}.${key}: ${validator.message}`;
        return false;
      }
    }
    return true;
  }
}
