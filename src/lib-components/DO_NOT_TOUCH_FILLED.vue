
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
    name: 'EOS_DO_NOT_TOUCH_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,10.2l-2.5-2.5V2.2c0-0.7,0.6-1.2,1.2-1.2S13,1.6,13,2.2V10.2z M20,12.8V11V5.2C20,4.6,19.4,4,18.8,4s-1.2,0.6-1.2,1.2	V11h-1V3.2c0-0.7-0.6-1.2-1.2-1.2S14,2.6,14,3.2v7.9l6,6V12.8z M9.5,4.2C9.5,3.6,8.9,3,8.2,3C7.6,3,7.1,3.5,7,4.2l2.5,2.5V4.2z M21.2,21.2L2.8,2.8L1.4,4.2L7,9.9l0,0v4.3c-1.1-0.6-2.6-1.5-2.6-1.5c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.5,0.1-0.7,0.3	c0,0-1.2,1.1-1.2,1.1l6.8,7.2C9.4,21.7,10.2,22,11,22h6c0.6,0,1.2-0.2,1.6-0.5l0,0l1.1,1.1L21.2,21.2z"/></svg>
  </template>
