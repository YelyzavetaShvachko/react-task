import { useState } from 'react';

function useHeaderContent() {
  const  [activeContent, setActiveContent] = useState(false); 
  return [activeContent, setActiveContent];
}

export default useHeaderContent;