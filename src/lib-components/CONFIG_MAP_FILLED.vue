
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
    name: 'EOS_CONFIG_MAP_FILLED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.822,13.34058l-1.07-.83a3.8825,3.8825,0,0,0,.04-.49,2.62581,2.62581,0,0,0-.04-.49l1.06-.83a.25966.25966,0,0,0,.06-.32l-1-1.73a.25362.25362,0,0,0-.31-.11l-1.24.5a3.41989,3.41989,0,0,0-.85-.49005L7.282,7.23059a.23883.23883,0,0,0-.24005-.21h-2a.25675.25675,0,0,0-.25.21l-.19,1.31995a3.99513,3.99513,0,0,0-.85.49005l-1.24-.5a.26191.26191,0,0,0-.31.11l-1,1.73a.24756.24756,0,0,0,.06.32l1.06.83a4.01252,4.01252,0,0,0,0,.98l-1.06.83a.25962.25962,0,0,0-.06.32l1,1.73a.2536.2536,0,0,0,.31.11l1.24-.5a3.42071,3.42071,0,0,0,.85.49l.19,1.32a.249.249,0,0,0,.25.21h2a.25676.25676,0,0,0,.25-.21l.19-1.32a3.69515,3.69515,0,0,0,.84-.49l1.25.5a.26191.26191,0,0,0,.31-.11l1-1.73A.25969.25969,0,0,0,10.822,13.34058Zm-4.78.18a1.5,1.5,0,1,1,1.5-1.5A1.498,1.498,0,0,1,6.04193,13.52057Z"/>   <path d="M19.99674.01533H15.9968a.99868.99868,0,0,0-.99505,1l-.00122,1.98486H4.99723V6.00943l2.01171.01214V5.01233l7.99036-.01214-.0025,4.01508a.9986.9986,0,0,0,.995,1h6.00494a1.00293,1.00293,0,0,0,1.00006-1V3.01533Zm-.5,3.5v-2.75l2.75,2.75Z"/>   <path d="M19.998,14.00878H15.99808a.99869.99869,0,0,0-.99506,1l-.0025,4.01019-7.989.00354V18.01388H4.99979v3.00863L14.9993,21.019l-.00122,1.98975a.99864.99864,0,0,0,.995,1h6.005a1.003,1.003,0,0,0,1.00006-1v-6Zm-.5,3.49994V14.75878l2.75,2.74994Z"/> </svg> 
  </template>
