// Inside App.jsx, add this utility:
const loadExternalScript = (src, onLoad) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = onLoad;
  document.body.appendChild(script);
  return () => document.body.removeChild(script);
};

// Then use it inside a useEffect:
useEffect(() => {
  // Example: load a mock Dribbble widget script
  const cleanup = loadExternalScript('https://example.com/some-widget.js', () => {
    console.log('External script loaded');
    // Optionally call a function exposed by the script
    if (window.SomeWidget) window.SomeWidget.init();
  });
  return cleanup;
}, []);
