
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
    name: 'EOS_PROJECT_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><rect x="6" y="17" width="12" height="2"/><polygon points="10 11.83 12.792 14.624 16.724 10.689 18 12 18 8 14 8 15.31 9.275 12.791 11.794 10 9 6 13 7.414 14.414 10 11.83"/><path d="M19,3H15.70215l-.00049-.00067a4.49706,4.49706,0,0,0-.319-.42444L15.372,2.56323a4.42613,4.42613,0,0,0-2.89-1.51776,2.577,2.577,0,0,0-.96392,0,4.42613,4.42613,0,0,0-2.89,1.51776l-.01074.01166a4.49706,4.49706,0,0,0-.319.42444L8.29785,3H5A3.00328,3.00328,0,0,0,2,6V20a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V6A3.00328,3.00328,0,0,0,19,3Zm1,17a1.00067,1.00067,0,0,1-1,1H5a1.001,1.001,0,0,1-1-1V6A1.0013,1.0013,0,0,1,5,5H9.55042a2.50011,2.50011,0,0,1,4.89916,0H19a1.001,1.001,0,0,1,1,1Z"/></svg>
  </template>
