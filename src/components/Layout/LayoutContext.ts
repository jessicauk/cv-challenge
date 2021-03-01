import React from 'react';

interface ContextLayout {
    idLanguage: string;
    setIdLanguage: Function;
};

const LayoutContext = React.createContext<ContextLayout>({
    idLanguage: '',
    setIdLanguage: () => {},
});

export default LayoutContext;