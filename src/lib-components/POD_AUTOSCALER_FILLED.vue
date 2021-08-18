
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
    name: 'EOS_POD_AUTOSCALER_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="5 11 3.5 11 3.5 8.5 0 12 3.5 15.5 3.5 13 5 13 5 11"/><polygon points="24 12 20.5 8.5 20.5 11 19 11 19 13 20.5 13 20.5 15.5 24 12"/><path d="M6,18.75213V18H18v1.00284A1.998,1.998,0,0,1,15.99958,21H8.00042A1.99626,1.99626,0,0,1,6,19.00284Z"/><path d="M15,3.99178a.98562.98562,0,0,0-.29226-.70128A.99774.99774,0,0,0,14.00213,3H9.99787a.99819.99819,0,0,0-.91946.60575A.98347.98347,0,0,0,9,3.99178V5h6V3.99178Z"/><path d="M18.74835,14.25,17.49664,11.5,16.245,8.75,14.99335,6H8.99994l-1.25,2.75L6.5,11.5,5.25,14.25,4,17H20Zm-4.89551-2.46149A2.00663,2.00663,0,1,1,14.01,11.01,2.0029,2.0029,0,0,1,13.85284,11.78851Z"/></svg>
  </template>
