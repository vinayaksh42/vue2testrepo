
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
    name: 'EOS_FILE_SYSTEM_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,8H18.41l-1-1H15a2.00587,2.00587,0,0,0-2,2v4a2.00591,2.00591,0,0,0,2,2h6a2.00591,2.00591,0,0,0,2-2V10A2.00587,2.00587,0,0,0,21,8Zm0,5H15V9h2l1,1h3Z"/><path d="M21,17H18.41l-1-1H15a2.00587,2.00587,0,0,0-2,2v4a2.00591,2.00591,0,0,0,2,2h6a2.00591,2.00591,0,0,0,2-2V19A2.00587,2.00587,0,0,0,21,17Zm0,5H15V18h2l1,1h3Z"/><polygon points="8 19 8 12 13 12 13 10 8 10 8 8 6 8 6 21 13 21 13 19 8 19"/><path d="M10,1H7.41l-1-1H4A2.00587,2.00587,0,0,0,2,2V6A2.00591,2.00591,0,0,0,4,8h6a2.00591,2.00591,0,0,0,2-2V3A2.00587,2.00587,0,0,0,10,1Zm0,5H4V2H6L7,3h3Z"/></svg>
  </template>
