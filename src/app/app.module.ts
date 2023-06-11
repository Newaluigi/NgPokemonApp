import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { BorderCardDirective } from "./pokemon/border-card.directive";
// import { PokemonTypeColorPipe } from "./pokemon/pokemon-type-color.pipe";
// import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
// import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    // BorderCardDirective,
    // PokemonTypeColorPipe,
    // ListPokemonComponent,
    // DetailPokemonComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, PokemonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
