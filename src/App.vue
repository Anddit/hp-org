<template>
    <div
        id="root"
        class="tracking-tight">
        <ais-instant-search
              id="app"
              index-name="production_organizations"
              :search-client="searchClient"
              :routing="routing">
              <div id="menu" class="border-b border-gray-200 bg-gray-200">
                <div class="relative border-b border-gray-200 bg-gray-100 t1">
                      <div class="mx-auto px-4 sm:px-6">
                          <div class="flex w-full justify-center items-center py-3 md:space-x-10">
                            <nav class="flex space-x-4 text-center md:space-x-10 t4 text-base">
                                <a
                                    href="https://anddit.com/hope-portal/"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                    About
                                </a>
                                <a
                                    href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                    Help
                                </a>
                                <a
                                    href="https://anddit.com/organizations/create"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                    Add My Organization
                                </a>
                            </nav>
                          </div>
                    </div>
                  </div>
            </div>
              <header
                  id="header"
                class="header">
                <div>
                      <a
                        href="/hope-portal"
                        class="flex flex-row items-center">
                        <img
                              :src="'https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png'"
                              class="h-20 w-auto bg-white mb-6 py-2 px-1 rounded-full mr-2"
                              alt="Hope Portal">
                      </a>
                </div>
                <p class="header-title mb-8 text-2xl leading-tight font-bold md:w-3/4 w-full lg:w-1/3">
                    The Hope Portal is a curated directory of the best organizations in childhood cancer.
                </p>
                <ais-search-box
                    placeholder="Search organizations...">
                    <template slot="submit-icon">
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
            </header>

              <main class="container">
                <div class="container-wrapper">
                    <section class="container-filters md:text-sm">
                          <div class="container-header">
                            <h2 class="font-bold text-xl">
                                Filters
                            </h2>
                            <ais-clear-refinements data-layout="desktop">
                                  <template slot="resetLabel">
                                    <div class="clear-filters text-sm">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="10"
                                            viewBox="0 0 11 11">
                                            <g
                                                fill="none"
                                                fill-rule="evenodd"
                                                opacity=".4">
                                                <path d="M0 0h11v11H0z">
                                                </path>
                                                <path
                                                    fill="#000"
                                                    fill-rule="nonzero"
                                                    d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z">
                                                </path>
                                            </g>
                                          </svg>
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
                            <ais-panel>
                                <template slot="header">
                                    Category
                                </template>
                                  <template slot="default">
                                    <ais-hierarchical-menu
                                        :attributes="[
                                            'hierarch.lvl0',
                                            'hierarch.lvl1'
                                        ]"
                                        :sort-by="['count:desc']"
                                        class=""
                                        :style="{ minHeight: '10rem' }"
                                    />
                                  </template>
                            </ais-panel>



        <!--   <ais-panel>
          <template slot="default">
            <ais-toggle-refinement
              attribute="states"
              label="Serves All United States"
              on="USA United States"
              class="mb-8"
            />
            <ais-toggle-refinement
              attribute="nationalcanada"
              label="Serves All United States"
              on="false"
              class="mb-8"
            />
            <ais-menu-select attribute="orgcountries">
              <template slot="defaultOption">
                 Select a Country
               </template>
              </ais-menu-select>
              <ais-refinement-list
              id="statefilters"
                attribute="states"
               :transformItems="transformItems4"
              
                />
          </template>
        </ais-panel> -->

         
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
                                            'hierarch.lvl1'
                                        ]"
                                        
                                          class="flex flex-row  w-full">
                                           <div
                                            slot-scope="{ items }"
                                            class="w-full">
                                            
                                              <div class="border border-gray-400 rounded-lg hover:bg-gray-100  py-3 px-3 flex flex-row justify-between w-full items-center"
                                              :style="{ backgroundColor: items.length === 0 ?  '' : '#ebf2fe' }"
                                              >

                                                <div class="t2 text-gray-800 ">State</div>
                                                <div v-if="items.length === 0" class="flex flex-row items-center">
                                                  <span class="text-blue-500 t1">All States</span>
                                                  <ChevronDownIcon class=" h-4 w-4 mx-1 text-gray-500 "/>
                                                </div>
                                             

                                            <ul v-else class="flex flex-row w-2/3 items-center">
                                                <li
                                                  v-for="item in items"
                                                  :key="item.attribute"
                                                  class="w-5/6">
                                                  <ul>
                                                      <li
                                                          v-for="refinement in item.refinements"
                                                          :key="[refinement.value]"
                                                          class="text-right text-blue-500 t1 text-sm tracking-tight leading-tight">
                                                          {{ refinement.value }}
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
                                        id="statefilters"
                                          attribute="states"
                                        searchable
                                        searchable-placeholder="Search States..."
                                        :limit="60"
                                       :sort-by="['isRefined', 'name:asc']"
                                        :transformItems="transformItems2"
                                        class="active rounded absolute bg-white z-20  w-full"
                                        
                                        >
                                         <div
                                             slot-scope="{
                                                items,
                                                isShowingMore,
                                                isFromSearch,
                                                canToggleShowMore,
                                                refine,
                                                createURL,
                                                toggleShowMore,
                                                searchForItems,
                                            }"

                                             class="bg-white w-full">
                                            <div class="h-56 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">
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
                                                 <ul class="bg-white px-3">
                                                       <li v-if="isFromSearch && !items.length">
                                                        No results for this search.
                                                    </li>
                                                       <li
                                                       v-for="item in items"
                                                       :key="item.value"
                                                       class="py-1">
                                                        <a
                                                            :href="createURL(item)"
                                                            :style="{ 
                                                              fontWeight: item.isRefined ?  'bold' : '',
                                                              color: item.isRefined ? '#1062ed':'' 
                                                            }"
                                                            @click.prevent="refine(item.value); toggleActive();">
                                                            <ais-highlight attribute="item" :hit="item"/>
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
                                            'hierarch.lvl1'
                                        ]"
                                          class="flex flex-row  w-full">
                                           <div
                                            slot-scope="{ items }"
                                            class="w-full">
                                            
                                              <div class="border border-gray-400 rounded-lg hover:bg-gray-100  py-3 px-3 flex flex-row justify-between w-full items-center"
                                              :style="{ backgroundColor: items.length === 0 ?  '' : '#ebf2fe' }"
                                              >

                                                <div class="t2 text-gray-800 ">Diagnosis</div>
                                                <div v-if="items.length === 0" class="flex flex-row items-center">
                                                  <span class="text-blue-500 t1">All Diagnoses</span>
                                                  <ChevronDownIcon class=" h-4 w-4 mx-1 text-gray-500 "/>
                                                </div>
                                             

                                            <ul v-else class="flex flex-row w-2/3 items-center">
                                                <li
                                                    v-for="item in items"
                                                    :key="item.attribute"
                                                    class="w-5/6">
                                                    <ul>
                                                        <li
                                                            v-for="refinement in item.refinements"
                                                            :key="[refinement.value]"
                                                            class="text-left text-blue-500 t1 text-sm tracking-tight leading-tight">
                                                            {{ refinement.value }}
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
                                       :sort-by="['isRefined', 'name:asc']"
                                        :transformItems="transformItems3"
                                        class="active rounded absolute bg-white z-10  w-full">
                                         <div
                                             slot-scope="{
                                                items,
                                                refine,
                                                createURL,
                                              
                                            }"
                                             class="bg-white w-full">
                                            <div class="h-56 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">
                                                <ul class="bg-white px-3">
                                                      
                                                       <li
                                                       v-for="item in items"
                                                       :key="item.value"
                                                       class="py-1">
                                                        <a
                                                            :href="createURL(item)"
                                                            :style="{ 
                                                              fontWeight: item.isRefined ?  'bold' : '',
                                                              color: item.isRefined ? '#1062ed':'' 
                                                            }"
                                                            @click.prevent="refine(item.value); togglediagnosesActive();">
                                                            <ais-highlight attribute="item" :hit="item"/>
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
         <!--  <clear-refinements
            class="container-filters-footer-button-wrapper"
            @click="closeFilters" 
            /> -->
                        <ais-clear-refinements
                            @click="closeFilters"
                            class="container-filters-footer-button-wrapper"
                        />
                          <ais-stats class="container-filters-footer-button-wrapper">
                            <template
                                slot="default"
                                slot-scope="{ nbHits }">
                                  <button
                                    @click="closeFilters"
                                    class="button button-primary">
                                    See {{ formatNumber(nbHits) }} results
                                  </button>
                            </template>
                          </ais-stats>
                    </footer>
                </div>

                <section class="container-results md:px-12 px-3">
                      <header class="container-header container-options">
                        <div class="flex flex-row w-full justify-between items-center">
                            <ais-stats class="w-1/3 container-filters-footer-button-wrapper">
                                <template
                                    slot="default"
                                    slot-scope="{ nbHits }">
                                    <span class="text-sm">
                                        {{ formatNumber(nbHits) }} Organizations
                                    </span> 
                                </template>
                            </ais-stats>
                              <div class="flex flex-row items-center">
            <!-- <ais-sort-by
              class="container-option text-sm"
              :items="[
                { value: 'production_organizations', label: 'Organizations' },
                // { value: 'instant_search_price_asc', label: 'Price ascending' },
                // { value: 'instant_search_price_desc', label: 'Price descending' },
              ]"
            /> -->
                                <ais-hits-per-page
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
                                />
                            </div>
                        </div>
                      </header>

                      <ais-hits :transformItems="transformItems">
                        <div
                            slot="item"
                            slot-scope="{ item }"
                            class=" hover:border-b hover:border-blue-500 my-4 pb-4 border-b border-gray-300">
                              <a :href="'https://www.anddit.com/organizations/' + item.id">
                                  <article class="hit border border-gray-200 lg:border-none rounded flex justify-between h-auto items-end lg:h-64 pb-2 mb-2 lg:py-0 flex-wrap-reverse bg-white">
                                    <div class="w-full lg:w-1/2 px-3 lg:px-0 h-auto lg:h-64 tracking-tight">
                                        <div class="flex flex-row items-center w-full justify-between pb-2">
                                            <div class="flex flex-row items-start">
                                                <span
                                                    v-if="item.location"
                                                    class="uppercase text-xs text-gray-600">
                                                    {{ item.location|truncate(100) }}
                                                </span>
                                                <span v-else>
                                                </span>
                                            </div>
                                            <div
                                                v-if="item.cac2_approved"
                                                class="flex flex-row lg:w-1/6 items-center bg-orange-100 px-3">
                                                <img
                                                    src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                                                    class="h-5 w-5">
                                                <span class="text-xs py-2 ml-1 font-bold text-orange-500">
                                                    CAC2
                                                </span>
                                            </div>
                                        </div>
                                        <h1>
                                            <ais-highlight
                                                attribute="name"
                                                :hit="item"
                                                class="hover:text-blue-500 text-xl leading-tight tracking-tight text-blue-900 t2"
                                            />
                                        </h1>
                                        <p class="hit-description text-lg w-full pb-3 font-normal text-gray-600 mt-2 leading-normal">
                                            {{ item.mission|truncate(125) }}
                                        </p>
                                        <footer>
                                            <div
                                                v-if="item.known_for"
                                                class="flex flex-row py-3 w-full lg:w-3/4 items-start">
                                                <div class="h-full inline">
                                                    <AwardIcon class="inline text-indigo-600 mr-1 h-5 align-left text-xs" />
                                                </div>
                                                <div class="flex flex-row items-start w-full text-base">
                                                    <div class="h-full inline no-underline leading-tight tracking-tight text-indigo-600 text-base">
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

                        <div class="w-full my-16 md:my-24 text-center">
                              Listings do not constitute endorsements.
                        </div>
                      </footer>
                </section>
              </main>

              <aside data-layout="mobile">
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
              </aside>
        </ais-instant-search>
      </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-clickaway@2.2.2/dist/vue-clickaway.min.js"></script>
