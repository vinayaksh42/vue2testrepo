
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
    name: 'EOS_FACE_RETOUCHING_NATURAL_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.89,10.75C19.96,11.16,20,11.57,20,12c0,4.41-3.59,8-8,8s-8-3.59-8-8c0-0.05,0.01-0.1,0-0.14 c2.6-0.98,4.69-2.99,5.74-5.55c3.38,4.14,7.97,3.73,8.99,3.61l-0.89-1.93c-0.13,0.01-4.62,0.38-7.18-3.86 c1.01-0.16,1.71-0.15,2.59-0.01c2.52-1.15,1.93-0.89,2.76-1.26C14.78,2.3,13.43,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10 s10-4.48,10-10c0-1.43-0.3-2.78-0.84-4.01L19.89,10.75z M8.08,5.03C7.45,6.92,6.13,8.5,4.42,9.47C5.05,7.58,6.37,6,8.08,5.03z"/><circle cx="15" cy="13" r="1.25"/><circle cx="9" cy="13" r="1.25"/><polygon points="23,4.5 20.6,3.4 19.5,1 18.4,3.4 16,4.5 18.4,5.6 19.5,8 20.6,5.6"/></svg>
  </template>
