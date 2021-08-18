import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
  <script lang="ts">
  import Vue from 'vue';

  export default /*#__PURE__*/Vue.extend({
    name: 'EOS_${fileName}' // vue component name
  });
  </script>
  
  <template>
    ${data}
  </template>
`
  return (render)
}

export default componentTemplate
