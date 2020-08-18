<template>
    <div
       id="search"
        class="tracking-tight bg-gray-100"
        >
        <ais-instant-search
             
              :index-name="indexName"
              :search-client="searchClient"
              :routing="routing">
            
              <!-- <header
                  id="header"
                class="header pb-6 sm:pb-10">
                
                <a href="/hope-portal"><img src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png" class="hidden absolute top-0 left-0 mt-4 mx-12 md:block h-16 w-auto bg-white shadow-lg rounded-full ">
                  </a>

                <div class="absolute   top-0 right-0 px-6 mt-6 " v-click-outside="hide">
                <div class="relative lg:mx-12  inline-block text-left"  >
                  <div class="inline-flex items-center">
                   
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
                <div>
                <div v-if="openslider"  class="fixed inset-0 z-40 overflow-hidden">
                  <div class="absolute inset-0 overflow-hidden">
                    <section  class=" absolute inset-y-0 right-0 pl-10 max-w-full flex">
                    
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
            </header> -->

              <main class="container px-3 ">
                <div class="container-wrapper md:w-1/4">
                    <section class="container-filters   lg:text-sm">
                          <div class="container-header -mb-4 ">
                            
                            <h2 class="text-lg opacity-50 t1">
                                Filters
                            </h2>
                          <!--  <ais-clear-refinements data-layout="mobile" class="">
                                 <template slot="resetLabel">
                                   <div class="clear-filters px-3  text-sm underline">
                                       Clear All Filters
                                   </div>
                                 </template>
                           </ais-clear-refinements> -->
                            <ais-stats data-layout="mobile">
                                  <template
                                    slot="default"
                                    slot-scope="{ nbHits }">
                                    <span class="ais-Stats-text t1">
                                          
                                              {{ formatNumber(nbHits) }}
                                         results
                                    </span>
                                  </template>
                            </ais-stats>
                            <button class="md:hidden"
                            @click="closeFilters">
                              <XIcon />
                            </button>
                          </div>
                          <ais-clear-refinements data-layout="desktop" class="">
                                <template slot="resetLabel">
                                  <div class="clear-filters   text-sm underline">
                                      Clear All Filters
                                  </div>
                                </template>
                          </ais-clear-refinements>

                          
                          <div class="container-body mt-2">
                            <ais-panel class="decreasedpb -my-2">
                              <template slot="header">
                                    Type of Support
                                   
                                </template>

                                  <template slot="default">
                                    <ais-hierarchical-menu
                                        :attributes="[
                                            'hierarch.lvl0',
                                            'hierarch.lvl1'
                                        ]"
                                        :sort-by="['count:desc']"
                                        class="leading-normal"
                                        :style="{ minHeight: '10rem', lineHeight:'1.15 !important' }"
                                    />
                                  </template>
                            </ais-panel>
                          
                          <ais-panel class="flex flex-col w-full relative nobordertop"
                          v-on-clickaway="toggleaway0"
                          >
                          <template slot="header">
                              Eligibility
                             
                          </template>
                            <template slot="default" class="w-full relative " > 
