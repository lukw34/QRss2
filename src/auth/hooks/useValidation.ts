import { useState } from 'react';

export default <T extends string>(fields: T[], validators: {
    [key: string]: (value: any) => string | null
}) => {
    const errorInitialState = fields.reduce((prev, val) => ({
        ...prev,
        [val]: null
    }), {});
    const [errors, setError] = useState<{
        [key: string]: string | null
    }>(errorInitialState);

    const checkIsValid = (key: T, value: any) => {
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

    const validateAllFields = (model: { [key: string]: any}) => {
        const batchedErrors = fields.reduce((previousValue, fieldKey) => ({
            ...previousValue,
            [fieldKey]: validators[fieldKey](model[fieldKey])
        }), {});

        setError(batchedErrors);
        return isAllFieldsValid(batchedErrors);
    };

    const isAllFieldsValid = (errorsToCheck = errors) => Object.keys(errorsToCheck)
    .filter(fieldKey => !errors[fieldKey]).length > 0;

    return {
        checkIsValid,
        errors,
        validateAllFields,
        isValid: isAllFieldsValid()
    };
};
