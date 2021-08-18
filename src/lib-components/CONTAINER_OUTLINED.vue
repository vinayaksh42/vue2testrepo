
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
    name: 'EOS_CONTAINER_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,10H18L13.21008,6.5A1.85387,1.85387,0,0,0,14,5a2.03073,2.03073,0,0,0-1-1.72137V2H12V4a1,1,0,1,1-1,1H10a1.84576,1.84576,0,0,0,.79565,1.5L6,10H4a2.00228,2.00228,0,0,0-2,2v8a2.00231,2.00231,0,0,0,2,2H20a1.99746,1.99746,0,0,0,2-2V12A2.00228,2.00228,0,0,0,20,10ZM12,7h0c.00568,0,4,3,4,3H8Zm8,13H4V12H20Z"/><path d="M14,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,14,19Z"/><path d="M18,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,18,19Z"/><path d="M6,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,6,19Z"/><path d="M10,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,10,19Z"/></svg>
  </template>
