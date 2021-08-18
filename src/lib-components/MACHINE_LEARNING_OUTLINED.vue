
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
    name: 'EOS_MACHINE_LEARNING_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,10a16.84028,16.84028,0,0,0-9,3.24367A16.84028,16.84028,0,0,0,3,10v2.96005a2.00363,2.00363,0,0,0-2,2.00727V15.971c0,1.10856,2,2.20751,2,2.20751v2.00726a14.868,14.868,0,0,1,7.41687,2.55049A15.08968,15.08968,0,0,1,12,24a15.08968,15.08968,0,0,1,1.58313-1.26379A14.868,14.868,0,0,1,21,20.18572V17.97821A2.00366,2.00366,0,0,0,23,15.971V14.96732a2.00363,2.00363,0,0,0-2-2.00727ZM12,21.42213a16.84123,16.84123,0,0,0-7-2.996v-6.151a14.80025,14.80025,0,0,1,5.41687,2.28267A15.08968,15.08968,0,0,1,12,15.82154a15.08968,15.08968,0,0,1,1.58313-1.26379A14.80025,14.80025,0,0,1,19,12.27508v6.151A16.84123,16.84123,0,0,0,12,21.42213Z"/><rect x="11" y="8" width="2" height="1"/><rect x="11" y="4" width="2" height="1"/><rect x="11" y="10" width="2" height="1"/><path d="M9,5a1,1,0,0,0,1-1,.983.983,0,0,0-.99-.99A.99506.99506,0,1,0,9,5Z"/><circle cx="15" cy="4" r="1"/><path d="M16,8H8A3.00328,3.00328,0,0,1,5,5V3A3.00328,3.00328,0,0,1,8,0h8a3.00328,3.00328,0,0,1,3,3V5A3.00328,3.00328,0,0,1,16,8ZM8,2A1.0013,1.0013,0,0,0,7,3V5A1.0013,1.0013,0,0,0,8,6h8a1.001,1.001,0,0,0,1-1V3a1.001,1.001,0,0,0-1-1Z"/></svg>
  </template>
