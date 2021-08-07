<template>
  <Quote />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quote from './components/Quote.vue';

export default defineComponent({
  name: 'App',
  components: {
    Quote,
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 10px;
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 5.7143rem;
  height: 5.7143rem;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 4.5714rem;
  height: 4.5714rem;
  margin: 0.5714rem;
  border: 0.5714rem solid #4f4f4f;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4f4f4f transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 480px) {
  * {
    font-size: 11px;
  }
}
@media (min-width: 768px) {
  * {
    font-size: 12px;
  }
}
</style>
