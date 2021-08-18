
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
    name: 'EOS_POD_SECURITY_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.75,12,17.5,11l-2.25,1L13,13v3a6.40493,6.40493,0,0,0,1.28247,3.80438A5.77647,5.77647,0,0,0,17.5,22a5.77647,5.77647,0,0,0,3.21753-2.19562A6.40493,6.40493,0,0,0,22,16V13Zm.09814,7.28687A4.7874,4.7874,0,0,1,17.5,20.965V16.5H14V13.65l1.75-.77746L17.5,12.095v4.4H21A5.80322,5.80322,0,0,1,19.84814,19.28687Z"/><path d="M13,4a1.00368,1.00368,0,0,0-1-1H8A1.00368,1.00368,0,0,0,7,4V5h6Z"/><circle cx="10" cy="11" r="1.5"/><polygon points="12 17 12 15 5.1 15 8.28 8 11.7 8 13.404 11.726 15.229 10.915 12.99 6 7 6 2 17 12 17"/><path d="M14,21a5.79693,5.79693,0,0,1-.51855-.59668A7.48756,7.48756,0,0,1,12.67865,19H6V18H4v1.00281A1.99841,1.99841,0,0,0,6,21"/></svg>
  </template>
