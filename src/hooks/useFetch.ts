import { toRefs, reactive } from 'vue';

export default function (url: string, options: any) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
    isSingle: true
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      state.response = json;
      if (json.data.length > 1)
        state.isSingle = false
    } catch (errors: any) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };
  return { ...toRefs(state), fetchData };
}
