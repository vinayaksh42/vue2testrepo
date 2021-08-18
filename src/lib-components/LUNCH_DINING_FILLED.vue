
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
    name: 'EOS_LUNCH_DINING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,10c0.32-3.28-4.28-6-9.99-6C6.3,4,1.7,6.72,2.02,10H22z" fill-rule="evenodd"/><path d="M5.35,13.5c0.55,0,0.78,0.14,1.15,0.36c0.45,0.27,1.07,0.64,2.18,0.64 s1.73-0.37,2.18-0.64c0.37-0.23,0.59-0.36,1.15-0.36c0.55,0,0.78,0.14,1.15,0.36c0.45,0.27,1.07,0.64,2.18,0.64 c1.11,0,1.73-0.37,2.18-0.64c0.37-0.23,0.59-0.36,1.15-0.36c0.55,0,0.78,0.14,1.15,0.36c0.45,0.27,1.07,0.63,2.17,0.64v-1.98 c0,0-0.79-0.16-1.16-0.38c-0.45-0.27-1.07-0.64-2.18-0.64c-1.11,0-1.73,0.37-2.18,0.64c-0.37,0.23-0.6,0.36-1.15,0.36 s-0.78-0.14-1.15-0.36c-0.45-0.27-1.07-0.64-2.18-0.64s-1.73,0.37-2.18,0.64c-0.37,0.23-0.59,0.36-1.15,0.36 c-0.55,0-0.78-0.14-1.15-0.36c-0.45-0.27-1.07-0.64-2.18-0.64c-1.11,0-1.73,0.37-2.18,0.64C2.78,12.37,2.56,12.5,2,12.5v2 c1.11,0,1.73-0.37,2.21-0.64C4.58,13.63,4.8,13.5,5.35,13.5z" fill-rule="evenodd"/><path d="M2,16v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2H2z" fill-rule="evenodd"/></svg>
  </template>
