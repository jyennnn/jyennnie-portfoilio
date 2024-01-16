const goToLink = (url) => {
    return () => {
      window.open(url, '_blank');
    };
  };

export { goToLink };