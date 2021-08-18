
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
    name: 'EOS_PANORAMA_PHOTOSPHERE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.49 8.51c-.47-.23-.93-.44-1.4-.64C19.52 4.41 16.05 2 12 2S4.47 4.41 2.9 7.88c-.47.2-.93.41-1.4.63-.31.15-.5.48-.5.83v5.32c0 .35.19.68.51.83.47.23.93.44 1.39.64 3.55 7.83 14.65 7.82 18.2 0 .47-.2.93-.41 1.39-.63.31-.17.51-.49.51-.84V9.34c0-.35-.19-.68-.51-.83zM12 3.8c2.6 0 4.91 1.23 6.41 3.12-4.1-1.19-8.48-1.26-12.83.01C7.08 5.03 9.4 3.8 12 3.8zM5.6 17.08c4.19 1.22 8.57 1.23 12.82-.01-1.54 1.97-3.9 3.13-6.41 3.13-2.5 0-4.87-1.15-6.41-3.12z"/></svg>
  </template>
