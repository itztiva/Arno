import { Optional } from "../classes/Optional";
import { IValidator } from "../interfaces";
import {
  String,
  NumberV,
  Boolean,
  ArrayV,
  Object as ObjectV,
  DateV,
  Email,
  Enum,
  Url,
} from "../validators";

export class Arno {
  private schema: { [key: string]: IValidator };

  constructor(schema: { [key: string]: IValidator }) {
    this.schema = schema;
  }

  validate(data: { [key: string]: any }) {
    const errors: { [key: string]: string } = {};

    for (const key in this.schema) {
      const validator = this.schema[key];
      const value = data[key];

      if (value !== undefined && value !== null && value !== "") {
        if (!validator.validate(value, key)) {
          errors[key] = validator.message;
        }
      } else if (!(validator instanceof Optional)) {
        errors[key] = `${key} is required`;
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  static string(): IValidator {
    return new String();
  }

  static number(): IValidator {
    return new NumberV();
  }

  static boolean(): IValidator {
    return new Boolean();
  }

  static array(validator: IValidator): IValidator {
    return new ArrayV(validator);
  }

  static object(schema: { [key: string]: IValidator }): IValidator {
    return new ObjectV(schema);
  }

  static date(): IValidator {
    return new DateV();
  }

  static email(): IValidator {
    return new Email();
  }

  static url(): IValidator {
    return new Url();
  }

  static enum<T>(...validValues: T[]): IValidator {
    return new Enum(validValues);
  }
}
