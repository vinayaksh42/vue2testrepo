
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
    name: 'EOS_IOT_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,13v9H3V13Z"/><path d="M23,13v2H21v7H19V15H17V13Z"/><path d="M12,11a7.537,7.537,0,0,1,3.96035,1.1485l1.447-1.44977A9.52185,9.52185,0,0,0,12,9a9.36257,9.36257,0,0,0-5.33311,1.68087L8.116,12.13273A7.36057,7.36057,0,0,1,12,11Z"/><path d="M12,7a11.49428,11.49428,0,0,1,6.83406,2.26931L20.26064,7.84A13.47949,13.47949,0,0,0,12,5,13.33283,13.33283,0,0,0,3.81368,7.82223L5.24019,9.25146A11.34329,11.34329,0,0,1,12,7Z"/><path d="M12,3a15.47105,15.47105,0,0,1,9.68734,3.41061l1.42651-1.42923A17.42925,17.42925,0,0,0,.96041,4.96353L2.387,6.39282A15.32766,15.32766,0,0,1,12,3Z"/><path d="M12,13a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,12,13Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,20Z"/></svg>
  </template>
