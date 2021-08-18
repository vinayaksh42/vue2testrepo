
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
    name: 'EOS_TROUBLESHOOTING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M23,11H21.94928A10.017,10.017,0,0,0,13,2.05066V0H11V2.05066A10.01652,10.01652,0,0,0,2.05066,11H0v2H2.05066A10.017,10.017,0,0,0,11,21.94928V24h2V21.94928A10.0174,10.0174,0,0,0,21.94928,13H24V11Zm-9.2774,0A1.99536,1.99536,0,0,0,13,10.2774v-2.396A4.24808,4.24808,0,0,1,16.11853,11Zm2.396,2A4.24777,4.24777,0,0,1,13,16.11859v-2.396A1.99489,1.99489,0,0,0,13.7226,13ZM11,4.06946V6.3429A5.75748,5.75748,0,0,0,6.3429,11H4.06946A8.00705,8.00705,0,0,1,11,4.06946ZM10.2774,11H7.88147A4.24858,4.24858,0,0,1,11,7.88147V10.2774A1.99536,1.99536,0,0,0,10.2774,11ZM11,13.7226v2.39593A4.24808,4.24808,0,0,1,7.88141,13h2.396A1.99489,1.99489,0,0,0,11,13.7226ZM4.06946,13H6.3429A5.757,5.757,0,0,0,11,17.6571v2.27344A8.00705,8.00705,0,0,1,4.06946,13ZM13,19.93054V17.6571A5.75661,5.75661,0,0,0,17.6571,13h2.27344A8.00705,8.00705,0,0,1,13,19.93054ZM17.6571,11A5.757,5.757,0,0,0,13,6.3429V4.06946A8.00705,8.00705,0,0,1,19.93054,11Z"/> </svg> 
  </template>
