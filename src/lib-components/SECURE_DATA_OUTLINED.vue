
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
    name: 'EOS_SECURE_DATA_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.8,17V15.5a2.818,2.818,0,0,0-5.6,0V17A1.29043,1.29043,0,0,0,15,18.2v3.5A1.30939,1.30939,0,0,0,16.2,23h5.5A1.30937,1.30937,0,0,0,23,21.8V18.3A1.30933,1.30933,0,0,0,21.8,17Zm-4.3-1.5A1.37465,1.37465,0,0,1,19,14.2,1.37465,1.37465,0,0,1,20.5,15.5V17h-3Z"/><path d="M24,11V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V20a2,2,0,0,0,2,2H13V20H2V2H22v9"/><polygon points="6 4 4 4 4 6 6 6 6 4 6 4"/><polygon points="20 4 8 4 8 6 20 6 20 4 20 4"/><polygon points="13 16 8 16 8 18 13 18 13 16 13 16"/><polygon points="6 16 4 16 4 18 6 18 6 16 6 16"/><polygon points="10 8 8 8 8 10 10 10 10 8 10 8"/><polygon points="20 8 12 8 12 10 20 10 20 8 20 8"/><path d="M14.80786,12H12v2h2.2v-.5a2.26013,2.26013,0,0,1,.60785-1.5Z"/><polygon points="10 12 8 12 8 14 10 14 10 12 10 12"/></svg>
  </template>
