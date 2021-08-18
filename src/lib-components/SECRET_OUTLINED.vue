
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
    name: 'EOS_SECRET_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.17158,19l2,2-1,1H2V21a2.00227,2.00227,0,0,1,2-2h.17158M5,17H4a4,4,0,0,0-4,4v3H8L7,23l2-2L5,17Z"/><path d="M19.82842,19H20a2.00227,2.00227,0,0,1,2,2v1H18.82842l-1-1,2-2M19,17l-4,4,2,2-1,1h8V21a4,4,0,0,0-4-4Z"/><polygon points="12 18 11 20 11 24 13 24 13 20 12 18"/><path d="M17,5V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V5H4V6H20V5ZM15,4H9V2h6Z"/><path d="M15.5,7a2.488,2.488,0,0,0-1.98871,1H10.48871a2.43563,2.43563,0,1,0,.46087,1h2.10084A2.5,2.5,0,1,0,15.5,7Zm-7,3.5a1,1,0,1,1,1-1A1,1,0,0,1,8.5,10.5Zm7,0a1,1,0,1,1,1-1A1,1,0,0,1,15.5,10.5Z"/></svg>
  </template>
