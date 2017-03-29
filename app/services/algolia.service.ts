import { Injectable } from "@angular/core";
var algoliasearch = require('algoliasearch');
// var algoliasearchHelper = require('algoliasearchHelper');


@Injectable()
export class AlgoliaService {
    
    client = algoliasearch('5KDUCXJL1M', '573fbb46cc01f1543f35cca24b80d1e1');
    // helper = algoliasearchHelper(this.client, 'bestbuy', {
        // disjunctiveFacets: ['category'],
        // hitsPerPage: 7,
        // maxValuesPerFacet: 3
    index :(any) = this.client.initIndex('mcqQuestions');

    getSearchResult() {
     this.index.search('John', function(err, content) {
  console.log(content.hits);
    });

    }   
}



    // );
// }

