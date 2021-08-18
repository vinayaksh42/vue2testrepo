
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
    name: 'EOS_CONTAINER_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,5a1.95767,1.95767,0,0,0,.79565,1.55981L5.50128,9.986H3.99689A1.99685,1.99685,0,0,0,2,11.98291v8.02295a1.9969,1.9969,0,0,0,1.99689,1.99689H19.99628A2.00372,2.00372,0,0,0,22,19.999V11.98291A1.99685,1.99685,0,0,0,20.00311,9.986H18.5119L13.21008,6.555A1.95745,1.95745,0,0,0,14,5a2.03035,2.03035,0,0,0-1-1.72119V2H12V4a1,1,0,1,1-1,1m.99481,1.97449L12,6.975l.0166-.00165L16.67206,9.986H7.34113ZM7,18a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z"/></svg>
  </template>
