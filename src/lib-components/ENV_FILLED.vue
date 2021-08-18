
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
    name: 'EOS_ENV_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,18a1,1,0,0,1-1,1H15a3,3,0,0,0-3,3,3,3,0,0,0-3-3H5a1,1,0,0,1-1-1H2a3,3,0,0,0,3,3H9a2,2,0,0,1,2,2h2a2,2,0,0,1,2-2h4a3,3,0,0,0,3-3Z"/><path d="M20,6a1,1,0,0,0-1-1H15a3,3,0,0,1-3-3A3,3,0,0,1,9,5H5A1,1,0,0,0,4,6H2A3,3,0,0,1,5,3H9a2,2,0,0,0,2-2h2a2,2,0,0,0,2,2h4a3,3,0,0,1,3,3Z"/><polygon points="12 12 9 8 7 8 7 16 9 16 9 12 12 16 14 16 14 8 12 8 12 12"/><polygon points="21 8 19 13.27 17 8 15 8 18 16 20 16 23 8 21 8"/><polygon points="1 8 1 16 6 16 6 14 3 14 3 13 5 13 5 11 3 11 3 10 6 10 6 8 1 8"/></svg>
  </template>
