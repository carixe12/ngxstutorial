import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Try } from '../models/try.model';
import { TryState } from '../state/try.state';
import { Observable } from 'rxjs';
import { RemoveTry } from './../actions/try.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  try$: Observable<Try[]>

  constructor(private store: Store) { 
    this.try$ = this.store.select(state => state.try.try)
  }

  delTry(name: string) {
    this.store.dispatch(new RemoveTry(name))
  }

  ngOnInit(): void {
  }

}
