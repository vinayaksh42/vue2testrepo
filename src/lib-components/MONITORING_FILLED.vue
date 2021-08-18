
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
    name: 'EOS_MONITORING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="18" width="2" height="3"/><rect x="11" y="18" width="2" height="8" transform="translate(34 10) rotate(90)"/><path d="M20,18H4a3.00328,3.00328,0,0,1-3-3V4A3.00328,3.00328,0,0,1,4,1H20a3.00328,3.00328,0,0,1,3,3V15A3.00328,3.00328,0,0,1,20,18ZM4,3A1.00067,1.00067,0,0,0,3,4V15a1.00067,1.00067,0,0,0,1,1H20a1.00067,1.00067,0,0,0,1-1V4a1.00067,1.00067,0,0,0-1-1Z"/><polygon points="16 15 14.086 8.62 13 13 11.691 10 11.36 10 10 14 8.843 9.933 8.309 11 5 11 5 10 7.691 10 9 7 10.068 10.713 10.64 9 12.309 9 12.796 9.973 14 4 16 12 16.64 10 19 10 19 11 17.36 11 16 15"/></svg>
  </template>
