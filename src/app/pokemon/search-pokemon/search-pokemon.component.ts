import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styles: [],
})
export class SearchPokemonComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchPokemon(term: string) {}

  goToDetail(pokemon: Pokemon) {
    ù;
    const link = ["pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