<!--                               class="flex flex-row justify-between items-center  w-full my-1 relative rounded-lg "
 -->                          <button
                              @click="toggleActive2"
                              class="refinementlistbutton"
                            >
                              
                               <ais-current-refinements
                                  :included-attributes="states"
                                 
                                  :excluded-attributes="[
                                      'diagnoses',
                                      'hierarch.lvl0',
                                      'hierarch.lvl1',
                                      
                                      
                                  ]"
                                  
                                    class="flex flex-row  w-full">
                                     <div
                                      slot-scope="{ items }"
                                      class="w-full">
                                      
                                        <div class="border border-gray-400 rounded-lg hover:shadow-lg  bg-white py-3 px-3 flex flex-row justify-between w-full items-center tracking-tight leading-tight"
                                    
                                        >

                                          <div class="t1 text-sm text-gray-800 text-left">Country</div>
                                          <div v-if="items.length === 0" class="flex flex-row items-center">
                                            <span class="text-sm text-blue-500 t1">All</span>
                                            <ChevronDownIcon class=" h-4 w-4 mx-1 text-gray-500 "/>
                                          </div>
                                       

                                      <ul v-else class="flex flex-row w-2/3 items-center">
                                          <li
                                            v-for="item in items"
                                            :key="item.attribute"
                                            class="w-5/6">
                                            <ul v-if="item.attribute === 'states'">
                                                <li
                                                    v-for="refinement in item.refinements"
                                                    :key="[refinement.value]"
                                                    class="text-right text-blue-500 t1 text-sm ">
                                                    <div
                                                    class="t2"
                                                    v-if="refinement.value === 'USA United States' || 
                                                  refinement.value === 'CAN Canada' ">
                                                  <span>{{ refinement.value }}</span>
                                                  </div>
                                                  <div v-else class="t1">
                                                    
                                                    <span class="text-blue-500 t1" v-if="item.refinements.length === 1">
                                                      <span v-if="refinement.value !== 'USA United States' && refinement.value !== 'CAN Canada'">
                                                        Select Country
                                                      </span>
                                                    
                                                  </span>
                                                   
                                                  </div>
                                                   
                                                    
                                                </li>
                                            </ul>
                                        </li>
                                        <ChevronDownIcon class="h-4 w-4 mx-1 text-gray-500 "/>
                                      
                                      </ul>
                                     </div>
                                   </div>
                               </ais-current-refinements>
                             </button>
                             <ais-refinement-list
                                         id="countryfilters"
                                         attribute="states"
                                         searchable
                                         searchable-placeholder="Search States..."
                                         :transformItems="transformItems4"
                                         :limit="60"
                                        :sort-by="['name:desc']"
                                         
                                         class="active rounded absolute bg-white z-20  w-full"
                                         
                                         >
                                          <div
                                              slot-scope="{
                                                 items,
                                                 refine,
                                                 createURL,
                                                 
                                             }"

                                              class="bg-white w-full">
                                             <div class="h-64 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">
                                               <span
                                                   v-if="items.length > 0" class="text-gray-600 text-sm sm:text-xs py-3">
                                                   Select countries to view national organizations
                                                </span>
                                                  <ul class="bg-white px-3">
                                                        
                                                        <li
                                                        v-for="item in items"
                                                        :key="item.value"
                                                        class="py-1 ais-RefinementList-item"
                                                        :class="{ 'ais-RefinementList-item--selected': item.isRefined}">
                                                         <a
                                                             :href="createURL(item)"
                                                             :style="{ 
                                                               fontWeight: item.isRefined ?  'bold' : '',
                                                               color: item.isRefined ? '#1062ed':'' 
                                                             }"
                                                             class="ais-RefinementList-label"
                                                             @click.prevent="refine(item.value)">
                                                             <input class="w-4 h-4 ais-RefinementList-checkbox" type="checkbox" :value="item.value" 
                                                           
                                                             />
                                                             <ais-highlight class="w-3/4 ais-RefinementList-labelText" attribute="item" :hit="item"/>
                                                         </a>
                                                        </li>
                                                  </ul>
                                                 <span
                                                     v-if="items.length === 0" class="py-3">
                                                     <b>No matching results yet.</b><br>To see results here, try another search or select new filters. 
                                                  </span>
                                                 

                                                </div>


                                                

                                                 </div>
                                      </ais-refinement-list>
                                    </template>
                                  </ais-panel>


        

         
                            <ais-panel class="flex flex-col w-full relative nobordertop"
                            v-on-clickaway="toggleaway1"
                            >
                              <template slot="default" class="w-full relative " >  
                                <button
                                    @click="toggleActive"
                                  
                                    class="refinementlistbutton ">
                                    
                                     <ais-current-refinements
                                        :included-attributes="states"
                                       
                                        :excluded-attributes="[
                                            'diagnoses',
                                            'hierarch.lvl0',
                                            'hierarch.lvl1',
                                            
                                            
                                        ]"
                                        
                                          class="flex flex-row  w-full">
                                           <div
                                            slot-scope="{ items }"
                                            class="w-full">
                                            
                                              <div class="border border-gray-400 rounded-lg hover:shadow-lg  bg-white   py-3 px-3 flex flex-row justify-between w-full items-center tracking-tight leading-tight"
                                          
                                              >

                                                <div class="t1 text-sm text-gray-800 text-left">State/Region</div>
                                                <div v-if="items.length === 0" class="flex flex-row items-center">
                                                  <span class="text-sm text-blue-500 t1">All</span>
                                                  <ChevronDownIcon class=" h-4 w-4 mx-1 text-gray-500 "/>
                                                </div>
                                             

                                            <ul v-else class="flex flex-row w-2/3 items-center">
                                                <li
                                                  v-for="item in items"
                                                  :key="item.attribute"
                                                  class="w-5/6">
                                                  <ul v-if="item.attribute === 'states'">
                                                      <li
                                                          v-for="refinement in item.refinements"
                                                          :key="[refinement.value]"
                                                          class="text-right text-blue-500 t1 text-sm ">
                                                          <div
                                                          class="t2"
                                                          v-if="refinement.value !== 'USA United States' && 
                                                        refinement.value !== 'CAN Canada' ">
                                                        <span>{{ refinement.value }}</span>
                                                        </div>
                                                          <span class="text-blue-500 t1" v-if="item.refinements.length === 1">
                                                            <span v-if="refinement.value === 'USA United States' || refinement.value === 'CAN Canada'">
                                                              Select State/Region
                                                            </span>
                                                          
                                                        </span>
                                                      </li>
                                                  </ul>
                                              </li>
                                              <ChevronDownIcon class="h-4 w-4 mx-1 text-gray-500 "/>
                                            
                                            </ul>
                                           </div>
                                         </div>
                                     </ais-current-refinements>
                                   </button>
                                   


                                   

