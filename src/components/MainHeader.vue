  <template>
    
<header
      id="header"
    class="header pb-6 sm:pb-10">
    <div class="flex items-center flex-row w-3/4 ">
<a href="/hope-portal" class="w-1/5">
      <img src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png" class="hidden absolute top-0 left-0 mt-4 mx-12 md:block h-16 w-auto bg-white shadow-lg rounded-full ">
      </a>

      <search-bar class="w-1/2" />
      </div>

    <div class="absolute   top-0 right-0 px-6 mt-6 " v-click-outside="hide">
    <div class="relative lg:mx-12  inline-block text-left"  >
      <div class="inline-flex items-center">
       <!--  <span class="hidden lg:block inline">Menu</span> -->
       
        <button class="flex  items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-gray-600" aria-label="Options" id="options-menu" aria-haspopup="true" aria-expanded="true" @click="isOn = !isOn">
          <svg class="h-5 w-5 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
       
      </div>

      <transition
            enter-active-class="transition ease-out duration-100 transform"
            enter-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75 transform"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
      <div v-show="isOn" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/hope-portal" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Hope Portal Search</a>
            
            <a href="#" @click="openslider = true" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">About</a>
           
          </div>
        </div>
      </div>
    </transition>
    </div>
    </div>
      
          
    <div class="block w-full md:hidden">
       
          <img src="../images/JessHP2.png" class="w-full h-auto ">
         
    </div>
    <div class="hidden md:block md:h-64">
         <img src="../images/JessHP3.png" class="h-64">
    </div>

    <img src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png" class="block sm:hidden h-16 w-auto bg-white shadow-lg rounded-full ">

    <div class="header-title t2 pt-4 md:pt-8 text-blue-900  text-2xl lg:text-2xl tracking-tight leading-tight w-full lg:w-2/5">
        <span class="titlegray">
          The Hope Portal is a curated directory of the best organizations in childhood cancer.
        </span>
    </div>

    <p class="text-sm t1 pb-8 sm:pb-2 text-gray-500 pt-3 sm:mb-8 mb-8">
        a Coalition Against Childhood Cancer collaboration
    </p>
    <!-- <ais-instant-search
         
          :index-name="indexName"
          :search-client="searchClient"
          :routing="routing"
          >

          <ais-search-box
        placeholder="Search organizations..."    class="">

        <template slot="submit-icon"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                width="16"
                height="16">
                <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.67"
                    transform="translate(1 1)">
                    <circle
                        cx="7.11"
                        cy="7.11"
                        r="7.11">
                    </circle>
                    <path d="M16 16l-3.87-3.87">
                    </path>
                </g>
            </svg>
        </template>
    </ais-search-box>
  </ais-instant-search> -->
    <div>
    <div v-if="openslider"  class="fixed inset-0 z-40 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <section  class=" absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <!--
            Slide-over panel, show/hide based on slide-over state.

            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
          <div class="w-screen max-w-md">
            <div class="h-full flex flex-col space-y-6 py-6 bg-white shadow-2xl border-l border-gray-300 overflow-y-scroll">
              <header class="px-4 sm:px-6 ">
                <div class="flex items-start justify-between space-x-3">
                  <h2 class="text-base leading-7 t2 font-medium text-gray-900">
                 About
                  </h2>
                  <div class="h-7 flex items-center">
                    <button @click="hideslider" aria-label="Close panel" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <img src="../images/JessHP.jpg" class=" w-full border border-gray-300 bg-white  ">
              <div class="relative flex-1 ">
                <div class="text-black text-2xl flex flex-col w-full text-left pb-4 ">
                  <!--  <h2 class=" text-sm t2 text-gray-500">
                 ABOUT
                   </h2> -->
                   <div class="px-4 sm:px-8">
                  <img src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png" class="block h-16 w-16 bg-white shadow-lg rounded-full -mt-6">
                  </div>

                  <div class="px-4 sm:px-8">

                <div class="text-2xl md:text-2xl w-full leading-tight text-blue-900 t2 pb-3 pt-2 tracking-tight ">A curated directory of childhood cancer organizations
                </div>
                <p class="text-sm opacity-75">
                  The Hope Portal is a centralized and comprehensive cloud-based tool designed to assist families and health care professionals in their search for childhood cancer support services and information.  

                </p>
                <div class="flex mt-2 mb-4 flex-wrap-reverse items-center justify-between">
               
                <div class="h-full pt-2 md:pt-0 w-3/4 items-center text-xs t1  text-gray-700">
                    <a class="underline" target="_blank" href="http://cac2.org/"> Coalition Against Childhood Cancer</a>
                </div>
                <div class="flex w-1/5 flex-row  items-center   bg-white ">    
                <img
                    src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                    class="h-10 w-10 p-2 bg-gray-100 border border-gray-300 rounded-full">
                    </div>
                  </div>
                  </div>
              <div class="bg-indigo-100 px-4 sm:px-8 py-10">
              
                 <h2 class=" tracking-tight uppercase text-xs t2 mb-3 titlegray">
               For Organizations
                 </h2>
                <div class=" rounded  shadow-lg hover:shadow-lg hover:bg-gray-200 border-gray-200 border p-3 bg-white">
                 
                <a href="" class=" text-indigo-600 hover:text-blue-500 flex flex-row w-full items-center justify-between">
               <div class="w-3/4 text-base t1 leading-tight py-2">
                 Embed the Hope Portal on your website, for free!
                                            
               </div>
               <div class="text-right justify-right">
                 <ChevronRightIcon />
               </div>
                </a>
                </div>
                 <div class="mt-3 rounded shadow hover:bg-indigo-800 border border-gray-200 bg-indigo-600 p-3">
                  
                 <a href="" class=" flex flex-row w-full items-center text-white  justify-between">
                <div class="w-3/4 text-base t1  leading-tight py-2">
                 
                 Sign up to create/claim your organization's page!
                                             
                </div>
                <div class="text-right justify-right">
                  <ChevronRightIcon />
                </div>
                 </a>
                 </div>

              
                </div>
                </div>

                <div class="pt-10 px-4 sm:px-8 pb-6 inline-flex text-sm t1 text-gray-500 w-full justify-between">
                  
                <a  target="_blank" href="https://anddit.com/hope-portal/">
                  More About Hope Portal
                </a>
                <span class="mx-1">
                  &#183;
                </span>
                <a target="_blank" href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/">
               Help Center
                </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
</header>
</template>

<script>
  // import algoliasearch from 'algoliasearch/lite';
  // import getRouting from '../routing';
import SearchBar from './SearchBar.vue';

export default {
  name: 'main-header',
  components: {
    SearchBar,
  }
  // data() {
   
  //     return {
  //        searchClient: algoliasearch(
  //             'F62MOPA7KR',
  //             '85e52ff35b00c7ff5430ea1d182cb818'
  //         ),
  //         indexName: 'production_organizations',
  //         routing: getRouting({ indexName: 'production_organizations' })
  //     };
  // },
  
};
</script>
