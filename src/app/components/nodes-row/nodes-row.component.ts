import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodesDetailComponent} from '../../components/nodes-detail/nodes-detail.component';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  // There are 2 types of change detection mechanisms in angular
  // 1- Default Mode : Always check the components for each change detection cycle
  // 2- OnPush Mode: Explicitly tells the Angular which component needs to check for changes,
  //                 if one of the component inputs changes.
  //      That means only componets having changed @Input() are checked
  // This is defined through the changeDetection metadata  property of the component
  //
  // Adds property to declare it to use OnPush 
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class NodesRowComponent {
  @Input() node: any;

  // inject modalService
  constructor(private modalService: NgbModal) { }

  isDanger(prop) {
    return this.node[prop].used /this.node[prop].available > 0.7;
  }

  // method implementation to open the modal
  open(node){
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

}
