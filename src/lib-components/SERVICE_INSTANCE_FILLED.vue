
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
    name: 'EOS_SERVICE_INSTANCE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="3 21 4.01 21 5.03 21 5.03 18 5.03 15 4.01 15 3 15 3 18 3 21"/><path d="M12.45,22l-2.93-.64-2.93-.64A.76.76,0,0,1,6,20v-4a.71.71,0,0,1,.17-.47.75.75,0,0,1,.43-.27l4.78-.59L16.17,14l.15.55.15.55a1,1,0,0,1-.56.9l-2,.5-2,.5,1.62.65,1.62.65,2.28-.64L19.65,17a.73.73,0,0,1,.58.07.75.75,0,0,1,.36.47l.19.76.2.77a.74.74,0,0,1-.54.9l-3.63,1-3.63,1a1.49,1.49,0,0,1-.36.05A1.55,1.55,0,0,1,12.45,22Z"/><polygon points="18.02 8.5 14.52 6.25 11.02 4 11.02 8.5 11.02 13 14.52 10.75 18.02 8.5"/></svg> 
  </template>
