
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
    name: 'EOS_REPLAY_30_OUTLINED', // vue component name
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
      <svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-2.44 8.49h.45c.21 0 .37-.05.48-.16s.16-.25.16-.43c0-.08-.01-.15-.04-.22s-.06-.12-.11-.17-.11-.09-.18-.11-.16-.04-.25-.04c-.08 0-.15.01-.22.03s-.13.05-.18.1-.09.09-.12.15-.05.13-.05.2h-.85c0-.18.04-.34.11-.48s.17-.27.3-.37.27-.18.44-.23.35-.08.54-.08c.21 0 .41.03.59.08s.33.13.46.23.23.23.3.38.11.33.11.53c0 .09-.01.18-.04.27s-.07.17-.13.25-.12.15-.2.22-.17.12-.28.17c.24.09.42.21.54.39s.18.38.18.61c0 .2-.04.38-.12.53s-.18.29-.32.39-.29.19-.48.24-.38.08-.6.08c-.18 0-.36-.02-.53-.07s-.33-.12-.46-.23-.25-.23-.33-.38-.12-.34-.12-.55h.85c0 .08.02.15.05.22s.07.12.13.17.12.09.2.11.16.04.25.04c.1 0 .19-.01.27-.04s.15-.07.2-.12.1-.11.13-.18.04-.15.04-.24c0-.11-.02-.21-.05-.29s-.08-.15-.14-.2-.13-.09-.22-.11-.18-.04-.29-.04h-.47v-.65zm5.74.75c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32c.03-.13.04-.29.04-.48v-.97z"/></svg>
  </template>
