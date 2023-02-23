import {Component, Input} from '@angular/core';
import {Buddy} from "../../../model/buddy";
import {User} from "../../../model/user";
import {BuddyService} from "../../../services/buddy.service";

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent {
  @Input() currentUser!: User;
  buddies!: Buddy[];

  constructor(private buddyService: BuddyService) {
  }

}
