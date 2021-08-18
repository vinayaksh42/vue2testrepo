
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
    name: 'EOS_VOLUME_BINDING_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="14" y="18" width="4" height="2"/><path d="M19,15H17v2h2a2,2,0,0,1,0,4H17v2h2a4,4,0,0,0,0-8Z"/><path d="M13,17h2V15H13a4,4,0,0,0,0,8h2V21H13a2,2,0,0,1,0-4Z"/><path d="M6,4A1,1,0,1,1,5,3,1,1,0,0,1,6,4Z"/><path d="M16,4a1,1,0,1,1-1-1A1,1,0,0,1,16,4Z"/><path d="M6,20a1,1,0,1,1-1-1A1,1,0,0,1,6,20Z"/><path d="M9.69061,24H3a2,2,0,0,1-2-2V2A2,2,0,0,1,3,0H17a2,2,0,0,1,2,2V13H17V2H3V22H7.81183A6.03966,6.03966,0,0,0,9.69061,24Z"/><path d="M14.57788,13A4.99759,4.99759,0,1,0,6,14H9v.54059A5.9687,5.9687,0,0,1,13,13ZM10,13a2,2,0,1,1,2-2A2,2,0,0,1,10,13Z"/></svg>
  </template>
