
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
    name: 'EOS_MICROWAVE_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,6h10v12H4V6z M20,18h-4V6h4V18z M19,9h-2V7h2V9z M18,13L18,13c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C19,12.55,18.55,13,18,13z M18,17 L18,17c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C19,16.55,18.55,17,18,17z M10.25,16 c-0.79,0-1.37-0.38-1.79-0.66C8.13,15.12,7.94,15,7.75,15c-0.37,0-0.8,0.41-0.95,0.61l-1.42-1.42C5.73,13.79,6.59,13,7.75,13 c0.8,0,1.39,0.39,1.81,0.67C9.87,13.88,10.07,14,10.25,14c0.37,0,0.8-0.41,0.95-0.61l1.42,1.42C12.26,15.21,11.41,16,10.25,16z M10.25,11c-0.79,0-1.37-0.38-1.79-0.66C8.13,10.12,7.94,10,7.75,10c-0.37,0-0.8,0.41-0.95,0.61L5.37,9.19C5.73,8.79,6.59,8,7.75,8 c0.8,0,1.39,0.39,1.81,0.67C9.87,8.88,10.07,9,10.25,9c0.37,0,0.8-0.41,0.95-0.61l1.42,1.42C12.26,10.21,11.41,11,10.25,11z"/></svg>
  </template>
