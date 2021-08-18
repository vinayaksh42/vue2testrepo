
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
    name: 'EOS_MASTER_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,20H20v2H4V20ZM21,5a1,1,0,0,0-1,1,.89864.89864,0,0,0,.064.3317,1.10437,1.10437,0,0,0,.16656.283L18.11185,8.30734,15.9931,10,14.24042,6.92749,12.48773,3.855a1.045,1.045,0,0,0,.36888-.35287A.94573.94573,0,0,0,13,3a1,1,0,1,0-2,0,.94552.94552,0,0,0,.14329.50187,1.0457,1.0457,0,0,0,.36855.35287L9.757,6.92737,8.00214,10,5.88565,8.30753,3.76917,6.61505a1.10382,1.10382,0,0,0,.16675-.28313A.8989.8989,0,0,0,4,6,1,1,0,1,0,3,7a.14725.14725,0,0,0,.04121-.00735A.21241.21241,0,0,1,3.082,6.98346l.459,5.50827L4,18H20l.459-5.50827.459-5.50827a.21241.21241,0,0,1,.04076.00919A.14725.14725,0,0,0,21,7a1,1,0,1,0,0-2Z"/></svg> 
  </template>
