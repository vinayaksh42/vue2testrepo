
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
    name: 'EOS_SECURE_DATA_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.26862,15.01038A4.28181,4.28181,0,0,1,15.04993,13.01H11.02167v-2h7.994v.001a4.90339,4.90339,0,0,1,1.99871.43939V3.01337A2.00146,2.00146,0,0,0,19.01294,1.0119H3.01587A2.00151,2.00151,0,0,0,1.0144,3.01337V17.01044A2.00147,2.00147,0,0,0,3.01587,19.0119H13.0127v-.801a3.01328,3.01328,0,0,1,.26831-1.20056H7.01337v-2Zm4.74414-6.0008H11.01868v-2h7.99408ZM7.01337,3.01062H19.01276v2H7.01337ZM5.002,17.01038h-2v-2h2Zm0-11.99976h-2v-2h2Zm2.00538,1.999h2v2h-2Zm.003,6.00043v-2h2v2Zm14.80236,4.001v-1.5a2.818,2.818,0,0,0-5.6,0v1.5a1.29042,1.29042,0,0,0-1.2,1.2v3.5a1.30931,1.30931,0,0,0,1.2,1.3h5.5a1.30939,1.30939,0,0,0,1.3-1.2v-3.5A1.30937,1.30937,0,0,0,21.81274,17.01105Zm-1.3,0h-3v-1.5a1.37461,1.37461,0,0,1,1.5-1.3,1.37465,1.37465,0,0,1,1.5,1.3Z"/> </svg> 
  </template>
