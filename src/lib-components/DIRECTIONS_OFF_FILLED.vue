
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
    name: 'EOS_DIRECTIONS_OFF_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.41,6.58L12,4h0l8,8l-2.58,2.59L18.83,16l2.58-2.59c0.78-0.78,0.78-2.05,0-2.83l-8-8c-0.78-0.78-2.05-0.78-2.83,0 L8,5.17L9.41,6.58z"/><path d="M2.81,2.81L1.39,4.22L5.17,8l-2.58,2.59c-0.78,0.78-0.78,2.05,0,2.83l8,8c0.78,0.78,2.05,0.78,2.83,0L16,18.83l3.78,3.78 l1.41-1.41L2.81,2.81z M12,20l-8-8l2.58-2.59L8.17,11H7v2h3.17l1.5,1.5l-1.08,1.09L12,17l1.09-1.09l1.5,1.5L12,20z"/><rect height="7.07" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0134 12.8107)" width="1.54" x="13.19" y="6.51"/></svg>
  </template>
