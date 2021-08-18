
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
    name: 'EOS_AI_OPERATOR_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.35593,5H7.01119L5,13H6.028l.46375-1.87537H8.808L9.25993,13h1.06232ZM6.62716,10.32227,7.644,5.949h.04541l.98316,4.3733ZM11.23838,13V5h1v8Zm.18685,1H4V4H14V8.77924a5.50408,5.50408,0,0,1,4-.78486V6H16V4a2.00587,2.00587,0,0,0-2-2H12V0H10V2H8V0H6V2H4A2.00587,2.00587,0,0,0,2,4V6H0V8H2v2H0v2H2v2a2.00591,2.00591,0,0,0,2,2H6v2H8V16h2v2h2V16.00787A5.547,5.547,0,0,1,11.42523,14ZM13.5,13.5A3.5,3.5,0,1,1,17,17,3.499,3.499,0,0,1,13.5,13.5ZM17,19c-2.33625,0-7,1.1725-7,3.5V24H24V22.5C24,20.1725,19.33625,19,17,19Z"/></svg>
  </template>
