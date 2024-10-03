export interface IValidator {
  validate(value: any, fieldName: string): boolean;
  message: string;
  optional(): IValidator;
}
