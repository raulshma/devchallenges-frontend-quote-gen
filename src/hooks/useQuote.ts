import { toRefs, reactive } from 'vue';
import useFetch from './useFetch';
export default function () {
  const quotes = reactive({ quotes: [], error: null, fetching: false, isSingle: true });
  const getQuotes = async (author: string = "") => {
    const url = author ? `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}` : `https://quote-garden.herokuapp.com/api/v3/quotes/random?count=1`
    const { response, error, fetchData, fetching, isSingle } = useFetch(
      url,
      {}
    );
    fetchData();
    const res = response as any;
    quotes.quotes = res;
    quotes.error = error as any;
    quotes.fetching = fetching as any;
    quotes.isSingle = isSingle as any;
  };
  return { getQuotes, ...toRefs(quotes) };
}
