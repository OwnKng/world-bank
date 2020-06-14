const worldBankApi = {};

worldBankApi.getData = async (start = "1960", indicator, countryCode) => {

  let code;

  switch (indicator) {
    case 'lifeExp': code = "SP.DYN.LE00.IN";
      break; 
    case 'gdpGrowth': code = "NY.GDP.MKTP.KD.ZG";
      break;
    case 'pop': code = "SP.POP.TOTL";
      break;
    default: code = "NY.GNP.PCAP.CD";
  }

    const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${code}?date=${start}:2018&format=json&per_page=100`;

    try {
        const response = await fetch(url);

        if(response.ok){
            return response.json().then(jsonResponse => {
              return jsonResponse;
            })
          }
  
    } catch (error){
        console.log(error)
    }
}

export default worldBankApi;