import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_n59IVyjV990kBcf2t2z3WjaYAezuaOzCIm4OinlR"
);

export const myCurrencyConverter = async (fromCurrency, toCurrency, units) => {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const result = response?.data[toCurrency] * units;
  return result;
};

