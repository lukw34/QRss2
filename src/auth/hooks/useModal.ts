import {useState} from 'react';

interface UseModalInterface<Model, Fields> {
    model: Model,
    setModelValue: (key: Fields, value: any) => void
}

export default <FormModel extends Record<string, unknown>,
    FormFields extends string>(initialState: FormModel): UseModalInterface<FormModel, FormFields> => {
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
