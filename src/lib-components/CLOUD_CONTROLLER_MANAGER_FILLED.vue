
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
    name: 'EOS_CLOUD_CONTROLLER_MANAGER_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10l8,0v2.00007L9,12Zm15,0H21V8H19v6h2V12h3Z"/><path d="M9,20h8v2H9Zm15,0H21V18H19v6h2V22h3Z"/><path d="M24,17H16V15h8ZM9,17h3v2h2V13H12v2H9Z"/><path d="M19,5.99983,7,6V16s-7,.1698-7-6A6.0712,6.0712,0,0,1,1.23518,5.99983,5.98944,5.98944,0,0,1,5.694,4.00989a4.86019,4.86019,0,0,1,.57242-.99l.27116-.36c.07031-.08.1506-.17.231-.26a3.597,3.597,0,0,1,.2611-.29A6.89655,6.89655,0,0,1,12,0c.16065,0,.36206.01.51272.02a7.0122,7.0122,0,0,1,3.75581,1.39,8.54643,8.54643,0,0,1,.91382.81A7.0434,7.0434,0,0,1,19,5.99983Z"/></svg>
  </template>
