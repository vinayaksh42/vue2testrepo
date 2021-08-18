
  <script lang="ts">
  import Vue from 'vue';
  
  export interface ValueMap {
      [index: string]: string | string,
  }
  
  export interface IconProps {
      size?: string | number,
      color?: string,
      deg?: string,
      horizontalFlip?: boolean,
      verticalFlip?: boolean,
  }
  
  export default /*#__PURE__*/Vue.extend({
    name: 'EOS_PATTERN_FILLED', // vue component name
    props:  {
        size: {
          type: String,
          required: false,
          default: "m"
        },
        color: {
          type: String,
          required: false,
          default: "#000000"
        },
        deg: {
          type: String,
          required: false,
          default: "0"
        },
        horizontalFlip: {
          type: Boolean,
          required: false,
          default: false
        },
        verticalFlip: {
          type: Boolean,
          required: false,
          default: false
        }
    },
    methods: {
      transform(deg : string, horizontalFlip : boolean, verticalFlip : boolean): String {
        if (!deg) {
            deg = "0";
          }
          let translateX = 0;
          let translateY = 0;
          let scaleX = 1;
          let scaleY = 1;
    
          if (horizontalFlip) {
            scaleX = -1;
            translateX = 0;
          }
    
          if (verticalFlip) {
            scaleY = -1;
            translateY = 0;
          }
    
          return (
            "rotate(" +
            deg +
            " 0 0)" +
            "translate(" +
            translateX +
            "," +
            translateY +
            ") scale(" +
            scaleX +
            "," +
            scaleY +
            ")"
          );
      },
      sizeFunction(size:string): String {
        if(!size) {
            size = "m"
          }
          let ValueMap: ValueMap = {
            xs: '4',
            s: '8',
            base: '14',
            m: '18',
            l: '24',
            xl: '32',
            xxl: '48',
            xxxl: '64'
          };
          if (Object.keys(ValueMap).includes(size)) {
            size = ValueMap[size];
          }
          return size;
      },
    },
  });
  </script>
  
  <template>
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,6c0-1.1,0.9-2,2-2s2,0.9,2,2S7.1,8,6,8S4,7.1,4,6z M6,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,14,6,14z M12,8 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M18,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S19.1,10,18,10z M17.98,16 c-0.74,0-1.37,0.4-1.72,1h-2.54c-0.34-0.6-0.98-1-1.72-1s-1.37,0.4-1.72,1H8.41l3.07-3.07C11.65,13.97,11.82,14,12,14 c1.1,0,2-0.9,2-2c0-0.18-0.03-0.35-0.07-0.51l3.56-3.56C17.65,7.97,17.82,8,18,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 c0,0.18,0.03,0.35,0.07,0.51l-3.56,3.56C12.35,10.03,12.18,10,12,10c-1.1,0-2,0.9-2,2c0,0.18,0.03,0.35,0.07,0.51l-3.56,3.56 C6.35,16.03,6.18,16,6,16c-1.1,0-2,0.9-2,2s0.9,2,2,2c0.74,0,1.37-0.4,1.72-1h2.57c0.34,0.6,0.98,1,1.72,1s1.37-0.4,1.72-1h2.55 c0.34,0.6,0.98,1,1.72,1c1.1,0,2-0.9,2-2C19.98,16.9,19.08,16,17.98,16z"/></svg>
  </template>
