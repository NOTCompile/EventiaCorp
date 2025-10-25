import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SidebarCollapseService } from 'src/app/shared/services/sidebar-collapse';

@Component({
  selector: 'app-navbar-admin',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
location: any;
  constructor(private sidebarService: SidebarCollapseService) { }

  onToggleClick(): void {
    this.sidebarService.toggleSidebar();
  }
}
