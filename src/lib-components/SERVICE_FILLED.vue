
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
    name: 'EOS_SERVICE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="3 21 4 21 5 21 5 18 5 15 4 15 3 15 3 18 3 21"/><path d="M12.46,22l-2.93-.64L6.6,20.67a.73.73,0,0,1-.43-.26A.71.71,0,0,1,6,19.94v-4a.77.77,0,0,1,.17-.47.8.8,0,0,1,.43-.26l4.78-.59,4.79-.6.15.56.15.55a.93.93,0,0,1-.15.52.9.9,0,0,1-.4.37l-2,.5-2,.5,1.62.66,1.63.65,2.27-.64L19.65,17a.78.78,0,0,1,.58.08.73.73,0,0,1,.36.46l.19.77.2.76a.77.77,0,0,1-.08.56.78.78,0,0,1-.46.35l-3.63,1-3.63,1a1.42,1.42,0,0,1-.36,0A1.1,1.1,0,0,1,12.46,22Z"/><polygon points="9 4 7 6 5 8 7 10 9 12 9.7 11.3 10.4 10.6 9.1 9.3 7.8 8 9.1 6.7 10.4 5.4 9.7 4.7 9 4"/><polygon points="15 4 14.3 4.7 13.6 5.4 14.9 6.7 16.2 8 14.9 9.3 13.6 10.6 14.3 11.3 15 12 17 10 19 8 17 6 15 4"/></svg> 
  </template>
