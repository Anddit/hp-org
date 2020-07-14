<template>
    <div
        id="root"
        class="tracking-tight bg-gray-100"
        >
        <ais-instant-search
              id="app"
              :index-name="indexName"
              :search-client="searchClient"
              :routing="routing">
            <!--   <ais-configure
                  :disjunctive-facets-refinements.camel="{
                      states: ['USA United States'],
                     
                  }"
              /> -->
              <!--   <transition name="fade" class=" mx-auto  ">
              <div v-show="visible === 0"  class=" pt-8 px-4 sm:px-6 w-5/6 mx-auto   transition ease-in-out duration-150">
                        
                    <div class="relative  flex flex-col bg-primarylight border-primary rounded border-2 w-full  ">
                        <div class=" sm:block absolute top-0 right-0 pt-4 pr-12">
                              <button v-on:click="visible += 1" type="button" class="text-primary hover:text-gray-500 focus:outline-none focus:text-primary transition ease-in-out duration-150" aria-label="Close" >
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                              </button>
                            </div>
                        <div class="flex w-full   container mx-auto">
                            <div class="flex  flex-col lg:w-full w-5/6 lg:text-center mx-auto ">
                                <div class="flex flex-col mx-auto lg:align-middle lg:items-center">
                                    <div class="w-full lg:w-3/5 tracking-tight text-2xl lg:text-3xl leading-tight my-4 pt-6 lg:pt-3 t2  text-black">
                                        A curated directory of the best organizations in childhood cancer. <br>
                                        <p class="lg:text-base text-sm text-gray-700 t0 my-2 pt-2  mx-auto">
                                            a Coalition Against Childhood Cancer collaboration
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block h-48 h-full overflow-hidden w-full cac2 mx-auto items-end justify-center hover:no-underline no-underline">
                            <img
                                src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/Jess+and+Hero.png"
                                class="h-full w-auto mx-auto object-cover lg:-mt-20"
                                style="max-height: 20rem;" />
                        </div>
                    </div>
                   
                </div>
              </transition> -->
             
             <div id="menu" class="hidden lg:inline-flex w-full lg:pl-6 lg:pr-12  py-6 lg:justify-between ">

               <div>
                      <a
                          href=""
                          
                          class=" hidden lg:inline t2 mr-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                          &
                      </a>
                      <a
                          href="/hope-portal/"
                          
                          class="hidden lg:inline text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 t2">
                          Hope Portal
                      </a>
                     
                     </div>
                    
                           <nav class="flex space-x-4 text-center lg:space-x-10 t4 text-base">
                           
                               <a
                                   href="/hope-portal/"
                                   
                                   class="text-black hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                   Search
                               </a>
                               <!-- <a
                                   href="https://anddit.com/hope-portal/"
                                   target="_blank"
                                   class="text-black hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                   About
                               </a>
                               <a
                                   href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                                   target="_blank"
                                   class="text-black  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                   Help
                               </a> -->
                               <button
                                   @click="openslider = true"
                                 
                                   class="text-black hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                   About
                               </button>
                           </nav>
                         </div>
              <header
                  id="header"
                class="header pb-6 sm:pb-10">
                <div class="absolute lg:hidden  top-0 right-0 p-6" v-click-outside="hide">
                <div class="relative  lg:hidden inline-block text-left"  >
                  <div>
                    <button class="flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-gray-600" aria-label="Options" id="options-menu" aria-haspopup="true" aria-expanded="true" @click="isOn = !isOn">
                      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>

                  <!--
                    Dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
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
                        <!-- <a href="https://anddit.com/hope-portal/"
                            target="_blank" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">About</a>
                        <a href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                          target="_blank" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Help</a> -->
                        <a href="#" @click="openslider = true" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">About</a>
                        <!-- <form method="POST" action="#">
                          <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                            Sign out
                          </button>
                        </form> -->
                      </div>
                    </div>
                  </div>
                </transition>
                </div>
                </div>
                  
                      
                <div class="flex ">
                      <!-- <a
                        href="/hope-portal"
                        class="flex flex-row items-center">
                        <img
                              :src="'https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png'"
                              class="h-16 w-auto bg-white mb-4 py-2 px-1 rounded-lg opacity-75 mr-2"
                              alt="Hope Portal">
                      </a> -->
                      <img src="./images/JessHP2.png" class="md:hidden ">
                      <img src="./images/JessHP3.png" class="hidden md:flex md:h-56">
                </div>
                <div class="header-title pt-4 text-blue-900  text-xl lg:text-2xl leading-tight font-bold w-5/6 lg:w-2/5">
                    The Hope Portal is a curated directory of the best organizations in childhood cancer.
                </div>
                <p class="text-sm t1 pb-8 sm:pb-2 text-gray-500 pt-3 sm:mb-4 mb-8">
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
                          <img src="./images/JessHP.jpg" class=" w-full border border-gray-300 bg-white  ">
                          <div class="relative flex-1 px-4 sm:px-8">
                            <div class="text-black text-2xl flex flex-col w-full text-left pb-4">
                               <h2 class=" text-sm t2 text-gray-500">
                             ABOUT
                               </h2>
                              
                            <span class="text-2xl w-full leading-tight text-blue-900 t2 pt-2 tracking-tight ">The Hope Portal features the best organizations in childhood cancer. 
                            </span>
                              <div class="pt-3 inline-flex text-sm t1 text-gray-500 justify-between">
                                
                              <a class="mr-2" target="_blank" href="https://anddit.com/hope-portal/">
                                Learn more about Hope Portal
                              </a>
                              <span>
                                &#183;
                              </span>
                              <a target="_blank" href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/">
                                View Help Center
                              </a>
                              </div>
                           <!--  <div class="mx-auto items-center">
                              <button class="inline-flex items-center px-10 tracking-tight py-3  text-left my-5  t2 text-base text-indigo-600 bg-white border-indigo-600 border shadow-lg hover:shadow-2xl rounded-lg" >
                                                            
                                                              Get Started
                                                              <ChevronRightIcon class=" h-5 w-5 ml-2"/>

                                                            
                                                          </button>

                            </div> -->
                           <hr class="mb-8 mt-6"/>
                             <h2 class=" text-sm t2 mb-2 text-gray-500">
                            GET INVOLVED
                             </h2>
                            <div class="rounded bg-gray-100 shadow border-gray-300 hover:border-indigo-600 border p-3 hover:bg-white">
                             
                            <a href="" class=" text-gray-800 hover:text-blue-500 flex flex-row w-full items-center justify-between">
                           <div class="w-3/4 text-base t1 leading-tight py-2">
                             Embed the Hope Portal on your website, for free!
                                                        
                           </div>
                           <div class="text-right justify-right">
                             <ChevronRightIcon />
                           </div>
                            </a>
                            </div>
                             <div class="mt-3 rounded bg-gray-100 shadow border-gray-300 hover:border-indigo-600 border p-3 hover:bg-white">
                              
                             <a href="" class=" text-gray-800 hover:text-blue-500 flex flex-row w-full items-center justify-between">
                            <div class="w-3/4 text-base t1 leading-tight py-2">
                             <div class="text-indigo-600 t2 text-xs">
                               For Organizations
                             </div>
                             Sign up to create/claim your page!
                                                         
                            </div>
                            <div class="text-right justify-right">
                              <ChevronRightIcon />
                            </div>
                             </a>
                             </div>

                          
                            </div>

                            <!-- 
                            <div class="absolute inset-0 px-4 sm:px-6">
                              <div class="h-full border-2 border-dashed border-gray-200">
                               
                              </div>
                            </div> -->
                            <!-- /End replace -->
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                </div>
            </header>

              <main class="container px-3 ">
                <div class="container-wrapper md:w-1/4">
                    <section class="container-filters   lg:text-sm">
                          <div class="container-header">
                            
                            <h2 class="font-bold text-xl">
                                Filters
                            </h2>
                            <ais-clear-refinements data-layout="desktop" class="px-3 ">
                                  <template slot="resetLabel">
                                    <div class="clear-filters text-sm underline">
                                        Clear Filters
                                    </div>
                                  </template>
                            </ais-clear-refinements>
                            <ais-stats data-layout="mobile">
                                  <template
                                    slot="default"
                                    slot-scope="{ nbHits }">
                                    <span class="ais-Stats-text">
                                          <strong>
                                              {{ formatNumber(nbHits) }}
                                        </strong> results
                                    </span>
                                  </template>
                            </ais-stats>
                          </div>
                          <div class="container-body">
                            <ais-panel class="decreasedpb">
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

                          <button
                              @click="toggleActive2"
                            class="flex flex-row justify-between items-center  w-full my-1 relative rounded-lg ">
                              
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
                                                   
                                                    
                                                   <!--  <span v-else class="text-blue-500 t1">All States</span> -->

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
                                                   v-if="items.length > 0" class="text-gray-600 text-xs py-3">
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
                                  
                                    class="flex flex-row justify-between items-center  w-full my-1 relative rounded-lg ">
                                    
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
                                                              Select State
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
                                                    v-if="items.length > 0" class="text-xs text-gray-600 py-3">
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
                                    class="flex flex-row justify-between items-center  w-full my-1 relative rounded-lg ">
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
                                                  v-if="items.length > 0" class="text-xs text-gray-600 py-3">
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
                            class="container-filters-footer-button-wrapper"
                        >
                        <span slot="resetLabel">Clear filters</span>
                        </ais-clear-refinements>
                          <ais-stats class="container-filters-footer-button-wrapper">
                            <template
                                slot="default"
                                slot-scope="{ nbHits }">
                                  <button
                                    @click="closeFilters"
                                    class="button button-primary">
                                    Show {{ formatNumber(nbHits) }} results
                                  </button>
                            </template>
                          </ais-stats>
                    </footer>
                </div>

                <section class="container-results w-full md:px-16">
                      <header class="container-header container-options ">
                        <div class="flex flex-row w-full justify-between items-center">
                           <h2 class="font-bold text-xl text-indigo-600">
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
                             
            <!-- <ais-sort-by
              class="container-option text-sm"
              :items="[
                { value: 'production_organizations', label: 'Organizations' },
                // { value: 'instant_search_price_asc', label: 'Price ascending' },
                // { value: 'instant_search_price_desc', label: 'Price descending' },
              ]"
            /> -->
                             <!--    <ais-hits-per-page
                                    :items="[
                                        {
                                            label: '16 Organizations per page',
                                            value: 16,
                                            default: getSelectedHitsPerPageValue() === 16 || !getSelectedHitsPerPageValue(),
                                        },
                                        {
                                            label: '32 Organizations per page',
                                            value: 32,
                                            default: getSelectedHitsPerPageValue() === 32,
                                        },
                                        {
                                            label: '64 Organizations per page',
                                            value: 64,
                                            default: getSelectedHitsPerPageValue() === 64,
                                        },
                                    ]"
                                    class="container-option text-sm"
                                /> -->
                          
                        </div>
                      </header>

                      <div class="lg:hidden flex flex-row w-full mb-1 rounded justify-between items-center">
                       <div class="text-indigo-600 t2 w-1/4 text-base">
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
                              <a :href="'https://www.anddit.com/organizations/' + item.id">
                                  <article class="hit  lg:border-none rounded flex justify-between h-auto items-end lg:h-64 pb-2 mb-2 lg:py-0 flex-wrap-reverse bg-white w-full">
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
                                            class="flex h-56 mb-2 lg:mb-0 items-center border border-gray-300 w-full align-middle justify-center rounded bg-gray-100 opacity-75">
                                            <ImageIcon class="theme-teal h-10 w-auto"/>
                                        </div>
                                    </header>
                                  </article>
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

             <!--  <aside data-layout="mobile">
                <button
                    @click="openFilters"
                    class="filters-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewbox="0 0 16 14">
                        <path
                            d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
                            stroke="#fff"
                            stroke-width="1.29"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                      </svg>
                      Filters
                </button>
              </aside> -->
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
    import NoResults from './widgets/NoResults.vue';
    import { formatNumber } from './utils';
    import getRouting from './routing';
    import { AwardIcon, ImageIcon, ChevronDownIcon, InfoIcon, ChevronRightIcon } from "vue-feather-icons"
    import './Theme.css';
    import './App.css';
    import './App.mobile.css';
// import './widgets/PriceSlider.css';
import { mixin as clickaway } from 'vue-clickaway';
import ClickOutside from 'vue-click-outside';

    export default {

          components: {
    // ClearRefinements,
            NoResults,
            AwardIcon,
            ImageIcon,
            ChevronDownIcon,
            ChevronRightIcon,
            InfoIcon
         
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


  .ais-RefinementList-count {
    display:none;
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

</style>