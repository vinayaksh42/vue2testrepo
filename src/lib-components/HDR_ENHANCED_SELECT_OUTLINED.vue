
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
    name: 'EOS_HDR_ENHANCED_SELECT_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S8.69,2,12,2z M12,4C9.79,4,8,5.79,8,8s1.79,4,4,4s4-1.79,4-4 S14.21,4,12,4z M13,11h-2V9H9V7h2V5h2v2h2v2h-2V11z M24,20h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20z M18,18.5c0,0.6-0.4,1.1-0.9,1.4 L18,22h-1.5l-0.9-2h-1.1v2H13v-6h3.5c0.8,0,1.5,0.7,1.5,1.5V18.5z M16.5,18.5v-1h-2v1H16.5z M3.5,18v-2H5v6H3.5v-2.5h-2V22H0v-6 h1.5v2H3.5z M10,16c0.8,0,1.5,0.7,1.5,1.5v3c0,0.8-0.7,1.5-1.5,1.5H6.5v-6H10z M10,20.5v-3H8v3H10z"/></svg>
  </template>
