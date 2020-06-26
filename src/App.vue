<template>
  <div id="root" class="tracking-tight">
    <ais-instant-search
      :search-client="searchClient"
      index-name="development_organizations"
      :routing="routing"
      id="app"
    >
     <!--  <ais-configure
     
      /> -->
      <div class="border-b border-gray-200 bg-gray-200">
      <div class="relative border-b border-gray-200 bg-gray-100 t1 ">
        <div class=" mx-auto px-4 sm:px-6">
          <div
            class="flex w-full justify-center items-center py-3  md:space-x-10"
          >
       
       
            <nav class="flex space-x-4 text-center md:space-x-10 t4 text-base">
             
              <a
                href="https://anddit.com/hope-portal/"
                target="_blank"
                class=" text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                About
              </a>
              <a
                href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                target="_blank"
                class=" text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Help
              </a>
              <a
                href="https://anddit.com/organizations/create"
                target="_blank"
                class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Add My Organization
              </a>
            </nav>
          </div>
        </div>
      </div>
     
        </div>

      <header class="header" id="header">
       <!--  <p class="header-logo ">
          The Hope Portal
        </p> -->

        <div class="">
          <a class="flex flex-row items-center" href="/hope-portal">
            <img
              :src="'https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png'"
              class="h-20 w-auto bg-white mb-6 py-2 px-1 rounded-full mr-2"
              alt="Hope Portal"
            />
          </a>
        </div>
        
        <p class="header-title mb-8 text-2xl leading-tight font-bold md:w-3/4 w-full lg:w-1/3">The Hope Portal is a curated directory of the best organizations in childhood cancer.</p>

        <ais-search-box
          placeholder="Search organizations..."
        >
          <template slot="submit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              width="16"
              height="16"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.67"
                transform="translate(1 1)"
              >
                <circle cx="7.11" cy="7.11" r="7.11"></circle>
                <path d="M16 16l-3.87-3.87"></path>
              </g>
            </svg>
          </template>
        </ais-search-box>
      </header>
      
      <main class="container">
        <div class="container-wrapper">
        <section class="container-filters text-sm">
          <div class="container-header">
            <h2 class="font-bold text-xl">Filters</h2>
           <!--  :included-attributes="[
            'hierarch.lvl0',
            'hierarch.lvl1',
            'states',
            'diagnoses'
            ]"> -->
            <ais-clear-refinements data-layout="desktop">   
          
              <template slot="resetLabel">
                <div class="clear-filters text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 11 11"
                  >
                    <g fill="none" fill-rule="evenodd" opacity=".4">
                      <path d="M0 0h11v11H0z"></path>
                      <path
                        fill="#000"
                        fill-rule="nonzero"
                        d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                      ></path>
                    </g>
                  </svg>
                  Clear filters
                </div>
              </template>
            </ais-clear-refinements>

            <ais-stats data-layout="mobile">
              <template slot="default" slot-scope="{ nbHits }">
                <span class="ais-Stats-text">
                  <strong>{{ formatNumber(nbHits) }}</strong> results
                </span>
              </template>
            </ais-stats>
          </div>

          <div class="container-body">
            <ais-panel>
              <template slot="header">Category</template>

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

         
            <ais-panel class="flex flex-col w-full relative">

              <template slot="header">Location</template>
         
            <button @click="toggleActive" class="flex flex-row justify-between items-center w-full shadow relative rounded-lg border border-gray-200">
                         
                         <ais-current-refinements :included-attributes="states" :excluded-attributes="[
                         'diagnoses',
                         'hierarch.lvl0',
                         'hierarch.lvl1'
                         ]" 
                         class="flex flex-row w-full">
                           <div slot-scope="{ items }" class="w-full">
                            <div v-if="items.length === 0" class="bg-white py-3 px-2 flex flex-row w-full">
                              All States
                            </div>
                            <ul class="bg-blue-100 w-full flex flex-wrap">

                             <li v-for="item in items" :key="item.attribute" class=" p-3 flex flex-wrap w-full">
                               
                                 <ul>
                                   <li
                                     v-for="refinement in item.refinements"
                                     :key="[refinement.value]"
                                     class="text-blue-500 t2 flex"
                                   >
                       
                                    
                                       {{ refinement.value }}
                                    

                                   </li>
                                     </ul>
                                   
                                 </li>
                               </ul>
                             </div>

                          

                         </ais-current-refinements>
                         <ChevronDownIcon class="h-5 w-5 mr-3 text-blue-500 absolute right-0"/>
                         
                         </button>
                         
                       <!--   <a
                           :href="createURL(refinement)"
                          >
                           {{ refinement.value }}
                         </a> -->
