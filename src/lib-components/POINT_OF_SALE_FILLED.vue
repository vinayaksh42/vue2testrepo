
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
    name: 'EOS_POINT_OF_SALE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,2H7C5.9,2,5,2.9,5,4v2c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4C19,2.9,18.1,2,17,2z M17,6H7V4h10V6z M20,22H4 c-1.1,0-2-0.9-2-2v-1h20v1C22,21.1,21.1,22,20,22z M18.53,10.19C18.21,9.47,17.49,9,16.7,9H7.3c-0.79,0-1.51,0.47-1.83,1.19L2,18 h20L18.53,10.19z M9.5,16h-1C8.22,16,8,15.78,8,15.5C8,15.22,8.22,15,8.5,15h1c0.28,0,0.5,0.22,0.5,0.5C10,15.78,9.78,16,9.5,16z M9.5,14h-1C8.22,14,8,13.78,8,13.5C8,13.22,8.22,13,8.5,13h1c0.28,0,0.5,0.22,0.5,0.5C10,13.78,9.78,14,9.5,14z M9.5,12h-1 C8.22,12,8,11.78,8,11.5C8,11.22,8.22,11,8.5,11h1c0.28,0,0.5,0.22,0.5,0.5C10,11.78,9.78,12,9.5,12z M12.5,16h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,15.78,12.78,16,12.5,16z M12.5,14h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,13.78,12.78,14,12.5,14z M12.5,12h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,11.78,12.78,12,12.5,12z M15.5,16h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,15.78,15.78,16,15.5,16z M15.5,14h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,13.78,15.78,14,15.5,14z M15.5,12h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,11.78,15.78,12,15.5,12z"/></svg>
  </template>
