<template>
    <div class="w-full items-center">
      <ais-instant-search
           
            :index-name="indexName"
            :search-client="searchClient"
          class="bg-white"
            >
            <ais-configure
                :hitsPerPage="5"
                :query="query"
            />
            <ais-autocomplete
                :indices="[
                    {
                        label: 'Tags',
                        value: indexSubcategories
                    },
                ]">
                <div
                    slot-scope="{ currentRefinement, indices, refine }"
                    class="relative items-center">
                    <SearchIcon
                        class="absolute text-gray-700 h-4 my-auto"
                        style="left:16px; top: 12px;" /> 
                    <input
                        @input="refine($event.currentTarget.value)"
                        type="search"
                        :value="currentRefinement"
                        placeholder="Search Organizations..."
                        class="w-full pl-12 pr-4 py-2 bg-white rounded-full border border-gray-300 text-base shadow outline-none"
                    >
                    <div v-on-clickaway="toggleSearchboxresults">
                    <div
                        
                        id="searchboxresults"
                        v-if="currentRefinement" 
                        class="border border-gray-300 mt-1 absolute z-10 w-full bg-white">
                        <ul
                            v-for="index in indices"
                            :key="index.label"
                            class="bg-white px-3 py-3 mt-1 text-base">
                            <li>
                                <div
                                    v-if="index.label != 'Tags'"
                                    class="my-2 text-sm t2 text-gray-700">
                                    Organizations
                                </div>
                                <div
                                    v-if="index.label === 'Tags'"
                                    class="my-2">
                                    {{index.label}}
                                </div>
                                <ul v-if="index.label != 'Tags'">
                                    <li
                                        v-for="hit in index.hits"
                                        :key="hit.id"
                                        class="my-2">

                                        <div>
                                            <a
                                                :href="'/organizations/' + hit.id">
                                                <ais-highlight
                                                    attribute="name"
                                                    :hit="hit"
                                                    class="text-base hover:underline  my-2"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <ul v-if="index.label === 'Tags'">
                                    <li
                                        v-for="hit in index.hits"
                                        :key="hit.objectID">
                                        <div>
                                            <a :href="'/hope-portal/location/any/category/' + hit.slug">
                                                <ais-highlight
                                                    attribute="name"
                                                    :hit="hit"
                                                    class="text-sm hover:underline text-primary"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </ais-autocomplete>
        </ais-instant-search>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-clickaway@2.2.2/dist/vue-clickaway.min.js"></script>

<script>
    import algoliasearch from 'algoliasearch/lite';
    import getRouting from '../routing';
    import { SearchIcon } from 'vue-feather-icons';
    import { mixin as clickaway } from 'vue-clickaway';
    
    export default {
        name:"search-bar",

        components: {
            SearchIcon
        },

        mixins: [ clickaway ],
         template: '<p v-on-clickaway="away">Click away</p>',
    
        data () {
            return {
               searchClient: algoliasearch(
                    'F62MOPA7KR',
                    '85e52ff35b00c7ff5430ea1d182cb818'
                ),
                indexName: 'production_organizations',
                routing: getRouting({ indexName: 'production_organizations' }),
                query: '',
                currentRefinement:'',
            };
        },
        methods: {
           
            toggleSearchboxresults() {
                document.querySelector("#searchboxresults").classList.toggle("active");
            },
        }
    };
</script>

<style scoped>
    .active {
      display:none;
    }
</style>