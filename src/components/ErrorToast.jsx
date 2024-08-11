import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const ErrorToast = () => {
    const toast = useToast();

    useEffect(() => {
        toast({
            title: 'An error occurred.',
            description: "Unable to create your account. Please try again later.",
            position: 'top',
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
    }, [toast]);

    return null;  // This component does not render anything to the UI
};

export default ErrorToast;
