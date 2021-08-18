
  <script lang="ts">
  import Vue from 'vue';

  export default /*#__PURE__*/Vue.extend({
    name: 'EOS_THREE_DOTS_LOADING_ANIMATED' // vue component name
  });
  </script>
  
  <template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > <circle cx="18" cy="12" r="0"> <animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/> </circle> <circle cx="12" cy="12" r="0"> <animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/> </circle> <circle cx="6" cy="12" r="0"> <animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/> </circle> </svg> 
  </template>
