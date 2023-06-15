export const readFile = (
  element: HTMLInputElement,
  setState: (str: string) => void,
  fallback?: () => void
) => {
  const fReader = new FileReader();
  if (element && element.files)
    try {
      if (!element.files[0].type.includes("image")) fallback && fallback();
      else {
        fReader.readAsDataURL(element.files[0]);
        fReader.onloadend = (event: ProgressEvent<FileReader>) => {
          if (event && event.target && event.target.result)
            setState(event.target?.result as string);
        };
      }
    } catch {
      fallback && fallback();
    }
};