<script>
    import algoliasearch from 'algoliasearch/lite';
// import VueSlider from 'vue-slider-component';
    import cx from 'classnames';
// import ClearRefinements from './widgets/ClearRefinements.vue';
    import NoResults from './widgets/NoResults.vue';
    import { formatNumber } from './utils';
    import getRouting from './routing';
    import { AwardIcon, ImageIcon, ChevronDownIcon } from "vue-feather-icons"
    import './Theme.css';
    import './App.css';
    import './App.mobile.css';
// import './widgets/PriceSlider.css';
import { mixin as clickaway } from 'vue-clickaway';

    export default {
          components: {
    // ClearRefinements,
            NoResults,
            AwardIcon,
            ImageIcon,
            ChevronDownIcon,
         
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
            return {
                cx,
                searchClient: algoliasearch(
                    'F62MOPA7KR',
                    '85e52ff35b00c7ff5430ea1d182cb818'
                ),
                routing: getRouting({ indexName: 'production_organizations' })
            };
        },
        methods: {
            hoverActive() {
                document.querySelector("#statefilters").classList.remove("active");
            },
            hoverleaveActive() {
                document.querySelector("#statefilters").classList.add("active");
            },
            toggleActive() {
                document.querySelector("#statefilters").classList.toggle("active");
            },
            togglediagnosesActive() {
                document.querySelector("#diagnosisfilters").classList.toggle("active");
            },
            toggleaway1: function() {
                  document.querySelector("#statefilters").classList.add("active");
                },
            toggleaway2: function() {
                  document.querySelector("#diagnosisfilters").classList.add("active");
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
                return items.filter(item => item.label !== 'All Childhood Cancer' && item.label !== 'Diagnosis Not Listed');
            
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
    };
</script>

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

</style>