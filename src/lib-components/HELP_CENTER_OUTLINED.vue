
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
    name: 'EOS_HELP_CENTER_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.25,16.74c0,0.69-0.53,1.26-1.25,1.26c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 C12.71,15.49,13.25,16.04,13.25,16.74z M11.99,6c-1.77,0-2.98,1.15-3.43,2.49l1.64,0.69c0.22-0.67,0.74-1.48,1.8-1.48 c1.62,0,1.94,1.52,1.37,2.33c-0.54,0.77-1.47,1.29-1.96,2.16c-0.39,0.69-0.31,1.49-0.31,1.98h1.82c0-0.93,0.07-1.12,0.22-1.41 c0.39-0.72,1.11-1.06,1.87-2.17c0.68-1,0.42-2.36-0.02-3.08C14.48,6.67,13.47,6,11.99,6z M19,5H5v14h14V5 M19,3c1.1,0,2,0.9,2,2v14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19L19,3z"/></svg>
  </template>
