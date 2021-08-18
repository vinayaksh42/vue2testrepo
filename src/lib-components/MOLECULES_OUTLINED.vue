
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
    name: 'EOS_MOLECULES_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9a2.95229,2.95229,0,0,0-.36816.03711L19.15411,6.0816A2.994,2.994,0,1,0,14.18372,3H9.81628A2.99338,2.99338,0,1,0,4.84283,6.07794L3.36353,9.03668A2.96284,2.96284,0,0,0,3,9a3,3,0,0,0,0,6,2.96284,2.96284,0,0,0,.36353-.03668l1.4793,2.95874A2.99386,2.99386,0,1,0,9.81628,21h4.36744a2.99329,2.99329,0,1,0,4.97644-3.07428l1.481-2.96191A2.96254,2.96254,0,0,0,21,15a3,3,0,0,0,0-6ZM3,13a1,1,0,1,1,1-1A1,1,0,0,1,3,13ZM17,3a1,1,0,1,1-1,1A1,1,0,0,1,17,3ZM7,3A1,1,0,1,1,6,4,1,1,0,0,1,7,3ZM7,21a1,1,0,1,1,1-1A1,1,0,0,1,7,21Zm10,0a1,1,0,1,1,1-1A1,1,0,0,1,17,21Zm.36816-3.96289A2.95229,2.95229,0,0,0,17,17a2.99121,2.99121,0,0,0-2.81628,2H9.81628A2.99121,2.99121,0,0,0,7,17a2.96284,2.96284,0,0,0-.36353.03668l-1.4793-2.95874a2.98292,2.98292,0,0,0,0-4.15588l1.4793-2.95874A2.96284,2.96284,0,0,0,7,7,2.99121,2.99121,0,0,0,9.81628,5h4.36744a2.83742,2.83742,0,0,0,3.17517,1.96381l1.481,2.96191a2.98285,2.98285,0,0,0,.00605,4.15588ZM21,13a1,1,0,1,1,1-1A1,1,0,0,1,21,13Z"/></svg>
  </template>
