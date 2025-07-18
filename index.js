import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import dotenv from 'dotenv';
dotenv.config();

const KEY = process.env.API_KEY
const freecurrencyapi = new Freecurrencyapi(KEY);

export const myCurrencyConverter = async (fromCurrency, toCurrency, units) => {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const result = response?.data?.[toCurrency] * units;
  return result;
};