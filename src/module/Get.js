import display from './display'

  const Get = async (api) => {
    const request = new Request(api);
      const response = await fetch(request);
      const data = await response.json();
      const finalResults = data.result;
      display(finalResults); 
  };

export default Get;