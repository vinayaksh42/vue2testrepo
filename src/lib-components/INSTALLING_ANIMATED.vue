
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
    name: 'EOS_INSTALLING_ANIMATED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > 	<path  d="M4,16h4v4H4V16z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".2" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M10,16h4v4h-4V16z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".4" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M16,16h4v4h-4V16z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".6" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M4,10h4v4H4V10z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".8" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M10,10h4v4h-4V10z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M16,10h4v4h-4V10z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.2" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M4,4h4v4H4V4z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.4" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M10,4h4v4h-4V4z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.6" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> 	<path  d="M16,4h4v4h-4V4z"> 		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.8" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"> 		</animate> 	</path> </svg> 
  </template>
