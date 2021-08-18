
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
    name: 'EOS_CLUSTER_MANAGEMENT_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,1V11H23V1ZM13,7H4V5h9Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,16,7Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,19,7Z"/><path d="M22.69,18.37l1.14-1-1-1.73-1.45.49a3.64664,3.64664,0,0,0-1.08-.63L20,14H18l-.3,1.49a3.64645,3.64645,0,0,0-1.08.63l-1.45-.49-1,1.73,1.14,1a3.33714,3.33714,0,0,0,0,1.26l-1.14,1,1,1.73,1.45-.49a3.64535,3.64535,0,0,0,1.08.63L18,24h2l.3-1.49a3.64645,3.64645,0,0,0,1.08-.63l1.45.49,1-1.73-1.14-1A3.38931,3.38931,0,0,0,22.69,18.37ZM19,21a2,2,0,1,1,2-2A2.00591,2.00591,0,0,1,19,21Z"/><path d="M12,19H4V17h8.2937A7.00761,7.00761,0,0,1,15.408,13H1V23H13.26A6.96194,6.96194,0,0,1,12,19Z"/></svg>
  </template>
