
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
    name: 'EOS_SCREEN_SEARCH_DESKTOP_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,18 C21.1,18 21.99,17.1 21.99,16 L22,6 C22,4.89 21.1,4 20,4 L4,4 C2.89,4 2,4.89 2,6 L2,16 C2,17.1 2.89,18 4,18 L0,18 L0,20 L24,20 L24,18 L20,18 Z M4,16 L4,6 L20,6 L20,16 L20,16.01 L4,16 Z M9.0967,9.9531 C9.0967,8.9261 9.9327,8.0891 10.9607,8.0891 C11.9877,8.0891 12.8247,8.9261 12.8247,9.9531 C12.8247,10.9801 11.9877,11.8171 10.9607,11.8171 C9.9327,11.8171 9.0967,10.9801 9.0967,9.9531 Z M16.1287,14.1891 L13.6467,11.7071 C13.9777,11.2021 14.1737,10.6001 14.1737,9.9531 C14.1737,8.1811 12.7327,6.7401 10.9607,6.7401 C9.1887,6.7401 7.7467,8.1811 7.7467,9.9531 C7.7467,11.7251 9.1887,13.1671 10.9607,13.1671 C11.5967,13.1671 12.1857,12.9751 12.6847,12.6561 L15.1737,15.1441 L16.1287,14.1891 Z"/></svg>
  </template>
