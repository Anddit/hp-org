import { history as historyRouter } from 'instantsearch.js/es/lib/routers';


const hitsPerPageItemsValue = [16, 32, 64];

function getFallbackHitsPerPageRoutingValue(hitsPerPageValue) {
  if (hitsPerPageItemsValue.indexOf(Number(hitsPerPageValue)) !== -1) {
    return hitsPerPageValue;
  }

  return undefined;
}

const sortByItemsValue = [
  'production_organizations'
];

function getFallbackSortByRoutingValue(sortByValue) {
  if (sortByItemsValue.indexOf(sortByValue) !== -1) {
    return sortByValue;
  }

  return undefined;
}

// function getFallbackRatingsRoutingValue(value) {
//   const ratingValue = Number(value);

//   if (ratingValue >= 1 && ratingValue <= 4) {
//     return value;
//   }

//   return undefined;
// }

const routeStateDefaultValues = {
  query: '',
  page: '1',
  states: undefined,
  category: undefined,
  diagnoses: undefined,
  // rating: '',
  // price: '',
  // nationalus: 'false',
  // nationalcanada: 'false',
  // allchildhoodcancer: 'false',
  // free_shipping: 'false',
  sortBy: 'production_organizations',
  hitsPerPage: '20',
};

// const encodedCategories = {
//   Cameras: 'Cameras & Camcorders',
//   Cars: 'Car Electronics & GPS',
//   Phones: 'Cell Phones',
//   TV: 'TV & Home Theater',
// };

  const encodedStates = {
    USA: 'USA United States',
    Canada: 'CAN Canada',
    DC: 'District of Columbia'
    
  };

  const decodedStates = Object.keys(encodedStates).reduce((acc, key) => {
    const newKey = encodedStates[key];
    const newValue = key;

    return {
      ...acc,
      [newKey]: newValue
    };
  }, {});

function getStateSlug(name) {
  const encodedName = decodedStates[name] || name;

  return encodedName
    .split(' ')
    .map(encodeURIComponent)
    .join('-');
}

function getStateName(slug) {
  const decodedSlug = encodedStates[slug] || slug;

  return decodedSlug
    .split('-')
    .map(decodeURIComponent)
    .join(' ');
}


// const encodedCategories = {
//   Wishes: 'Wishes & Gifts',
//   Travel: 'Travel for Treatment'
// };

// const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
//   const newKey = encodedCategories[key];
//   const newValue = key;

//   return {
//     ...acc,
//     [newKey]: newValue,
//   };
// }, {});

// Returns a slug from the category name.
// Spaces are replaced by "+" to make
// the URL easier to read and other
// characters are encoded.
// function getCategorySlug(name) {
//   const encodedName = decodedCategories[name] || name;

//   return encodedName
//     .split(' ')
//     .map(encodeURIComponent)
//     .join('+');
// }

// Returns a name from the category slug.
// The "+" are replaced by spaces and other
// characters are decoded.
// function getCategoryName(slug) {
//   const decodedSlug = encodedCategories[slug] || slug;

//   return decodedSlug
//     .split('+')
//     .map(decodeURIComponent)
//     .join(' ');
// }

// const originalWindowTitle = document.title;