<!--                          @click.prevent="item.refine(refinement)"
 -->
              <template slot="default" >

                     <ais-refinement-list
                     attribute="states"
                     searchable
                     :limit="60"
                     :sort-by="['name:asc']"
                     searchable-placeholder="Search states..."
                     :transformItems="transformItems2"
                     id="statefilters"
                     class="active rounded absolute bg-white z-20"
                    
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
                         class="bg-white w-full"
                       >

                    <div 
                     class="h-56 p-3 flex flex-col w-full overflow-y-auto shadow-lg border border-gray-300 rounded bg-white">
                        <div class="ais-RefinementList-searchBox"><form action="" role="search" novalidate="novalidate" class="ais-SearchBox-form"><input @input="searchForItems($event.currentTarget.value)" type="search" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" required="required" maxlength="512" aria-label="Search" placeholder="Search states..." class="ais-SearchBox-input"> <button type="submit" title="Search" class="ais-SearchBox-submit"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40" class="ais-SearchBox-submitIcon"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" fillRule="evenodd"></path></svg></button> <button type="reset" title="Clear" hidden="hidden" class="ais-SearchBox-reset"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" class="ais-SearchBox-resetIcon"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" fillRule="evenodd"></path></svg></button></form></div>
                         <ul class=" bg-white">
                           <li v-if="isFromSearch && !items.length">No results for this search.</li>
                           <li v-for="item in items" :key="item.value" class="py-1 " >
                             <a
                               :href="createURL(item)"
                               :style="{ fontWeight: item.isRefined ?  'bold' : '' }"
                               @click.prevent="refine(item.value); toggleActive();"
                             >
                               <ais-highlight attribute="item" :hit="item"/>
                              
                             </a>
                           </li>
                         </ul>
                       <span slot="noResults" slot-scope="{ query }">No results for
                           <q>{{ query }}</q>
                         </span>
                       </div>

                       </div>

                     </ais-refinement-list>
            </template>

            


            </ais-panel>
           

            <ais-panel>
              <template slot="header">Diagnosis</template>
              <template slot="default">
                <ais-toggle-refinement
                  attribute="diagnoses"
                  label="Serves All Childhood Cancer"
                  on="All Childhood Cancer"
                  class="mb-8"
                />
              </template>

              <template slot="default">
                <ais-refinement-list
                  attribute="diagnoses"
                  searchable
                  searchablePlaceholder="Search all diagnoses..."
                  :transformItems="transformItems3"
                  :sort-by="['isRefined','name:asc']"
                  :limit="5"
                  show-more
                  :show-more-limit='25'
                />
              </template>
            </ais-panel>

                  
          </div>
        </section>

        <footer class="container-filters-footer" data-layout="mobile">
         <!--  <clear-refinements
            class="container-filters-footer-button-wrapper"
            @click="closeFilters" 
            /> -->

            <ais-clear-refinements @click="closeFilters" class="container-filters-footer-button-wrapper"/>

          <ais-stats
            class="container-filters-footer-button-wrapper"
          >
            <template slot="default" slot-scope="{ nbHits }">
              <button class="button button-primary" @click="closeFilters">
                See {{ formatNumber(nbHits) }} results
              </button>
            </template>
          </ais-stats>
        </footer>



         
        </div>

        <section class="container-results">
          <header class="container-header container-options">

            <div class="flex flex-row w-full pl-4 justify-between items-center">
            <ais-stats
              class="w-1/3 container-filters-footer-button-wrapper"
            >
              <template slot="default" slot-scope="{ nbHits }">
               
                <span class="text-sm">Showing {{ formatNumber(nbHits) }} results</span> 
               
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
              class="container-option text-sm"
              :items="[
                {
                  label: '16 hits per page',
                  value: 16,
                  default: getSelectedHitsPerPageValue() === 16 || !getSelectedHitsPerPageValue(),
                },
                {
                  label: '32 hits per page',
                  value: 32,
                  default: getSelectedHitsPerPageValue() === 32,
                },
                {
                  label: '64 hits per page',
                  value: 64,
                  default: getSelectedHitsPerPageValue() === 64,
                },
              ]"
            />
            </div>
            </div>
          </header>

          <ais-hits  :transformItems="transformItems" class="">
            <div slot="item" slot-scope="{ item }" class="hover:shadow-lg hover:border-b hover:border-blue-500 pl-4 my-4 pb-4 border-b border-gray-300">
              <a :href="'https://www.anddit.com/organizations/' + item.id" class="">
              <article class="hit border border-gray-200 lg:border-none rounded  flex justify-between h-auto items-end lg:h-64 pb-2 mb-2 lg:py-0 flex-wrap-reverse bg-white " >
                

                <div class="w-full lg:w-1/2 px-3 lg:px-0 h-auto   lg:h-64  tracking-tight">
                <div class="flex flex-row items-center w-full justify-between pb-2">
                <div class="flex flex-row items-start">
                 <!--  <MapPinIcon class="text-gray-500 h-4 w-5 mr-1"/> -->
                  <span v-if="item.location" class="uppercase text-xs  text-gray-600">
                  {{ item.location|truncate(100)}}</span>
                  <span v-else> </span>
                </div>
                <div class="flex flex-row lg:w-1/6 items-center bg-orange-100 px-3" v-if="item.cac2_approved">
                  <img src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                                              class="h-5 w-5"
                                             
                                            />
                  <span  class="text-xs py-2 ml-1 font-bold text-orange-500">CAC2</span>
                  
                </div>
                </div>
                  <h1 class="">
                    <ais-highlight attribute="name" class="hover:text-blue-500 text-xl leading-tight tracking-tight text-blue-900 t2" :hit="item"/>
                
                  </h1>
                 
                  <p class="hit-description text-lg w-full  pb-3 font-normal text-gray-600 mt-2 leading-normal">
                    {{ item.mission|truncate(150) }}
                  </p>
                  <footer>
                  
                     <div  v-if="item.known_for" class="flex flex-row py-3  w-3/4 items-start">
                         <div class="h-full inline">
                           <AwardIcon class="inline text-indigo-600 mr-1 h-5  align-left text-xs" />
                         </div>
                         <div
                          
                           class="flex flex-row items-start w-full  text-base "
                         >
                           

                           <div
                             class=" h-full inline  no-underline leading-tight tracking-tight  text-indigo-600 text-base"
                           >
                             {{ item.known_for | truncate(100) }}
                           </div>
                           
                         </div>
                       </div>
                  </footer>
                </div>
                <header class="w-full lg:w-2/5 h-auto lg:h-64 items-start ">
                  <img v-if="item.image_path" :src="item.image_path" :alt="item.name" class="pb-2 lg:pb-0 max-h-full  w-full rounded object-contain ">
                  <div v-else class="flex h-56 mb-2 lg:mb-0 items-center border border-gray-300  w-full align-middle justify-center rounded bg-gray-100 opacity-75">
                    <ImageIcon class="theme-teal h-10 w-auto "/>
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
                class="ais-Pagination"
              >
                <ul class="ais-Pagination-list">
                  <li
                    class="ais-Pagination-item ais-Pagination-item--previousPage ais-Pagination-item--disabled"
                    v-if="isFirstPage"
                  >
                    <span class="ais-Pagination-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        width="10"
                        height="10"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.143"
                        >
                          <path d="M9 5H1M5 9L1 5l4-4"></path>
                        </g>
                      </svg>
                    </span>
                  </li>

                  <li
                    class="ais-Pagination-item ais-Pagination-item--previousPage"
                    v-if="!isFirstPage"
                  >
                    <a
                      class="ais-Pagination-link"
                      :href="createURL(currentRefinement - 1)"
                      @click.prevent="refine(currentRefinement - 1)"
                      aria-label="Previous"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        width="10"
                        height="10"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.143"
                        >
                          <path d="M9 5H1M5 9L1 5l4-4"></path>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li
                    :class="cx('ais-Pagination-item', 'ais-Pagination-item--page', {
                      'ais-Pagination-item--selected': page === currentRefinement
                    })"
                    v-for="page in pages"
                    :key="page"
                  >
                    <a
                      class="ais-Pagination-link"
                      :href="createURL(page)"
                      :style="{ fontWeight: page === currentRefinement ? 'bold' : '' }"
                      @click.prevent="refine(page)"
                    >{{ page + 1 }}</a>
                  </li>

                  <li class="ais-Pagination-item ais-Pagination-item--nextPage" v-if="!isLastPage">
                    <a
                      class="ais-Pagination-link"
                      :href="createURL(currentRefinement + 1)"
                      @click.prevent="refine(currentRefinement + 1)"
                      aria-label="Next"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        width="10"
                        height="10"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.143"
                        >
                          <path d="M1 5h8M5 9l4-4-4-4"></path>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li
                    class="ais-Pagination-item ais-Pagination-item--nextPage ais-Pagination-item--disabled"
                    v-if="isLastPage"
                  >
                    <span class="ais-Pagination-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        width="10"
                        height="10"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.143"
                        >
                          <path d="M1 5h8M5 9l4-4-4-4"></path>
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
        <button class="filters-button" @click="openFilters">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 14">
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

export default {
  components: {
    // ClearRefinements,
    NoResults,
    AwardIcon,
    ImageIcon,
    ChevronDownIcon
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
  created() {
    this.onKeyUp = event => {
      if (event.key !== 'Escape') {
        return;
      }
      this.closeFilters();
    }

    this.onClick = event => {
      if (event.target !== this.header) {
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
      routing: getRouting({ indexName: 'development_organizations' })
    };
  },
  methods: {
    toggleActive() {
         document.querySelector("#statefilters").classList.toggle("active");
       },
     togglecountriesActive() {
          document.querySelector("#countryfilters").classList.toggle("active");
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
  
</style>
