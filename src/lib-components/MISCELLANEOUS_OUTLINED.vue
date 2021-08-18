
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
    name: 'EOS_MISCELLANEOUS_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36039,15,18,21H6l1.63961-6h8.72078M18,13H6L4,21a2.18549,2.18549,0,0,0,2,2H18a2.15843,2.15843,0,0,0,2-2l-2-8Z"/><polygon points="22 10 2 10 2 12 22 12 22 10 22 10"/><path d="M10,8a1,1,0,0,1,1,1h2a1,1,0,0,1,2,0h2a5.1098,5.1098,0,0,0-2.28564-3.196A6.30272,6.30272,0,0,0,15,3.83527C15,2.26941,14.55231,1,14,1s-1,1.26941-1,2.83527a7.11546,7.11546,0,0,0,.11505,1.30108,4.62618,4.62618,0,0,0-2.23395.001A7.09423,7.09423,0,0,0,11,3.83527C11,2.26941,10.55225,1,10,1,9.44769,1,9,2.26941,9,3.83527A6.30975,6.30975,0,0,0,9.28253,5.806,5.10972,5.10972,0,0,0,7,9H9A1,1,0,0,1,10,8Z"/></svg>
  </template>
