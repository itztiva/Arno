import { IValidator } from '../interfaces/index';
import { Optional } from './Optional';

export class Base implements IValidator {
    message: string = '';

    validate(value: any, fieldName: string): boolean {
        return true;
    }

    optional(): IValidator {
        return new Optional(this);
    }
}