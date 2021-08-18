
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
    name: 'EOS_PATTERNS_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <circle cx="4.02031" cy="4.01495" r="3"/>   <path d="M15.03032,12.025a2.99122,2.99122,0,0,0-2-2.81629V6.82812A2.98973,2.98973,0,0,0,14.8366,5.015H17.204a2.98925,2.98925,0,0,0,1.81628,1.81628V9.21178a3.00124,3.00124,0,1,0,2-.00622V6.83123A2.99289,2.99289,0,1,0,17.204,3.01495H14.8366a2.99284,2.99284,0,1,0-3.80628,3.81939V9.20867a2.98287,2.98287,0,0,0,0,5.63257v2.37433a2.98835,2.98835,0,0,0-1.82757,1.82361H6.83788a2.98883,2.98883,0,0,0-1.81757-1.8205V14.84435a2.9988,2.9988,0,1,0-2-.00622v2.38055a2.99293,2.99293,0,1,0,3.815,3.8205h2.37a2.993,2.993,0,1,0,3.825-3.81739V14.84124A2.99122,2.99122,0,0,0,15.03032,12.025Z"/>   <circle cx="20.02031" cy="20.03497" r="3"/> </svg> 
  </template>