const router = historyRouter({
  // windowTitle({ routeState }) {
                            
  //                if(routeState.states){
  //                                           return `Childhood Cancer Organizations | ${
  //                                             routeState.states}`;
  //                                         }
  //                                         return 'Childhood Cancer Organizations';
  //                                         },

  createURL({ qsModule, routeState, location }) {
    // const urlParts = location.href.match(/^(.*?)\/location/);
    // let baseUrl = `${urlParts ? urlParts[1] : ''}/`;

    const { protocol, hostname, port = '', pathname, hash } = location;
        const portWithPrefix = port === '' ? '' : `:${port}`;
        const urlParts = location.href.match(/^(.*?)\/search/);
        const baseUrl =
          (urlParts && urlParts[0]) ||
          `${protocol}//${hostname}${portWithPrefix}${pathname}search`;

    // const categoryPath = routeState.category
    //   ? `${getCategorySlug(routeState.category)}/`
    //   : 'all';

      const statePath = routeState.states
          ? `${getStateSlug(routeState.states)}/`
          : 'all';

    const queryParameters = {};

    if (
      routeState.query &&
      routeState.query !== routeStateDefaultValues.query
    ) {
      queryParameters.query = encodeURIComponent(routeState.query);
    }
    if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
      queryParameters.page = routeState.page;
    }
    // if (
    //   routeState.states &&
    //   routeState.states !== routeStateDefaultValues.states
    // ) {
    //   queryParameters.states = routeState.states.map(encodeURIComponent);
    // }



    if (
      routeState.diagnoses &&
      routeState.diagnoses !== routeStateDefaultValues.diagnoses
    ) {
      queryParameters.diagnoses = routeState.diagnoses.map(encodeURIComponent);
    }

    if (
      routeState.category &&
      routeState.category !== routeStateDefaultValues.category
    ) {
      queryParameters.category = routeState.category.map(encodeURIComponent);
    }

    // if (
    //   routeState.rating &&
    //   routeState.rating !== routeStateDefaultValues.rating
    // ) {
    //   queryParameters.rating = routeState.rating;
    // }
    // if (
    //   routeState.price &&
    //   routeState.price !== routeStateDefaultValues.price
    // ) {
    //   queryParameters.price = routeState.price;
    // }
    // if (
    //   routeState.nationalus &&
    //   routeState.nationalus !== routeStateDefaultValues.nationalus
    // ) {
    //   queryParameters.nationalus = routeState.nationalus;
    // }
    // if (
    //   routeState.nationalcanada &&
    //   routeState.nationalcanada !== routeStateDefaultValues.nationalcanada
    // ) {
    //   queryParameters.nationalcanada = routeState.nationalcanada;
    // }
    // if (
    //   routeState.allchildhoodcancer &&
    //   routeState.allchildhoodcancer !== routeStateDefaultValues.allchildhoodcancer
    // ) {
    //   queryParameters.allchildhoodcancer = routeState.allchildhoodcancer;
    // }
    if (
      routeState.sortBy &&
      routeState.sortBy !== routeStateDefaultValues.sortBy
    ) {
      queryParameters.sortBy = routeState.sortBy;
    }
    if (
      routeState.hitsPerPage &&
      routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage
    ) {
      queryParameters.hitsPerPage = routeState.hitsPerPage;
    }

    const queryString = qsModule.stringify(queryParameters, {
      addQueryPrefix: true,
      arrayFormat: 'repeat',
    });

    // return `${baseUrl}location/${statePath}category/${categoryPath}${queryString}`;
    return `${baseUrl}/${statePath}${queryString}${hash}`;
  },

  parseURL({ qsModule, location }) {
   
    // const pathnameMatches = location.pathname.match(/location\/(.*?)\/category\/(.*?)\/?$/);
  
  const pathnameMatches = location.pathname.match(/search\/(.*?)\/?$/);

    const states = getStateName(
            (pathnameMatches && pathnameMatches[1]) || ''
          );

    // const category = getCategoryName(
    //   (pathnameMatches && pathnameMatches[2]) || ''
    // );
    const queryParameters = qsModule.parse(location.search.slice(1));
    const {
      query = '',
      page = 1,
      // states = [],
      diagnoses = [],
      category = [],
      // price,
      // nationalus,
      // nationalcanada,
      // allchildhoodcancer,
      // free_shipping,
    } = queryParameters;
    // `qs` does not return an array when there's a single value.
    // const allStates = Array.isArray(states) ? states : [states].filter(Boolean);
    const allDiagnoses = Array.isArray(diagnoses) ? diagnoses : [diagnoses].filter(Boolean);
    const allCategory = Array.isArray(category) ? category : [category].filter(Boolean);
    const hitsPerPage = getFallbackHitsPerPageRoutingValue(
      queryParameters.hitsPerPage
    );
    const sortBy = getFallbackSortByRoutingValue(queryParameters.sortBy);
    // const rating = getFallbackRatingsRoutingValue(queryParameters.rating);

    return {
      query: decodeURIComponent(query),
      page,
      // states: allStates.map(decodeURIComponent),
      states,
      diagnoses: allDiagnoses.map(decodeURIComponent),
      // category,
      category: allCategory.map(decodeURIComponent),
      // rating,
      // price,
      // nationalus,
      // nationalcanada,
      // allchildhoodcancer,
      // free_shipping,
      sortBy,
      hitsPerPage,

    };
  },
});

