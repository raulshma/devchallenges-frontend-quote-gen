<template>
  <div class="header">
    <button class="btn-random" @click="() => getQuotes('')">
      random
      <span class="material-icons md-light md-icon icon-refresh">refresh</span>
    </button>
  </div>
  <div class="main">
    <div class="loader quote-box" v-if="fetching">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <template v-if="isSingle">
      <div class="quote-box" v-for="quote in quotes.data" :key="quote._id">
        <blockquote class="quote-text" ref="quoteText">
          {{ quote.quoteText }}
        </blockquote>
        <div class="author" @click="() => getQuotes(quote.quoteAuthor)">
          <div class="author-text">
            <span class="author-name">{{ quote.quoteAuthor }}</span>
            <span class="genre">{{ quote.quoteGenre }}</span>
          </div>
          <div class="arrow-next">
            <span class="material-icons md-light md-icon">arrow forward</span>
          </div>
        </div>
      </div>
    </template>
    <div v-if="!isSingle" class="quote-box-multiple-wrapper">
      <div class="author-text">
        <span class="author-name">{{ quotes.data[0].quoteAuthor }}</span>
      </div>
      <div
        v-for="quote in quotes.data"
        :key="quote._id"
        class="quote-box-multiple-item"
      >
        <blockquote class="quote-text">
          {{ quote.quoteText }}
        </blockquote>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import useQuote from '../hooks/useQuote';
export default {
  setup() {
    const { getQuotes, quotes, error, fetching, isSingle } = useQuote();

    const quoteText = ref(null);

    onMounted(() => {
      getQuotes();
    });

    return {
      quotes,
      error,
      fetching,
      isSingle,
      getQuotes,
      quoteText,
    };
  },
};
</script>

<style>
@import './Quote.css';
</style>
