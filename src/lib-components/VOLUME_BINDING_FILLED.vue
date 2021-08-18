
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
    name: 'EOS_VOLUME_BINDING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M6,18.99988A5.99988,5.99988,0,0,1,12,13h4V3a2.00073,2.00073,0,0,0-2-2H4A2.00073,2.00073,0,0,0,2,3V19.001A1.99984,1.99984,0,0,0,4,21H6.34875A5.97625,5.97625,0,0,1,6,18.99988ZM14,2a1,1,0,1,1-1,1A1,1,0,0,1,14,2ZM9,3a5,5,0,1,1-2,9.57788V10H4.42212A4.99113,4.99113,0,0,1,9,3ZM4,2A1,1,0,1,1,3,3,1,1,0,0,1,4,2ZM4,20a1,1,0,1,1,1-1A1,1,0,0,1,4,20Z"/>   <circle cx="9" cy="8.00004" r="2"/>   <rect x="13" y="18" width="4" height="2"/>   <path d="M18,15H16v2h2a2,2,0,0,1,0,4H16v2h2a4,4,0,0,0,0-8Z"/>   <path d="M14,21H12a2,2,0,0,1,0-4h2V15H12a4,4,0,0,0,0,8h2Z"/> </svg> 
  </template>
