
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
    name: 'EOS_KUBELET_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.97089,14.81171a3.28581,3.28581,0,0,0-.27234-.94233c-.6764.67235-1.48345,1.47447-2.15979,2.14679-.47184-.469-1.035-1.02881-1.50684-1.49774.67639-.688,1.48336-1.50883,2.15979-2.19671a3.29344,3.29344,0,0,0-4.47027,4.09387c-1.01789,1.01212-2.41031,2.39549-3.42805,3.40735-.76985.87227-2.037,1.36119-.56491,2.40886,1.13125,1.50464,1.4688.306,2.42339-.51173,1.017-1.01121,2.41087-2.396,3.428-3.40733A3.28985,3.28985,0,0,0,23.97089,14.81171Z"/><path d="M16,2a1.00368,1.00368,0,0,0-1-1H11a1.00368,1.00368,0,0,0-1,1V3h6Z"/><circle cx="13" cy="9" r="1.5"/><path d="M9,1H7A1.00366,1.00366,0,0,0,6,2V3H8V2C8,1.17078,8.44885,1,9,1Z"/><polygon points="6 4 1 15 3 15 8 4 6 4"/><path d="M5,17.00281V16H3v1.00281A1.99841,1.99841,0,0,0,5,19H7A1.77267,1.77267,0,0,1,5,17.00281Z"/><path d="M16.0592,13H8.1l3.18-7H14.7l2.49927,5.4671a5.58264,5.58264,0,0,1,1.69427-1.092L15.99,4H10L5,15H15.49561A5.01813,5.01813,0,0,1,16.0592,13Z"/><path d="M23.97089,14.81171a3.28581,3.28581,0,0,0-.27234-.94233c-.6764.67235-1.48345,1.47447-2.15979,2.14679-.47184-.469-1.035-1.02881-1.50684-1.49774.67639-.688,1.48336-1.50883,2.15979-2.19671a3.29344,3.29344,0,0,0-4.47027,4.09387c-1.01789,1.01212-2.41031,2.39549-3.42805,3.40735-.76985.87227-2.037,1.36119-.56491,2.40886,1.13125,1.50464,1.4688.306,2.42339-.51173,1.017-1.01121,2.41087-2.396,3.428-3.40733A3.28985,3.28985,0,0,0,23.97089,14.81171Z"/><path d="M14.29681,17H9V16H7v1.00281A1.99841,1.99841,0,0,0,9,19h3.26367C12.3172,18.95081,14.29681,17,14.29681,17Z"/></svg>
  </template>
