import { useState } from 'react';

export default <FormFields extends string>(
    fields: FormFields[],
    validators: {
        [key: string]: (value: any) => string | null
    },
    setModelValue: (key: FormFields, value: any) => void) => {
    const errorInitialState = fields.reduce((prev, val) => ({
        ...prev,
        [val]: null
    }), {});
    const [errors, setError] = useState<{
        [key: string]: string | null
    }>(errorInitialState);

    const checkIsValid = (key: FormFields, value: any) => {
        const validatorMethod = validators[key];
        if (validatorMethod) {
            const validationResult = validatorMethod(value);
            if (validationResult === null) {
                setError({
                    ...errors,
                    [key]: null
                });
                return true;
            }

            setError({
                ...errors,
                [key]: validationResult
            });
            return false;
        }
        return true;
    };

    const validateAllFields = (model: { [key: string]: any }) => {
        const batchedErrors = fields.reduce((previousValue, fieldKey) => ({
            ...previousValue,
            [fieldKey]: validators[fieldKey](model[fieldKey])
        }), {});

        setError(batchedErrors);
        return isAllFieldsValid(batchedErrors);
    };

    const isAllFieldsValid = (errorsToCheck = errors) => Object.keys(errorsToCheck)
        .filter(fieldKey => !errors[fieldKey]).length > 0;

    const setModelValueWithValidation = (key: FormFields, value: any) => {
        const valid = checkIsValid(key, value);
        if (valid) {
            setModelValue(key, value);
        }
    };

    return {
        setModelValueWithValidation,
        errors,
        validateAllFields,
        isValid: isAllFieldsValid()
    };
};
