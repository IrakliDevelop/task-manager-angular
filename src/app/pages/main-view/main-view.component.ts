import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from '../../models/board.model';
import {Column} from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Some random idea',
      'This is another random idea'
    ]),
    new Column('Research', [
      ' Lorem ipsum',
      'Fap',
      'Thsi was in the \'Research Column\''
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
