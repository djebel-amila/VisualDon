

const fetch = require('node-fetch')

module.exports = async offset => {
  const r = await fetch("https://www.galaxus.ch/api/graphql", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "*/*",
        "Accept-Language": "fr-CH",
        "content-type": "application/json",
        "request-id": "|537484ba1cb94a7cbf5e8870b1ef348c.b9a5f56283534a60",
        "x-dg-buildid": "573893",
        "x-dg-correlation-id": "7f35d7c2-6fb9-4b50-b30f-1b4be18ad402",
        "x-dg-country": "ch",
        "x-dg-mandator": "406802",
        "x-dg-portal": "22",
        "x-dg-routename": "/search",
        "x-dg-scrumteam": "Endeavour",
        "x-dg-sessionz": "null",
        "x-dg-testgroup": "NoMarketingSlogan",
        "x-dg-userid": "null"
    },
    "referrer": "https://www.galaxus.ch/fr/search?q=sextoys",
    "body": "[{\"operationName\":\"ENTER_SEARCH\",\"variables\":{\"limit\":24,\"offset\":0,\"query\":\"sextoys\",\"filters\":[],\"sortOrder\":null,\"include\":[\"bra\",\"pt\",\"pr\"]},\"query\":\"query ENTER_SEARCH($query: String!, $sortOrder: ProductSort, $limit: Int = 9, $offset: Int = 0, $filters: [SearchFilter], $include: [String!]) {\\n  search(query: $query, filters: $filters) {\\n    products(limit: $limit, offset: $offset, sortOrder: $sortOrder) {\\n      total\\n      hasMore\\n      nextOffset\\n      results {\\n        ...ProductSearchResult\\n        __typename\\n      }\\n      __typename\\n    }\\n    filters(include: $include) {\\n      product {\\n        identifier\\n        name\\n        filterType\\n        score\\n        ...CheckboxSearchFilterResult\\n        ...RangeSearchFilterResult\\n        __typename\\n      }\\n      __typename\\n    }\\n    magazinePages(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      __typename\\n    }\\n    authors(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      __typename\\n    }\\n    discussions(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      __typename\\n    }\\n    questions(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      __typename\\n    }\\n    ratings(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      __typename\\n    }\\n    productTypes(limit: 24) {\\n      total\\n      results {\\n        id\\n        name\\n        primarySynonyms\\n        isVisible\\n        description\\n        metaDescription\\n        imageUrl\\n        searchScore\\n        __typename\\n      }\\n      __typename\\n    }\\n    brands(limit: 24) {\\n      total\\n      results {\\n        id\\n        title\\n        searchScore\\n        __typename\\n      }\\n      __typename\\n    }\\n    help(limit: 3) {\\n      ids {\\n        id\\n        score\\n        __typename\\n      }\\n      total\\n      hasMore\\n      results {\\n        searchScore\\n        title\\n        id\\n        url\\n        __typename\\n      }\\n      __typename\\n    }\\n    _meta {\\n      queryInfo {\\n        correctedQuery\\n        didYouMeanQuery\\n        lastProductSearchPass\\n        executedSearchTerm\\n        testGroup\\n        isManagedQuery\\n        __typename\\n      }\\n      redirectionUrl\\n      portalReferral {\\n        productCount\\n        portalName\\n        url\\n        productImageUrls\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ProductSearchResult on ProductSearchResultItem {\\n  searchScore\\n  mandatorSpecificData {\\n    ...ProductMandatorSpecific\\n    __typename\\n  }\\n  product {\\n    ...ProductMandatorIndependent\\n    __typename\\n  }\\n  offer {\\n    ...ProductOffer\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CheckboxSearchFilterResult on CheckboxSearchFilter {\\n  options {\\n    identifier\\n    name\\n    productCount\\n    score\\n    referenceValue {\\n      value\\n      unit {\\n        abbreviation\\n        __typename\\n      }\\n      __typename\\n    }\\n    preferredValue {\\n      value\\n      unit {\\n        abbreviation\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment RangeSearchFilterResult on RangeSearchFilter {\\n  referenceMin\\n  preferredMin\\n  referenceMax\\n  preferredMax\\n  referenceStepSize\\n  preferredStepSize\\n  rangeMergeInfo {\\n    isBottomMerged\\n    isTopMerged\\n    __typename\\n  }\\n  unit {\\n    abbreviation\\n    __typename\\n  }\\n  referenceUnit {\\n    abbreviation\\n    __typename\\n  }\\n  preferredUnit {\\n    abbreviation\\n    __typename\\n  }\\n  rangeFilterDataPoint {\\n    ...RangeFilterDataPointResult\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ProductMandatorSpecific on MandatorSpecificData {\\n  isBestseller\\n  isDeleted\\n  showroomSites\\n  sectorIds\\n  __typename\\n}\\n\\nfragment ProductMandatorIndependent on ProductV2 {\\n  id\\n  productId\\n  name\\n  nameProperties\\n  productTypeId\\n  productTypeName\\n  brandId\\n  brandName\\n  averageRating\\n  totalRatings\\n  totalQuestions\\n  isProductSet\\n  images {\\n    url\\n    height\\n    width\\n    __typename\\n  }\\n  energyEfficiency {\\n    energyEfficiencyColorType\\n    energyEfficiencyLabelText\\n    energyEfficiencyLabelSigns\\n    energyEfficiencyImage {\\n      url\\n      height\\n      width\\n      __typename\\n    }\\n    __typename\\n  }\\n  seo {\\n    seoProductTypeName\\n    seoNameProperties\\n    productGroups {\\n      productGroup1\\n      productGroup2\\n      productGroup3\\n      productGroup4\\n      __typename\\n    }\\n    gtin\\n    __typename\\n  }\\n  lowQualityImagePlaceholder\\n  hasVariants\\n  smallDimensions\\n  __typename\\n}\\n\\nfragment ProductOffer on OfferV2 {\\n  id\\n  productId\\n  offerId\\n  shopOfferId\\n  price {\\n    amountIncl\\n    amountExcl\\n    currency\\n    fraction\\n    __typename\\n  }\\n  deliveryOptions {\\n    mail {\\n      classification\\n      futureReleaseDate\\n      __typename\\n    }\\n    pickup {\\n      siteId\\n      classification\\n      futureReleaseDate\\n      __typename\\n    }\\n    detailsProvider {\\n      productId\\n      offerId\\n      quantity\\n      type\\n      __typename\\n    }\\n    certainty\\n    __typename\\n  }\\n  label\\n  type\\n  volumeDiscountPrices {\\n    minAmount\\n    price {\\n      amountIncl\\n      amountExcl\\n      currency\\n      __typename\\n    }\\n    isDefault\\n    __typename\\n  }\\n  salesInformation {\\n    numberOfItems\\n    numberOfItemsSold\\n    isEndingSoon\\n    validFrom\\n    __typename\\n  }\\n  incentiveText\\n  isIncentiveCashback\\n  isNew\\n  isSalesPromotion\\n  hideInProductDiscovery\\n  canAddToBasket\\n  hidePrice\\n  insteadOfPrice {\\n    type\\n    price {\\n      amountIncl\\n      amountExcl\\n      currency\\n      fraction\\n      __typename\\n    }\\n    __typename\\n  }\\n  minOrderQuantity\\n  __typename\\n}\\n\\nfragment RangeFilterDataPointResult on RangeFilterDataPoint {\\n  count\\n  referenceValue {\\n    value\\n    unit {\\n      abbreviation\\n      __typename\\n    }\\n    __typename\\n  }\\n  preferredValue {\\n    value\\n    unit {\\n      abbreviation\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\"}]",
    "method": "POST",
    "mode": "cors"
});

  const data = await r.json()
  return data
}