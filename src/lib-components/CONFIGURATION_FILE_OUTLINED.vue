
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
    name: 'EOS_CONFIGURATION_FILE_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.69119,15.77819l-.6308-.48933A2.2891,2.2891,0,0,0,13.084,15a1.5482,1.5482,0,0,0-.02357-.28886l.6249-.48933a.15308.15308,0,0,0,.03537-.18865l-.58953-1.01988a.14952.14952,0,0,0-.18275-.06484l-.731.29477a2.01585,2.01585,0,0,0-.50112-.2889l-.112-.77815a.1408.1408,0,0,0-.14151-.12382H10.28368a.15136.15136,0,0,0-.14738.12382l-.112.77815a2.355,2.355,0,0,0-.50109.2889l-.731-.29477a.15442.15442,0,0,0-.18276.06484L8.0199,14.03316a.14594.14594,0,0,0,.03537.18865l.6249.48933a2.36591,2.36591,0,0,0,0,.57772l-.6249.48933a.15306.15306,0,0,0-.03537.18865l.58953,1.01988a.14953.14953,0,0,0,.18276.06484l.731-.29477a2.01611,2.01611,0,0,0,.50109.28887l.112.77818a.14678.14678,0,0,0,.14738.12382h1.17907a.15138.15138,0,0,0,.14738-.12382l.112-.77818a2.17821,2.17821,0,0,0,.49522-.28887l.73692.29477a.15441.15441,0,0,0,.18275-.06484l.58953-1.01988A.1531.1531,0,0,0,13.69119,15.77819Zm-2.818.10611A.8843.8843,0,1,1,11.75751,15,.88312.88312,0,0,1,10.87321,15.8843Z"/><path d="M14,2H6A2.00587,2.00587,0,0,0,4,4V20a2.00591,2.00591,0,0,0,2,2H18a2.00591,2.00591,0,0,0,2-2V8Zm4,18H6V4h7V9h5Z"/></svg>
  </template>