<!--                          :transformItems="transformItems4"
 -->                                <ais-refinement-list
                                        id="statefilters"
                                        attribute="states"
                                        searchable
                                        searchable-placeholder="Search States..."
                                        :transformItems="transformItems2"
                                        :limit="60"
                                       :sort-by="['isRefined', 'name:asc']"
                                        
                                        class="active rounded absolute bg-white z-20  w-full"
                                        
                                        >
                                         <div
                                             slot-scope="{
                                                items,
                                                refine,
                                                createURL,
                                                searchForItems
                                                
                                            }"

                                             class="bg-white w-full">
                                            <div class="h-64 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">
                                                <div class="ais-RefinementList-searchBox" v-if="items.length > 0">
                                                    <form
                                                        action=""
                                                        role="search"
                                                        novalidate="novalidate"
                                                        class="ais-SearchBox-form">
                                                        <input
                                                            @input="searchForItems($event.currentTarget.value)"
                                                            type="search"
                                                            autocorrect="off"
                                                            autocapitalize="off"
                                                            autocomplete="off"
                                                            spellcheck="false"
                                                            required="required"
                                                            maxlength="512"
                                                            aria-label="Search"
                                                            placeholder="Search States..."
                                                            class="ais-SearchBox-input">
                                                        <button
                                                            type="submit"
                                                            title="Search"
                                                            class="ais-SearchBox-submit">
                                                            <svg
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="10"
                                                                height="10"
                                                                viewBox="0 0 40 40"
                                                                class="ais-SearchBox-submitIcon">
                                                                <path
                                                                    d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
                                                                    fillRule="evenodd">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                        <button
                                                            type="reset"
                                                            title="Clear"
                                                            hidden="hidden"
                                                            class="ais-SearchBox-reset">
                                                            <svg
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="1em"
                                                                height="1em"
                                                                viewBox="0 0 20 20"
                                                                class="ais-SearchBox-resetIcon">
                                                                <path
                                                                    d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
                                                                    fillRule="evenodd">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                                <span
                                                    v-if="items.length > 0" class="text-sm sm:text-xs text-gray-600 py-3">
                                                    Select states to view local organizations
                                                 </span>
                                                 <ul class="bg-white px-3">
                                                       <!-- <li v-if="isFromSearch && !items.length">
                                                        No results for this search.
                                                    </li> -->
                                                       <li
                                                       v-for="item in items"
                                                       :key="item.value"
                                                       class="py-1 ais-RefinementList-item"
                                                       :class="{ 'ais-RefinementList-item--selected': item.isRefined}">
                                                        <a
                                                            :href="createURL(item)"
                                                            :style="{ 
                                                              fontWeight: item.isRefined ?  'bold' : '',
                                                              color: item.isRefined ? '#1062ed':'' 
                                                            }"
                                                            class="ais-RefinementList-label"
                                                            @click.prevent="refine(item.value)">
                                                            <input class="w-4 h-4 ais-RefinementList-checkbox" type="checkbox" :value="item.value" 
                                                          
                                                            />
                                                            <ais-highlight class="w-3/4 ais-RefinementList-labelText" attribute="item" :hit="item"/>
                                                        </a>
                                                       </li>
                                                 </ul>
                                                <span
                                                    v-if="items.length === 0" class="py-3">
                                                    <b>No matching results yet.</b><br>To see results here, try another search or select new filters. 
                                                 </span>
                                                

                                               </div>
                                      </div>
                                     </ais-refinement-list>

                                </template>
                            </ais-panel>
                               
                            <ais-panel class="flex flex-col w-full relative nobordertop">
                              <template slot="default" class="w-full relative ">  
                                <button
                                    @click="togglediagnosesActive"
                                    v-on-clickaway="toggleaway2"
                                    class="refinementlistbutton ">
                                     <ais-current-refinements
                                        :included-attributes="diagnoses"
                                        :excluded-attributes="[
                                            'states',
                                            'hierarch.lvl0',
                                            'hierarch.lvl1',
                                          
                                        ]"

                                          class="flex flex-row  w-full">
                                           <div
                                            slot-scope="{ items }"
                                            class="w-full">
                                              <div class="border border-gray-400 rounded-lg hover:shadow-lg  bg-white   py-3 px-3 flex flex-row justify-between w-full items-center tracking-tight leading-tight"
                                                
                                                >

                                                  <div class="t1 text-sm text-gray-800 text-left">Diagnosis</div>
                                                  <div v-if="items.length === 0" class="flex flex-row items-center">
                                                    <span class="text-sm text-blue-500 t1">All</span>
                                                    <ChevronDownIcon class=" h-4 w-4 mx-1 text-gray-500 "/>
                                                  </div>
                                             

                                            <ul v-else class="flex flex-row w-2/3 items-center">
                                                <li
                                                    v-for="item in items"
                                                    :key="item.attribute"
                                                    class="w-5/6">
                                                    <ul v-if="item.attribute === 'diagnoses'">
                                                        <li
                                                            v-for="refinement in item.refinements"
                                                            :key="[refinement.value]"
                                                            class="text-right text-blue-500 t1 text-sm ">

                                                              <div
                                                              class="t2"
                                                              >
                                                            <span>{{ refinement.value }}</span>
                                                            </div>
                                                            
                                                        </li>
                                                    </ul>
                                                </li>
                                                <ChevronDownIcon class="h-4 w-4 mx-1 text-gray-500 "/>
                                            
                                            </ul>
                                           </div>
                                         </div>
                                     </ais-current-refinements>
                                   </button>
                            
                                <ais-refinement-list
                                        id="diagnosisfilters"
                                        attribute="diagnoses"
                                      :sort-by="['name:asc']"
                                        :transformItems="transformItems3"
                                        class="active rounded absolute bg-white z-10  w-full">
                                         <div
                                             slot-scope="{
                                                items,
                                                refine,
                                                createURL,
                                              
                                            }"
                                             class="bg-white w-full">
                                            <div class="h-64 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">

                                              <span
                                                  v-if="items.length > 0" class="text-sm sm:text-xs text-gray-600 py-3">
                                                  View organizations serving a diagnosis and/or view <i>All Childhood Cancer</i>
                                               </span>



                                             <ul class="bg-white px-3">
                                                
                                                   <li
                                                   v-for="item in items"
                                                   :key="item.value"
                                                   class="py-1 ais-RefinementList-item "
                                                   :class="{ 'ais-RefinementList-item--selected': item.isRefined}">
                                                    <a
                                                        :href="createURL(item)"
                                                        :style="{ 
                                                          fontWeight: item.isRefined ?  'bold' : '',
                                                          color: item.isRefined ? '#1062ed':'' 
                                                        }"
                                                        class="ais-RefinementList-label "
                                                        @click.prevent="refine(item.value)">
                                                        <input class="w-4 h-4 ais-RefinementList-checkbox" type="checkbox" :value="item.value" 
                                                      
                                                        />
                                                        <ais-highlight class=" w-3/4 ais-RefinementList-labelText" attribute="item" :hit="item"/>
                                                    </a>
                                                   </li>
                                             </ul>
                                                <span
                                                    v-if="items.length === 0" class="py-3">
                                                    <b>No matching results yet.</b><br>To see results here, try another search or select new filters. 
                                                 </span>
                                               </div>
                                           </div>
                                     </ais-refinement-list>
                                </template>
                               
                            </ais-panel>
                          </div>
                          <div class="h-64">
                            
                          </div>
                    </section>
                    <footer
                        class="container-filters-footer"
                        data-layout="mobile">
        
                        <ais-clear-refinements
                            @click="closeFilters"
                            class="container-filters-footer-button-wrapper "
                        >
                        <span slot="resetLabel"><span class="tracking-tight t1">Clear filters</span></span>
                        </ais-clear-refinements>
                          <ais-stats class="container-filters-footer-button-wrapper">
                            <template
                                slot="default"
                                slot-scope="{ nbHits }"
                                class="t2">
                                  <button
                                    @click="closeFilters"
                                    class=" t2 button button-primary">
                                    Show {{ formatNumber(nbHits) }} results
                                  </button>
                            </template>
                          </ais-stats>
                    </footer>
                </div>

                <section class="container-results w-full md:px-16">
                      <header class="container-header container-options ">
                        <div class="flex flex-row w-full justify-between items-center">
                           <h2 class=" uppercase text-sm titlegray">
                               Organizations
                           </h2>
                            <ais-stats class="container-filters-footer-button-wrapper">
                                <template
                                    slot="default"
                                    slot-scope="{ nbHits }">
                                    <span class="text-sm t1">
                                        {{ formatNumber(nbHits) }} Results
                                    </span> 
                                </template>
                            </ais-stats>
     
                          
                        </div>
                      </header>

                      <div class="lg:hidden flex flex-row w-full mb-1 rounded justify-between items-center">
                       <div class="uppercase titlegray t2 w-1/4 text-base">
                        Organizations
                       </div>
                      <button
                          @click="openFilters"
                          class="flex text-center justify-center items-center h-12 flex-row bg-white w-1/3 t1 my-3 border border-gray-700 text-gray-800 shadow-xl rounded-lg">
                           
                            Filters
                          
                      </button>
                      </div>
                      <ais-hits :transformItems="transformItems" class="w-full">
                        <div
                            slot="item"
                            slot-scope="{ item }"
                            class="w-full hover:shadow-lg bg-white hover:border-blue-500 px-3 lg:px-6 lg:pl-12 my-4 py-6 lg:my-0  border border-gray-200">
                              <a target="_blank" :href="'https://www.anddit.com/organizations/' + item.id">
                                <PageCard :item="item" />
                                 
                                 <!--  <card class="hit  lg:border-none rounded flex justify-between h-auto items-end lg:h-64 pb-2 mb-2 lg:py-0 flex-wrap-reverse bg-white w-full">
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
                                  </card> -->
                              </a>
                        </div>
                      </ais-hits>

                      <no-results />

                      <footer class="container-footer">
                        <ais-pagination :padding="2">
                            <div
                                slot-scope="{
                                    currentRefinement,
                                    nbPages,
                                    pages,
                                    isFirstPage,
                                    isLastPage,
                                    refine,
                                    createURL
                                }"
                                class="ais-Pagination">
                                <ul class="ais-Pagination-list">
                                      <li
                                        v-if="isFirstPage"
                                        class="ais-Pagination-item ais-Pagination-item--previousPage ais-Pagination-item--disabled">
                                        <span class="ais-Pagination-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 10 10"
                                                width="10"
                                                height="10">
                                                <g
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                    stroke="#000"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.143">
                                                    <path d="M9 5H1M5 9L1 5l4-4">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </li>
                                    <li
                                        v-if="!isFirstPage"
                                        class="ais-Pagination-item ais-Pagination-item--previousPage">
                                        <a
                                            :href="createURL(currentRefinement - 1)"
                                            @click.prevent="refine(currentRefinement - 1)"
                                            aria-label="Previous"
                                            class="ais-Pagination-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 10 10"
                                                width="10"
                                                height="10">
                                                <g
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                    stroke="#000"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.143">
                                                    <path d="M9 5H1M5 9L1 5l4-4">
                                                    </path>
                                                </g>
                                            </svg>
                                        </a>
                                      </li>
                                      <li
                                        v-for="page in pages"
                                        :key="page"
                                        :class="cx('ais-Pagination-item', 'ais-Pagination-item--page', {
                                              'ais-Pagination-item--selected': page === currentRefinement
                                        })">
                                        <a
                                              :href="createURL(page)"
                                              @click.prevent="refine(page)"
                                              :style="{ fontWeight: page === currentRefinement ? 'bold' : '' }"
                                              class="ais-Pagination-link">
                                            {{ page + 1 }}
                                        </a>
                                      </li>
                                      <li
                                        v-if="!isLastPage"
                                        class="ais-Pagination-item ais-Pagination-item--nextPage">
                                        <a
                                              :href="createURL(currentRefinement + 1)"
                                              @click.prevent="refine(currentRefinement + 1)"
                                              aria-label="Next"
                                              class="ais-Pagination-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 10 10"
                                                width="10"
                                                height="10">
                                                <g
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                    stroke="#000"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.143">
                                                    <path d="M1 5h8M5 9l4-4-4-4">
                                                    </path>
                                                </g>
                                            </svg>
                                        </a>
                                      </li>
                                      <li
                                        v-if="isLastPage"
                                        class="ais-Pagination-item ais-Pagination-item--nextPage ais-Pagination-item--disabled">
                                        <span class="ais-Pagination-link">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 10 10"
                                                width="10"
                                                height="10">
                                                <g
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                    stroke="#000"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.143">
                                                    <path d="M1 5h8M5 9l4-4-4-4">
                                                    </path>
                                                </g>
                                              </svg>
                                        </span>
                                      </li>
                                </ul>
                              </div>
                        </ais-pagination>

                        <div class="w-full my-16 lg:my-24 text-center">
                              Listings do not constitute endorsements.
                        </div>
                      </footer>
                </section>
              </main>

        </ais-instant-search>
      </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-clickaway@2.2.2/dist/vue-clickaway.min.js"></script>
