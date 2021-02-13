import React from 'react';
import LoadingScreen from './LoadingScreen';

interface LoadingWrapperProps {
    isLoading: boolean;
    message: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ isLoading, message, children }) => (
    <>
        {
            isLoading ? <LoadingScreen message={message}/> : children
        }
   </>
);

export default LoadingWrapper;
