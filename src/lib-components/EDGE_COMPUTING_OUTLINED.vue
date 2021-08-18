
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
    name: 'EOS_EDGE_COMPUTING_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.09,13a1.5,1.5,0,1,0,0-1h-2.8A5.44838,5.44838,0,0,0,14,10.37V5.91a1.5,1.5,0,1,0-1,0V10.09A5.55133,5.55133,0,0,0,12,10a5.61065,5.61065,0,0,0-2.28.48L8,8.76V6H9V2H6V6H7V9.17l1.82,1.82a5.56248,5.56248,0,0,0-1.81,2.04,4.41775,4.41775,0,0,0-1.03.24L3.85,11.14a1.51857,1.51857,0,1,0-.71.71l1.89,1.89A4.499,4.499,0,0,0,7.5,22h9.75a3.73918,3.73918,0,0,0,.26-7.47A5.358,5.358,0,0,0,16.97,13Zm-1.72,3.53A1.73624,1.73624,0,0,1,19,18.25,1.7584,1.7584,0,0,1,17.25,20H7.5a2.49777,2.49777,0,0,1-.28-4.98l1.07-.11.5-.96a3.61755,3.61755,0,0,1,6.76.97l.3,1.5Z"/></svg>
  </template>