<script>
    import algoliasearch from 'algoliasearch/lite';
// import VueSlider from 'vue-slider-component';
    import cx from 'classnames';
    import qs from 'qs';
// import ClearRefinements from './widgets/ClearRefinements.vue';
    import NoResults from '../widgets/NoResults.vue';
    import PageCard from './PageCard.vue';
    import { formatNumber } from '../utils';
    import getRouting from '../routing';
    import { AwardIcon, ImageIcon, ChevronDownIcon, InfoIcon, ChevronRightIcon, XIcon } from "vue-feather-icons";
    import '../Theme.css';
    import '../App.css';
    import '../App.mobile.css';
// import './widgets/PriceSlider.css';
import { mixin as clickaway } from 'vue-clickaway';
import ClickOutside from 'vue-click-outside';

    export default {

          components: {
    // ClearRefinements,
            PageCard,
            NoResults,
            AwardIcon,
            ImageIcon,
            ChevronDownIcon,
            ChevronRightIcon,
            InfoIcon,
            XIcon
         
        },
       mixins: [ clickaway ],
        template: '<p v-on-clickaway="away">Click away</p>',
  
        filters: {
            truncate: function(value, limit) {
                if (!value) return '';
                else if (value.length > limit) {
                    value = value.substring(0, (limit - 3)) + '...';
                }
                return value;
            }
        },
        created() {
            this.onKeyUp = event => {
                if (event.key !== 'Escape') {
                return;
                }
                this.closeFilters();
            }

            this.onClick = event => {
                if (event.target !== this.header ) {
                return;
                }

                this.closeFilters();
            }
        },
        mounted() {
            this.resultsContainer = document.querySelector('.container-results');
            this.header = document.querySelector('#header');
           
        },
        data() {
          let isOn = false;
          let openslider = false;
          
            return {
                cx,
                isOn,
                openslider,
                searchClient: algoliasearch(
                    'F62MOPA7KR',
                    '85e52ff35b00c7ff5430ea1d182cb818'
                ),
                indexName: 'production_organizations',
                routing: getRouting({ indexName: 'production_organizations' })
            };
        },
        methods: {
           
            toggleActive() {
                document.querySelector("#statefilters").classList.toggle("active");
            },
            toggleActive2() {
                document.querySelector("#countryfilters").classList.toggle("active");
            },
            togglediagnosesActive() {
                document.querySelector("#diagnosisfilters").classList.toggle("active");
            },
            toggleaway0: function() {
                  document.querySelector("#countryfilters").classList.add("active");
                },
            toggleaway1: function() {
                  document.querySelector("#statefilters").classList.add("active");
                },
            toggleaway2: function() {
                  document.querySelector("#diagnosisfilters").classList.add("active");
                },
                hide () {
                      this.isOn = false
                    },
                    hideslider () {
                          this.openslider = false
                        },
          
            formatNumber,
            toValue(value, range) {
                return [
                    value.min !== null ? value.min : range.min,
                    value.max !== null ? value.max : range.max,
                ];
            },
            getSelectedHitsPerPageValue() {
                const [, hitsPerPage] = document.location.search.match(/hitsPerPage=([0-9]+)/) || [];
                return Number(hitsPerPage);
            },
            openFilters() {
                document.body.classList.add('filtering');
                window.scrollTo(0, 0);
                window.addEventListener('keyup', this.onKeyUp);
                window.addEventListener('click', this.onClick);
            },
            closeFilters() {
                document.body.classList.remove('filtering');
                this.resultsContainer.scrollIntoView();
                window.removeEventListener('keyup', this.onKeyUp);
                window.removeEventListener('click', this.onClick);
            },
            transformItems(items) {
                return items.map(item => ({
                    ...item,
                    location: 
                    item.location.split(":")[1],
                }));
            },
            transformItems2(items) {
                return items.filter(item => item.label !== 'CAN Canada' && item.label !== 'USA United States');
            },
          
            transformItems3(items) {
                return items.filter(item => item.label !== 'Diagnosis Not Listed');
            
            },
            transformItems4(items) {
                items = items.filter(item => item.label === 'USA United States' || item.label === 'CAN Canada');
                return items.map(item => ({
                    ...item,
                    label: 
                        item.label.slice(4,20),

                }));
            },
        },
        directives: {
            ClickOutside
          }
    };
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
</style>


