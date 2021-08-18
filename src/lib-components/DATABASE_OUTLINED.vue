
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
    name: 'EOS_DATABASE_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,1.5C7.39453,1.5,2.5,2.72656,2.5,5V19c0,2.27344,4.89453,3.5,9.5,3.5s9.5-1.22656,9.5-3.5V5C21.5,2.72656,16.60547,1.5,12,1.5Zm0,16C6.7334,17.5,3.5,16.044,3.5,15V13.63281C5.166,14.85449,8.65918,15.5,12,15.5s6.834-.64551,8.5-1.86719V15C20.5,16.044,17.2666,17.5,12,17.5Zm0-4c-5.2666,0-8.5-1.456-8.5-2.5V9.63232C5.166,10.85449,8.65918,11.5,12,11.5s6.834-.64551,8.5-1.86768V11C20.5,12.044,17.2666,13.5,12,13.5ZM20.5,19c0,1.04395-3.2334,2.5-8.5,2.5S3.5,20.044,3.5,19V17.63281C5.166,18.85449,8.65918,19.5,12,19.5s6.834-.64551,8.5-1.86719ZM12,9.5C6.7334,9.5,3.5,8.044,3.5,7V5c0-1.044,3.2334-2.5,8.5-2.5s8.5,1.456,8.5,2.5V7C20.5,8.044,17.2666,9.5,12,9.5Z"/></svg>
  </template>
