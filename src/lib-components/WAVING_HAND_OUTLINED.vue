
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
    name: 'EOS_WAVING_HAND_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.03,4.95L3.49,8.49c-3.32,3.32-3.32,8.7,0,12.02s8.7,3.32,12.02,0l6.01-6.01c0.97-0.97,0.97-2.56,0-3.54 c-0.12-0.12-0.25-0.23-0.39-0.32l0.39-0.39c0.97-0.97,0.97-2.56,0-3.54c-0.16-0.16-0.35-0.3-0.54-0.41c0.4-0.92,0.23-2.02-0.52-2.77 c-0.87-0.87-2.22-0.96-3.2-0.28c-0.1-0.15-0.21-0.29-0.34-0.42c-0.97-0.97-2.56-0.97-3.54,0l-2.51,2.51 c-0.09-0.14-0.2-0.27-0.32-0.39C9.58,3.98,8,3.98,7.03,4.95z M8.44,6.37c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71 l-3.18,3.18c1.17,1.17,1.17,3.07,0,4.24l1.41,1.41c1.45-1.45,1.82-3.57,1.12-5.36l6.3-6.3c0.2-0.2,0.51-0.2,0.71,0s0.2,0.51,0,0.71 l-4.6,4.6l1.41,1.41l6.01-6.01c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71l-6.01,6.01l1.41,1.41l4.95-4.95 c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71l-5.66,5.66l1.41,1.41l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71 L14.1,19.1c-2.54,2.54-6.65,2.54-9.19,0s-2.54-6.65,0-9.19L8.44,6.37z M23,17c0,3.31-2.69,6-6,6v-1.5c2.48,0,4.5-2.02,4.5-4.5H23z M1,7c0-3.31,2.69-6,6-6v1.5C4.52,2.5,2.5,4.52,2.5,7H1z"/></svg>
  </template>
