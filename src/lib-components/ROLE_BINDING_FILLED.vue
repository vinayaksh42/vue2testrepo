
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
    name: 'EOS_ROLE_BINDING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,21H13a2,2,0,0,1,0-4h2V15H13a4,4,0,0,0,0,8h2Z"/><path d="M23,19a4,4,0,0,1-4,4H17V21h2a2,2,0,0,0,0-4H17V15h2A4,4,0,0,1,23,19Z"/><rect x="14" y="18" width="4" height="2"/><path d="M7,19a5.98867,5.98867,0,0,1,.09033-1H3V16.6c0-2,4-3.1,6-3.1a8.54825,8.54825,0,0,1,1.35083.12463A5.95435,5.95435,0,0,1,13,13h5V4a2.00587,2.00587,0,0,0-2-2H11.82A2.98811,2.98811,0,0,0,6.18,2H2A2.00587,2.00587,0,0,0,0,4V18a2.00591,2.00591,0,0,0,2,2H7.09033A5.98867,5.98867,0,0,1,7,19ZM9,2A1,1,0,1,1,8,3,1.003,1.003,0,0,1,9,2ZM9,6A3,3,0,1,1,6,9,2.996,2.996,0,0,1,9,6Z"/></svg>
  </template>
