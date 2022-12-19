import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTry } from '../actions/try.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
AddTry(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}

  constructor(private store: Store) { }
  addTry(url: any, name: any ) {
    this.store.dispatch(new AddTry({name: name, url: url}))
  }
  ngOnInit(): void {
  }

}
