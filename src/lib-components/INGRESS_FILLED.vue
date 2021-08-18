
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
    name: 'EOS_INGRESS_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,24H10V20h4v4Zm2-13.98247H13v7.99631H11V10.01753H8L9,9.0166l1-1.00092,1-1.00092,1-1.00092,1,1.00092,1,1.00092L15,9.0166ZM1,15.99935V3.00065a1.9829,1.9829,0,0,1,.15781-.77682,2.01986,2.01986,0,0,1,1.06563-1.066A1.98115,1.98115,0,0,1,3,1H21a1.98115,1.98115,0,0,1,.77656.15786,2.01986,2.01986,0,0,1,1.06563,1.066A1.9829,1.9829,0,0,1,23,3.00065v12.9987a1.98294,1.98294,0,0,1-.15781.77682,2.01986,2.01986,0,0,1-1.06563,1.066A1.98115,1.98115,0,0,1,21,18H15V16.00935h6V3.0096H3V16.00935H9V18H3a1.98115,1.98115,0,0,1-.77656-.15786,2.01986,2.01986,0,0,1-1.06563-1.066A1.98294,1.98294,0,0,1,1,15.99935Z"/></svg> 
  </template>
