
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
    name: 'EOS_EARBUDS_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,3c-2.76,0-5,2.24-5,5v8c0,1.66-1.34,3-3,3s-3-1.34-3-3V9h0.83C7.44,9,8.89,7.82,9,6.21c0.12-1.69-1.16-3.1-2.8-3.21 C4.44,2.89,3,4.42,3,6.19V16c0,2.76,2.24,5,5,5s5-2.24,5-5V8c0-1.66,1.34-3,3-3s3,1.34,3,3v7h-0.83c-1.61,0-3.06,1.18-3.17,2.79 c-0.12,1.69,1.16,3.1,2.8,3.21c1.76,0.12,3.2-1.42,3.2-3.18V8C21,5.24,18.76,3,16,3z M5,6c0-0.55,0.45-1,1-1s1,0.45,1,1S6.55,7,6,7 H5V6z M19,18c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1h1V18z"/></svg>
  </template>
