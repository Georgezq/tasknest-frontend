import { ValidatorFn } from "@angular/forms";

export class Validators{

    static max(max: number): ValidatorFn {
        return (control) => {
            if (control.value !== null && control.value > max) {
                return { max: { requiredMax: max, actual: control.value } };
            }
            return null;
        };
    }

    static required(): ValidatorFn {
        return (control) => {
            if (control.value === null || control.value === undefined || control.value === '') {
                return { required: true };
            }
            return null;
        };
    }

    static email(): ValidatorFn {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (control) => {
            if (control.value && !emailRegex.test(control.value)) {
                return { email: true };
            }
            return null;
        };
    }
}