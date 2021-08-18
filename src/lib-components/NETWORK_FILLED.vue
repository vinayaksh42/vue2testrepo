
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
    name: 'EOS_NETWORK_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00001 24.00001"><path d="M12,4a8,8,0,1,0,8,8A8.0029,8.0029,0,0,0,12,4ZM6,12a5.99707,5.99707,0,0,1,.10486-1.09515L9.6,14.4V15.2a1.60475,1.60475,0,0,0,1.6,1.6v1.14032A6.00426,6.00426,0,0,1,6,12Zm9.2,3.2h-.8V12.8a.80238.80238,0,0,0-.8-.8H8.8V10.4h1.6a.80233.80233,0,0,0,.8-.8V8h1.6a1.60052,1.60052,0,0,0,1.5899-1.50048,5.9854,5.9854,0,0,1,2.13678,9.42663A1.57091,1.57091,0,0,0,15.2,15.2ZM13,1a1,1,0,1,1-1-1A1,1,0,0,1,13,1Zm5,1a1,1,0,1,1-1-1A1,1,0,0,1,18,2Zm4,4a1,1,0,1,1-1-1A1,1,0,0,1,22,6Zm2,6a1,1,0,1,1-1-1A1,1,0,0,1,24,12Zm-2,6a1,1,0,1,1-1-1A1,1,0,0,1,22,18Zm-4,4a1,1,0,1,1-1-1A1,1,0,0,1,18,22Zm-5,1a1,1,0,1,1-1-1A1,1,0,0,1,13,23ZM8,22a1,1,0,1,1-1-1A1,1,0,0,1,8,22ZM4,18a1,1,0,1,1-1-1A1,1,0,0,1,4,18ZM2,12a1,1,0,1,1-1-1A1,1,0,0,1,2,12ZM4,6A1,1,0,1,1,3,5,1,1,0,0,1,4,6ZM8,2A1,1,0,1,1,7,1,1,1,0,0,1,8,2Z"/></svg> 
  </template>
