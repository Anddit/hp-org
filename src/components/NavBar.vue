<template>
  
<nav id="nav-bar" class="bg-white">
  <div  x-data="{ open1: false, open2: false, opencreatepost: false }" class="container mt-6 pt-3 bg-white  t4">
  <div class="flex  flex-row relative w-full ">
    <div class="flex flex-row justify-between  items-center w-full h-12  md:h-20">
          <div class="flex  md:w-1/4 px-2 lg:px-0">
             <div class="flex items-center mr-2">
                       <button class="inline-block h-12 w-12 rounded overflow-hidden  bg-gray-100 text-blue-500 text-base">& </button>
                     </div>
              
            </div>
            <div class="md:max-w-xl flex-grow">
        <search-bar />
      </div>
           
      <div class="">
     
      <div class="flex ml-2 ">
        <button x-on:click="open1= !open1" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{'hidden': open1, 'inline-flex': !open1 }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{'hidden': !open1, 'inline-flex': open1 }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    
    
  
  <div x-show="open1" class="absolute shadow-lg z-50 origin-top-left mt-4 right-0 bg-white md:w-1/3 w-full" x-on:click.away="open1 = false">
    <div class="pt-2 pb-3">
      <div class="flex items-center pr-4 pl-3 py-3">
        <div class="flex-shrink-0">
          <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </div>
        <div class="ml-3">
          <div class="text-base t2 font-medium leading-6 text-gray-800">Tom Cook</div>
          <div class="text-sm font-medium leading-5 text-gray-500">tom@example.com</div>
        </div>
      </div>
      <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition duration-150 ease-in-out">Home</a>
      <a href="#" class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Search</a>
      <a href="#" class="my-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">My Profile</a>
      <div class="flex items-center  pr-4 pl-3 pt-4 pb-3">
             <div class="flex-shrink-0">
               <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                 <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                 </svg>
               </span>
             </div>
             <div class="ml-3">
               <div class="text-base t2 font-medium leading-6 text-gray-800">Organization Name</div>
               
             </div>
           </div>


      
        <div class="mt-1">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Organization Page</a>
          <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Edit Page</a>
          
        </div>
        <div class="pt-4 pb-3">
        
          <div class="mt-3">
            <a href="#" class="block px-4 py-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">About</a>
            <a href="#" class="mt-1 block px-4 py-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Help Center</a>
            <a href="#" class="mt-1 block px-4 py-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Contact</a>
            <a href="#" class="mt-1 block px-4 py-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Sign out</a>
          </div>
        </div>
     
     
      
      

    
   <!--  <div class=" flex mt-2">
    
        <span class="ml-3 w-full rounded-md">
          <button type="button" class="inline-flex w-full items-center text-center  py-2.5 border border-transparent text-sm leading-5 justify-center rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Add New Resource
          </button>
        </span>
      </div> -->
    
    </div>

   
  
  </div> 
  </div>
 </div>
  </div>
  </div>

  
</nav>
</template>

<script>

import SearchBar from './SearchBar.vue';

export default {
  name: "nav-bar",
  components: {
    SearchBar,
  }

};
</script>

<style scoped>
  .hidden {
    display:none;
  }
</style>