import { Component } from '@angular/core';
import { Organization } from '../organization';
import { GithubService } from '../github.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {
  orgs$: Observable<Organization[]> | undefined;
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrgs()
  }
}
