import { Component, OnInit } from '@angular/core';
//import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Game, APIResponse } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public sort: string;
  public games: Array<Game>;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metac', params['game-search']);
      }
      else{
        this.searchGames('metac');
      }
    })
  }

  searchGames(sort: string, search?: string): void {
    this.httpService.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    });
  }

  onSelectionChange(sort: string):void{
    this.searchGames(sort);
  }

  onGameClick(id: number){
      this.router.navigate(['details', id]);
  }
}
