
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
    name: 'EOS_NAMESPACE_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23,11v2c-.85217,0-1,.35065-1,1.31433v4.49719C22,21.32635,20.54016,21.968,18,22V20c1.40363-.03186,2,.15375,2-1.35931V14.3432a3.08829,3.08829,0,0,1,.29431-1.56036A1.71331,1.71331,0,0,1,21.2915,12a1.71317,1.71317,0,0,1-.99719-.7829A3.08814,3.08814,0,0,1,20,9.65674V5.35925C20,3.84625,19.40363,4.03192,18,4V2c2.54016.03192,4,.67365,4,3.18848V9.68567C22,10.64935,22.14783,11,23,11ZM1,11v2c.85217,0,1,.35065,1,1.31433v4.49719C2,21.32635,3.45984,21.968,6,22V20c-1.40363-.03186-2,.15375-2-1.35931V14.3432a3.08829,3.08829,0,0,0-.29431-1.56036A1.71331,1.71331,0,0,0,2.7085,12a1.71317,1.71317,0,0,0,.99719-.7829A3.08814,3.08814,0,0,0,4,9.65674V5.35925C4,3.84625,4.59637,4.03192,6,4V2c-2.54016.03192-4,.67365-4,3.18848V9.68567C2,10.64935,1.85217,11,1,11ZM18,9H6v6H18ZM8,11h8v2H8Z"/></svg>
  </template>
