
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
    name: 'EOS_VIRTUAL_REALITY_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.82574,10a3.01219,3.01219,0,0,0-1.95465-1.87109A3.00493,3.00493,0,0,0,16,6H8A3.00493,3.00493,0,0,0,5.12891,8.12891,3.01125,3.01125,0,0,0,3.17419,10H2v4H3.17419a3.01125,3.01125,0,0,0,1.95472,1.87109A3.00553,3.00553,0,0,0,8,18H9.60547l1.89062-3.27539a.58178.58178,0,0,1,1.00782,0L14.39551,18H16a3.00553,3.00553,0,0,0,2.87109-2.12891A3.01219,3.01219,0,0,0,20.82574,14H22V10ZM19,13a1.00067,1.00067,0,0,1-1,1H17v1a1.00067,1.00067,0,0,1-1,1h-.4502l-1.31347-2.27539a2.58242,2.58242,0,0,0-4.47266,0L8.4502,16H8a1.001,1.001,0,0,1-1-1V14H6a1.001,1.001,0,0,1-1-1V11a1.0013,1.0013,0,0,1,1-1H7V9A1.0013,1.0013,0,0,1,8,8h8a1.001,1.001,0,0,1,1,1v1h1a1.001,1.001,0,0,1,1,1Z"/><path d="M15,11H9V10h6Z"/></svg>
  </template>
