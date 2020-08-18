<template>

<card id="page-card" class="hit  lg:border-none rounded flex justify-between h-auto items-end lg:h-64 pb-2 mb-2 lg:py-0 flex-wrap-reverse bg-white w-full">
  <div class="w-full lg:w-1/2 px-3 lg:px-0 h-auto lg:h-64 tracking-tight">
      <div class="flex flex-row items-center w-full justify-between pb-2">
          <div class="flex flex-row w-4/5 items-start">
              <span
                  v-if="item.location"
                  class="uppercase tracking-tight text-xs text-gray-600">
                  {{ item.location|truncate(75) }}
              </span>
              <span v-else class="uppercase tracking-tight text-xs text-gray-600">
              &nbsp;

              </span>
          </div>
          
          <div
              v-if="item.cac2_approved"
              class=""
             
                      >
              <div class="flex flex-row w-10 justify-center items-center border border-orange-200 rounded-full bg-orange-100 p-2">    
              <img
                  src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                  class="h-5 w-5  ">
                  </div>    
             
          </div>
      </div>
      <div class="text-blue-900">
          <ais-highlight
              attribute="name"
              :hit="item"
              class="hover:text-blue-500 text-xl leading-tight tracking-tight text-blue-900 t2"
          />
      </div>
      <p class="hit-description text-base lg:text-base w-full pb-3 font-normal text-gray-600 mt-2 leading-normal">
          {{ item.mission|truncate(125) }}
      </p>
      <footer>
          <div
              v-if="item.known_for"
              class="flex flex-row py-3 w-full  items-start">
              <div class="h-full inline">
                  <AwardIcon class="inline text-indigo-600 mr-1 h-5 align-left text-xs" />
              </div>
              <div class="flex flex-row items-start w-full text-base">
                  <div class="h-full inline no-underline leading-tight tracking-tight  text-base lg:text-sm text-indigo-900 t1">
                    <p class="text-xs text-indigo-600 ">Best Known For</p>
                      {{ item.known_for | truncate(100) }}
                  </div>
              </div>
          </div>
      </footer>
  </div>
  <header class="w-full lg:w-2/5 h-auto lg:h-64 items-start">
      <img
          v-if="item.image_path"
          :src="item.image_path"
          :alt="item.name"
          class="pb-2 lg:pb-0 max-h-full w-full rounded object-contain">
      <div
          v-else
          class="hidden md:flex h-56 mb-2 lg:mb-0 items-center border border-gray-300 w-full align-middle justify-center rounded bg-gray-100 opacity-75">
          <ImageIcon class="theme-teal h-10 w-auto"/>
      </div>
  </header>
</card>

</template>

<script>

export default {
  name: 'page-card',

  props: {

    item: {
      type: Object
    }

  },
  
  filters: {
      truncate: function(value, limit) {
          if (!value) return '';
          else if (value.length > limit) {
              value = value.substring(0, (limit - 3)) + '...';
          }
          return value;
      }
  },
  
};
</script>
