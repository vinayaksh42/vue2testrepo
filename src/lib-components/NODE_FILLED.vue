
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
    name: 'EOS_NODE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <circle cx="12" cy="3" r="1"/>   <circle cx="20" cy="8" r="1"/>   <circle cx="20" cy="16" r="1"/>   <circle cx="4" cy="8" r="1"/>   <circle cx="4" cy="16" r="1"/>   <path d="M20,14V10a1.99219,1.99219,0,0,1-1.48114-3.33313L13.73553,3.97626a1.983,1.983,0,0,1-3.47106,0L5.48114,6.66687A1.99219,1.99219,0,0,1,4,10v4a1.99214,1.99214,0,0,1,1.48108,3.33313l4.78339,2.69061a1.99146,1.99146,0,0,1,1.23553-.953V13.92926a2,2,0,1,1,1,0v5.14148a1.99146,1.99146,0,0,1,1.23553.953l4.78339-2.69061A1.99214,1.99214,0,0,1,20,14Z"/>   <circle cx="12" cy="21" r="1"/>   <circle cx="12" cy="12" r="1"/> </svg> 
  </template>
