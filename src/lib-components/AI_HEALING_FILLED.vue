
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
    name: 'EOS_AI_HEALING_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="4" width="2" height="1"/><circle cx="9" cy="4" r="1"/><circle cx="15" cy="4" r="1"/><path d="M18,10H13V8l3-.01A3.00027,3.00027,0,0,0,19,5V3a3.00879,3.00879,0,0,0-3-3H8A3.00879,3.00879,0,0,0,5,3V5A3.00883,3.00883,0,0,0,8,8h3v2H6a3.00879,3.00879,0,0,0-3,3v8a3.00883,3.00883,0,0,0,3,3H18a3.00883,3.00883,0,0,0,3-3V13A3.00879,3.00879,0,0,0,18,10ZM8,6A1.003,1.003,0,0,1,7,5V3A1.003,1.003,0,0,1,8,2h7.99A1.01158,1.01158,0,0,1,17,3V5a1.01158,1.01158,0,0,1-1.01,1Zm4.435,14.07166L12,20.5l-.435-.43164C10.02,18.54138,9,17.5343,9,16.29834A1.71211,1.71211,0,0,1,10.65,14.5a1.74022,1.74022,0,0,1,1.35.68335A1.74022,1.74022,0,0,1,13.35,14.5,1.71211,1.71211,0,0,1,15,16.29834C15,17.5343,13.98,18.54138,12.435,20.07166Z"/></svg>
  </template>