const getStateMapping = ({ indexName }) => ({
  stateToRoute(uiState) {
    const indexUiState = uiState[indexName];
    return {
      query: indexUiState.query,
      page: indexUiState.page,
      states: (indexUiState.refinementList && 
        indexUiState.refinementList["states"] && 
        indexUiState.refinementList["states"].join('~')) || 'all',
      diagnoses: indexUiState.refinementList && indexUiState.refinementList.diagnoses,
      // category:
      //   (indexUiState.hierarchicalMenu &&
      //   indexUiState.hierarchicalMenu['hierarch.lvl0'] &&
      //   indexUiState.hierarchicalMenu['hierarch.lvl0'].join('~')) || 'all',

        category:
          indexUiState.hierarchicalMenu &&
          indexUiState.hierarchicalMenu['hierarch.lvl0'],
      // rating: indexUiState.ratingMenu && String(indexUiState.ratingMenu.rating),
      // price: indexUiState.range && indexUiState.range.price,
      // nationalus:
      // (indexUiState.toggle && String(indexUiState.toggle.nationalus)) ||
      //         undefined,
      // allchildhoodcancer:
      // (indexUiState.toggle && String(indexUiState.toggle.allchildhoodcancer)) ||
      //         undefined,
      // nationalcanada: (indexUiState.toggle && String(indexUiState.toggle.nationalcanada)) ||
      //         undefined,
      // free_shipping:
      //   (indexUiState.toggle && String(indexUiState.toggle.free_shipping)) ||
      //   undefined,
      sortBy: indexUiState.sortBy,
      hitsPerPage:
        (indexUiState.hitsPerPage && String(indexUiState.hitsPerPage)) ||
        undefined,
    };
  },

  routeToState(routeState) {
    // if (routeState.states === 'any') routeState.states = undefined;
    if (routeState.states === 'all') routeState.states = undefined;
    if (routeState.category === 'all') routeState.category = undefined;
    return {
      [indexName]: {
        query: routeState.query,
        page: routeState.page,
        // hierarchicalMenu: {
        //   'hierarch.lvl0':
        //     (routeState.category && routeState.category.split('~')) ||
        //     undefined,
        // },
        hierarchicalMenu: {
          'hierarch.lvl0': routeState.category,
        },
        refinementList: {
          "states": routeState.states && routeState.states.split('~'),
          diagnoses: routeState.diagnoses,
        },
        // ratingMenu: {
        //   rating: Number(routeState.rating),
        // },
        // range: {
        //   price: routeState.price,
        // },
        // toggle: {
        //   nationalus: Boolean(routeState.nationalus),
        //   nationalcanada: Boolean(routeState.nationalcanada),
        //   allchildhoodcancer: Boolean(routeState.allchildhoodcancer),
        // },
        sortBy: routeState.sortBy,
        hitsPerPage: Number(routeState.hitsPerPage),
      },
    };
  },
});

const getRouting = ({ indexName }) => ({
  router,
  stateMapping: getStateMapping({ indexName }),
});

export default getRouting;