"use strict";
var core_1 = require("@angular/core");
var algoliasearch = require('algoliasearch');
// var algoliasearchHelper = require('algoliasearchHelper');
var AlgoliaService = (function () {
    function AlgoliaService() {
        this.client = algoliasearch('5KDUCXJL1M', '573fbb46cc01f1543f35cca24b80d1e1');
        // helper = algoliasearchHelper(this.client, 'bestbuy', {
        // disjunctiveFacets: ['category'],
        // hitsPerPage: 7,
        // maxValuesPerFacet: 3
        this.index = this.client.initIndex('mcqQuestions');
    }
    AlgoliaService.prototype.getSearchResult = function () {
        this.index.search('John', function (err, content) {
            console.log(content.hits);
        });
    };
    return AlgoliaService;
}());
AlgoliaService = __decorate([
    core_1.Injectable()
], AlgoliaService);
exports.AlgoliaService = AlgoliaService;
// );
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxnb2xpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdDLDREQUE0RDtBQUk1RCxJQUFhLGNBQWM7SUFEM0I7UUFHSSxXQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3pFLHlEQUF5RDtRQUNyRCxtQ0FBbUM7UUFDbkMsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUMzQixVQUFLLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFRekQsQ0FBQztJQU5HLHdDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksY0FBYztJQUQxQixpQkFBVSxFQUFFO0dBQ0EsY0FBYyxDQWUxQjtBQWZZLHdDQUFjO0FBbUJ2QixLQUFLO0FBQ1QsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG52YXIgYWxnb2xpYXNlYXJjaCA9IHJlcXVpcmUoJ2FsZ29saWFzZWFyY2gnKTtcclxuLy8gdmFyIGFsZ29saWFzZWFyY2hIZWxwZXIgPSByZXF1aXJlKCdhbGdvbGlhc2VhcmNoSGVscGVyJyk7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxnb2xpYVNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCc1S0RVQ1hKTDFNJywgJzU3M2ZiYjQ2Y2MwMWYxNTQzZjM1Y2NhMjRiODBkMWUxJyk7XHJcbiAgICAvLyBoZWxwZXIgPSBhbGdvbGlhc2VhcmNoSGVscGVyKHRoaXMuY2xpZW50LCAnYmVzdGJ1eScsIHtcclxuICAgICAgICAvLyBkaXNqdW5jdGl2ZUZhY2V0czogWydjYXRlZ29yeSddLFxyXG4gICAgICAgIC8vIGhpdHNQZXJQYWdlOiA3LFxyXG4gICAgICAgIC8vIG1heFZhbHVlc1BlckZhY2V0OiAzXHJcbiAgICBpbmRleCA6KGFueSkgPSB0aGlzLmNsaWVudC5pbml0SW5kZXgoJ21jcVF1ZXN0aW9ucycpO1xyXG5cclxuICAgIGdldFNlYXJjaFJlc3VsdCgpIHtcclxuICAgICB0aGlzLmluZGV4LnNlYXJjaCgnSm9obicsIGZ1bmN0aW9uKGVyciwgY29udGVudCkge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRlbnQuaGl0cyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG5cclxuICAgIC8vICk7XHJcbi8vIH1cclxuXHJcbiJdfQ==