<style>
.ais-Highlight-highlighted {
  background: rgb(243, 237, 255) !important;
  background-color: rgb(243, 237, 255) !important;

}

.ais-ClearRefinements-button[disabled] {
  color:gray;
}

.mark .ais-Highlight-highlighted {
  background: rgb(243, 237, 255) !important;
  background-color: rgb(243, 237, 255) !important;

}

.ais-Highlight-highlighted, .ais-Snippet-highlighted {
  background: rgb(243, 237, 255) !important;
}


.ais-HierarchicalMenu-count {
  font-family:"AvenirNextLTW01-Medium", sans-serif;
  letter-spacing: 0;
}
  .searchshadow {
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.2);
  }

  .avenirmedium {
    font-family:"AvenirNextLTW01-Medium", sans-serif;
  }

  .ais-RefinementList-count {
    display:none;
  }

  .titlegray {
    color: #262626;
  }
  .active {
    display:none;
  }
  .nobordertop {
    border-top: none !important;
    padding-top:.5rem !important;
    padding-bottom:.5rem !important;
  }

  .decreasedpb {
    padding-bottom: 1rem !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .foo-hover {
         color: red !important;
       }

       .arrow_box {
        position: relative;
        background: #4544e2;
        border: 1px solid #fff;
       }
       .arrow_box:after, .arrow_box:before {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
       }

       .arrow_box:after {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #4544e2;
        border-width: 10px;
        margin-left: -10px;
       }
       .arrow_box:before {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #4544e2;
        border-width: 11px;
        margin-left: -11px;
       }

       .accentpurple {
        color: #5b25b2;
       }

       .refinementlistbutton {
        --lns-unit: 0.5rem;
        --lns-fontSize-small: calc(1.5 * var(--lns-unit, 8px));
        --lns-lineHeight-small: 1.5;
        --lns-fontSize-medium: calc(1.75 * var(--lns-unit, 8px));
        --lns-lineHeight-medium: 1.58;
        --lns-fontSize-large: calc(2.25 * var(--lns-unit, 8px));
        --lns-lineHeight-large: 1.56;
        --lns-fontSize-xlarge: calc(2.8 * var(--lns-unit, 8px));
        --lns-lineHeight-xlarge: 1.43;
        --lns-fontSize-xxlarge: calc(4 * var(--lns-unit, 8px));
        --lns-lineHeight-xxlarge: 1.2;
        --lns-fontWeight-normal: 400;
        --lns-fontWeight-semiBold: 600;
        --lns-radius-medium: 4px;
        --lns-radius-large: 8px;
        --lns-shadow-small: 0 1px 4px hsla(0,0%,0%,0.15);
        --lns-shadow-medium: 0 1px 4px hsla(0,0%,0%,0.1), 0 4px 16px hsla(0,0%,0%,0.07);
        --lns-shadow-large: 0 1px 4px hsla(0,0%,0%,0.07), 0 6px 24px hsla(0,0%,0%,0.1);
        --lns-space-xsmall: calc(0.5 * var(--lns-unit, 8px));
        --lns-space-small: calc(1 * var(--lns-unit, 8px));
        --lns-space-medium: calc(2 * var(--lns-unit, 8px));
        --lns-space-large: calc(3 * var(--lns-unit, 8px));
        --lns-space-xlarge: calc(5 * var(--lns-unit, 8px));
        --lns-space-xxlarge: calc(8 * var(--lns-unit, 8px));
        --lns-color-purple: hsla(230,84%,63%,1);
        --lns-color-salmon: hsla(359,98%,68%,1);
        --lns-color-green: hsla(149,78%,53%,1);
        --lns-color-blue: hsla(201,100%,55%,1);
        --lns-color-red: hsla(356,86%,55%,1);
        --lns-color-yellow: hsla(40,100%,66%,1);
        --lns-color-grey8: hsla(230,11%,19%,1);
        --lns-color-grey7: hsla(230,10%,30%,1);
        --lns-color-grey6: hsla(230,9%,45%,1);
        --lns-color-grey5: hsla(230,8%,60%,1);
        --lns-color-grey4: hsla(230,7%,75%,1);
        --lns-color-grey3: hsla(230,7%,84%,1);
        --lns-color-grey2: hsla(230,7%,92%,1);
        --lns-color-grey1: hsla(230,7%,97%,1);
        --lns-color-white: hsla(230,7%,100%,1);
        --lns-themeLight-color-body: hsla(230,11%,19%,1);
        --lns-themeLight-color-bodyDimmed: hsla(230,40%,19%,0.6);
        --lns-themeLight-color-background: hsla(230,7%,100%,1);
        --lns-themeLight-color-backgroundHover: hsla(230,8%,92%,1);
        --lns-themeLight-color-backgroundActive: hsla(230,7%,84%,1);
        --lns-themeLight-color-overlay: hsla(230,7%,100%,1);
        --lns-themeLight-color-primary: hsla(230,84%,63%,1);
        --lns-themeLight-color-primaryHover: hsla(230,84%,53%,1);
        --lns-themeLight-color-primaryActive: hsla(230,84%,43%,1);
        --lns-themeLight-color-focusRing: hsla(230,84%,63%,0.5);
        --lns-themeLight-color-record: hsla(359,98%,68%,1);
        --lns-themeLight-color-recordHover: hsla(359,98%,58%,1);
        --lns-themeLight-color-recordActive: hsla(359,98%,48%,1);
        --lns-themeLight-color-border: hsla(230,9%,45%,0.2);
        --lns-themeLight-color-disabledContent: hsla(230,8%,60%,1);
        --lns-themeLight-color-disabledBackground: hsla(230,7%,92%,1);
        --lns-themeLight-color-backdrop: hsla(230,11%,19%,0.5);
        --lns-themeLight-color-formFieldBorder: hsla(230,7%,84%,1);
        --lns-themeLight-color-formFieldBackground: hsla(230,7%,100%,1);
        --lns-themeDark-color-body: hsla(230,7%,97%,1);
        --lns-themeDark-color-bodyDimmed: hsla(230,40%,97%,0.6);
        --lns-themeDark-color-background: hsla(230,11%,19%,1);
        --lns-themeDark-color-backgroundHover: hsla(230,11%,26%,1);
        --lns-themeDark-color-backgroundActive: hsla(230,11%,14%,1);
        --lns-themeDark-color-overlay: hsla(230,10%,30%,1);
        --lns-themeDark-color-primary: hsla(230,84%,63%,1);
        --lns-themeDark-color-primaryHover: hsla(230,84%,53%,1);
        --lns-themeDark-color-primaryActive: hsla(230,84%,43%,1);
        --lns-themeDark-color-focusRing: hsla(230,84%,63%,0.5);
        --lns-themeDark-color-record: hsla(359,98%,68%,1);
        --lns-themeDark-color-recordHover: hsla(359,98%,58%,1);
        --lns-themeDark-color-recordActive: hsla(359,98%,48%,1);
        --lns-themeDark-color-border: hsla(230,7%,75%,0.2);
        --lns-themeDark-color-disabledContent: hsla(230,8%,60%,1);
        --lns-themeDark-color-disabledBackground: hsla(230,10%,30%,1);
        --lns-themeDark-color-backdrop: hsla(230,11%,19%,0.5);
        --lns-themeDark-color-formFieldBorder: hsla(230,9%,45%,1);
        --lns-themeDark-color-formFieldBackground: hsla(230,11%,19%,1);
        --lns-color-body: var(--lns-themeLight-color-body);
        --lns-color-bodyDimmed: var(--lns-themeLight-color-bodyDimmed);
        --lns-color-background: var(--lns-themeLight-color-background);
        --lns-color-backgroundHover: var(--lns-themeLight-color-backgroundHover);
        --lns-color-backgroundActive: var(--lns-themeLight-color-backgroundActive);
        --lns-color-overlay: var(--lns-themeLight-color-overlay);
        --lns-color-primary: var(--lns-themeLight-color-primary);
        --lns-color-primaryHover: var(--lns-themeLight-color-primaryHover);
        --lns-color-primaryActive: var(--lns-themeLight-color-primaryActive);
        --lns-color-focusRing: var(--lns-themeLight-color-focusRing);
        --lns-color-record: var(--lns-themeLight-color-record);
        --lns-color-recordHover: var(--lns-themeLight-color-recordHover);
        --lns-color-recordActive: var(--lns-themeLight-color-recordActive);
        --lns-color-border: var(--lns-themeLight-color-border);
        --lns-color-disabledContent: var(--lns-themeLight-color-disabledContent);
        --lns-color-disabledBackground: var(--lns-themeLight-color-disabledBackground);
        --lns-color-backdrop: var(--lns-themeLight-color-backdrop);
        --lns-color-formFieldBorder: var(--lns-themeLight-color-formFieldBorder);
        --lns-color-formFieldBackground: var(--lns-themeLight-color-formFieldBackground);
        -webkit-font-smoothing: antialiased;
        --bg-opacity: 1;
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
        font-family: inherit;
        font-size: 100%;
        margin: 0;
        overflow: visible;
        text-transform: none;
        background-color: transparent;
        background-image: none;
        cursor: pointer;
        padding: 0;
        line-height: inherit;
        color: inherit;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        position: relative;
        width: 100% !important;
       }

</style>