import { createContext, useContext } from 'react'

const PathnameContext = createContext();

export const usePathname = () => useContext(PathnameContext);

export default PathnameContext