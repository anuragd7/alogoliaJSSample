"use strict";
var core_1 = require("@angular/core");
var algolia_service_1 = require("./services/algolia.service");
var AppComponent = (function () {
    function AppComponent(algoliaService) {
        this.algoliaService = algoliaService;
    }
    AppComponent.prototype.OnSubmit = function (value) {
        this.algoliaService.getSearchResult();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n   <StackLayout class=\"form\">\n     <SearchBar id=\"searchbarid\" #sb hint=\"Enter search string\" [text]=\"searchPhrase\" (submit)=\"onSubmit(sb.text)\" backgroundColor = \"green\"></SearchBar>\n    </StackLayout>\n   "
    }),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyw4REFBNEQ7QUFXNUQsSUFBYSxZQUFZO0lBRXZCLHNCQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUFFLENBQUM7SUFFcEQsK0JBQVEsR0FBUixVQUFTLEtBQUs7UUFFWixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksWUFBWTtJQVJ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGlPQUlWO0tBQ0gsQ0FBQztxQ0FHbUMsZ0NBQWM7R0FGdEMsWUFBWSxDQVN4QjtBQVRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFsZ29saWFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYWxnb2xpYS5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgPFNlYXJjaEJhciBpZD1cInNlYXJjaGJhcmlkXCIgI3NiIGhpbnQ9XCJFbnRlciBzZWFyY2ggc3RyaW5nXCIgW3RleHRdPVwic2VhcmNoUGhyYXNlXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdChzYi50ZXh0KVwiIGJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIj48L1NlYXJjaEJhcj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxnb2xpYVNlcnZpY2U6QWxnb2xpYVNlcnZpY2Upe31cblxuICBPblN1Ym1pdCh2YWx1ZSl7XG5cbiAgICB0aGlzLmFsZ29saWFTZXJ2aWNlLmdldFNlYXJjaFJlc3VsdCgpO1xuICB9XG5cbn1cblxuXG5cbiJdfQ==