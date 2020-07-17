import React from "react";
import copy from "copy-to-clipboard";

const useClipboard = (text, timeout = 3000) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const onCopy = React.useCallback(() => {
    const didCopy = copy(text);
    setHasCopied(didCopy);
  }, [text]);

  const setNotCopied = () => setHasCopied(false);

  React.useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setNotCopied();
      }, timeout);

      return () => clearTimeout(id);
    }
  }, [timeout, hasCopied]);

  return [hasCopied, onCopy, setNotCopied];
};

export default useClipboard;
