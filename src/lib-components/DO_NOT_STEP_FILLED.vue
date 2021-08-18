
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
    name: 'EOS_DO_NOT_STEP_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.39,4.22l7.9,7.9c0.18,0.2,0.18,0.5-0.01,0.7c-0.1,0.1-0.23,0.15-0.35,0.15s-0.26-0.05-0.35-0.15L6.87,11.1 c-0.11,0.4-0.26,0.78-0.45,1.12l1.4,1.4c0.2,0.2,0.2,0.51,0,0.71c-0.1,0.1-0.23,0.15-0.35,0.15s-0.26-0.05-0.35-0.15l-1.27-1.27 c-0.24,0.29-0.5,0.56-0.77,0.8l1.28,1.28c0.2,0.2,0.2,0.51,0,0.71C6.26,15.95,6.13,16,6,16s-0.26-0.05-0.35-0.15l-1.38-1.38 c-0.69,0.46-1.39,0.79-1.97,1.02C1.52,15.8,1,16.53,1,17.37V20h9.5l3.33-3.33l5.94,5.94l1.41-1.41L2.81,2.81L1.39,4.22z M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M20.88,9.08l-4.48,4.48L9.3,6.47L13.8,2L20.88,9.08z"/></svg>
  </template>
