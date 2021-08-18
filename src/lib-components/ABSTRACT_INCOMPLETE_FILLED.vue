
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
    name: 'EOS_ABSTRACT_INCOMPLETE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.72,11.01l-4.01-7A1.96776,1.96776,0,0,0,15.98,3H8A1.96777,1.96777,0,0,0,6.27,4.01L4.74,6.68l-.8,1.39L2.26,11.01A2.0325,2.0325,0,0,0,2,12a2.00444,2.00444,0,0,0,.26.99l1.68,2.94.8,1.39,1.53,2.67A1.96777,1.96777,0,0,0,8,21h7.98a1.96776,1.96776,0,0,0,1.73-1.01l4.01-7a2.00444,2.00444,0,0,0,.26-.99A1.95565,1.95565,0,0,0,21.72,11.01Zm-4.38361,5.97351.00556-.00378-.0044.0075ZM20.28,12,17.345,16.97449c-.11835.00885-.23437.02551-.355.02551A4.99424,4.99424,0,0,1,12,12.09753V11.98A5.004,5.004,0,0,0,7,7a2.95969,2.95969,0,0,0-.31.03L7.89,5h8.26l4.14,7Z"/></svg>
  </template>
