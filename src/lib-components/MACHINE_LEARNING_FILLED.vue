
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
    name: 'EOS_MACHINE_LEARNING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="8" width="2" height="1"/><rect x="11" y="4" width="2" height="1"/><rect x="11" y="10" width="2" height="1"/><path d="M21,12V9a13.12436,13.12436,0,0,0-8.35364,3H11.35364A13.12436,13.12436,0,0,0,3,9v3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1v4a13.153,13.153,0,0,1,9,3.55A13.19937,13.19937,0,0,1,21,20V16a1,1,0,0,0,1-1V13A1,1,0,0,0,21,12Z"/><circle cx="9" cy="4" r="1"/><circle cx="15" cy="4" r="1"/><path d="M16,8H8A3.00328,3.00328,0,0,1,5,5V3A3.00328,3.00328,0,0,1,8,0h8a3.00328,3.00328,0,0,1,3,3V5A3.00328,3.00328,0,0,1,16,8ZM8,2A1.0013,1.0013,0,0,0,7,3V5A1.0013,1.0013,0,0,0,8,6h8a1.001,1.001,0,0,0,1-1V3a1.001,1.001,0,0,0-1-1Z"/></svg> 
  </template>
