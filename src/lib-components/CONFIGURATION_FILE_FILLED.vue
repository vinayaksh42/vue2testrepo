
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
    name: 'EOS_CONFIGURATION_FILE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.50732,14.14178a1.35,1.35,0,1,0,1.35,1.35A1.34823,1.34823,0,0,0,10.50732,14.14178Z"/>   <path d="M14,2.01H6a1.99728,1.99728,0,0,0-1.99,2L4,20.01a1.99735,1.99735,0,0,0,1.99,2H18a2.00591,2.00591,0,0,0,2-2v-12Zm.86328,14.95783-.9,1.55694a.23583.23583,0,0,1-.279.099l-1.12494-.45a3.32752,3.32752,0,0,1-.756.441l-.171,1.188a.23109.23109,0,0,1-.225.189h-1.8a.224.224,0,0,1-.225-.189l-.171-1.188a3.07863,3.07863,0,0,1-.765-.441l-1.116.45a.22824.22824,0,0,1-.279-.099l-.9-1.55694a.23374.23374,0,0,1,.054-.288l.954-.747a3.61782,3.61782,0,0,1,0-.882l-.954-.74694a.22282.22282,0,0,1-.054-.288l.9-1.557a.23572.23572,0,0,1,.279-.099l1.116.45a3.59269,3.59269,0,0,1,.765-.441l.171-1.18805a.23111.23111,0,0,1,.225-.189h1.8a.21488.21488,0,0,1,.216.189l.171,1.18805a3.07838,3.07838,0,0,1,.765.441l1.116-.45a.22828.22828,0,0,1,.279.099l.9,1.557a.23383.23383,0,0,1-.054.288l-.954.74694a2.36811,2.36811,0,0,1,.03595.441,3.49515,3.49515,0,0,1-.03595.441l.963.747A.23367.23367,0,0,1,14.86328,16.96783ZM13,9.01V3.51l5.5,5.5Z"/> </svg> 
  </template>
