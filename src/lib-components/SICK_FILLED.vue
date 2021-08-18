
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
    name: 'EOS_SICK_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C23,8.1,22.1,9,21,9z M17.5,7c0-0.73,0.41-1.71,0.92-2.66 C16.68,2.88,14.44,2,11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12c0-0.55-0.06-1.09-0.14-1.62 C21.58,10.45,21.3,10.5,21,10.5C19.07,10.5,17.5,8.93,17.5,7z M15.62,7.38l1.06,1.06L15.62,9.5l1.06,1.06l-1.06,1.06L13.5,9.5 L15.62,7.38z M7.32,8.44l1.06-1.06L10.5,9.5l-2.12,2.12l-1.06-1.06L8.38,9.5L7.32,8.44z M15.44,17c-0.69-1.19-1.97-2-3.44-2 s-2.75,0.81-3.44,2H6.88c0.3-0.76,0.76-1.43,1.34-1.99L5.24,13.3c-0.45,0.26-1.01,0.28-1.49,0c-0.72-0.41-0.96-1.33-0.55-2.05 c0.41-0.72,1.33-0.96,2.05-0.55c0.48,0.28,0.74,0.78,0.74,1.29l3.58,2.07c0.73-0.36,1.55-0.56,2.43-0.56c2.33,0,4.32,1.45,5.12,3.5 H15.44z"/></svg>
  </template>
