
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
    name: 'EOS_CRITICAL_BUG_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="15" width="2" height="2"/><rect x="11" y="9" width="2" height="5"/><path d="M20,8H17.19a5.9847,5.9847,0,0,0-1.82-1.96L17,4.41,15.59,3,13.42,5.17A6.06615,6.06615,0,0,0,12,5a5.91855,5.91855,0,0,0-1.41.17L8.41,3,7,4.41,8.62,6.04A6.06213,6.06213,0,0,0,6.81,8H4v2H6.09A6.63061,6.63061,0,0,0,6,11v1H4v2H6v1a6.632,6.632,0,0,0,.09,1H4v2H6.81a5.98935,5.98935,0,0,0,10.38,0H20V16H17.91A6.632,6.632,0,0,0,18,15V14h2V12H18V11a6.63061,6.63061,0,0,0-.09-1H20Zm-4,4v3a4.26044,4.26044,0,0,1-.07.7l-.1.65-.37.65a3.99293,3.99293,0,0,1-6.92,0l-.37-.64-.1-.65A4.2713,4.2713,0,0,1,8,15V11a4.05253,4.05253,0,0,1,.07-.7l.1-.65L8.54,9A4.09991,4.09991,0,0,1,9.75,7.69l.57-.39.74-.18A3.78573,3.78573,0,0,1,12,7a3.86454,3.86454,0,0,1,.95.12l.68.16.61.42a3.89422,3.89422,0,0,1,1.21,1.31l.38.65.1.65A4.03771,4.03771,0,0,1,16,11Z"/></svg>
  </template>
