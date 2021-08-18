
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
    name: 'EOS_NETWORK_POLICY_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00001 24.00001"><path d="M11,1a1,1,0,1,1,1,1A1,1,0,0,1,11,1ZM3,7A1,1,0,1,0,2,6,1,1,0,0,0,3,7ZM7,3A1,1,0,1,0,6,2,1,1,0,0,0,7,3ZM17,3a1,1,0,1,0-1-1A1,1,0,0,0,17,3Zm4,4a1,1,0,1,0-1-1A1,1,0,0,0,21,7ZM10.68934,19.88337a9.57041,9.57041,0,0,1-.5896-2.20185,5.96146,5.96146,0,0,1-3.99487-6.77667L9.6,14.4V15.2a1.58544,1.58544,0,0,0,.4,1.04522V12H8.8V10.4h1.6a.80233.80233,0,0,0,.8-.8V8h1.6a1.60052,1.60052,0,0,0,1.5899-1.50048,6.02687,6.02687,0,0,1,2.35352,1.85717L18,7.833l1.08.45008a7.99665,7.99665,0,1,0-8.39062,11.60028ZM7,21a1,1,0,1,0,1,1A1,1,0,0,0,7,21Zm5,1a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM3,17a1,1,0,1,0,1,1A1,1,0,0,0,3,17ZM1,11a1,1,0,1,0,1,1A1,1,0,0,0,1,11Zm23,1.5V16.3631A8.16871,8.16871,0,0,1,18,24a8.1199,8.1199,0,0,1-6-7.59618V12.5L18,10Z"/></svg> 
  </template>
