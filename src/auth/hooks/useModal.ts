import { useState } from 'react';

export default <FormModel extends object,
    FormFields extends string>(initialState: FormModel) => {
    const [model, setModel] = useState<FormModel>(initialState);

    const setModelValue = (key: FormFields, value: any) => {
        setModel({
            ...model,
            [key]: value
        });
    };

    return {
        setModelValue,
        model
    };
};
