import { Component } from "@angular/core";
import { AlgoliaService } from "./services/algolia.service";


@Component({
    selector: "ns-app",
    template: `
   <StackLayout class="form">
     <SearchBar id="searchbarid" #sb hint="Enter search string" [text]="searchPhrase" (submit)="onSubmit(sb.text)" backgroundColor = "green"></SearchBar>
    </StackLayout>
   `
})
export class AppComponent {

  constructor(private algoliaService:AlgoliaService){}

  OnSubmit(value){

    this.algoliaService.getSearchResult();
  }

}



