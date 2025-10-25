import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from 'src/app/shared/components/sidebar/sidebar';
import { SidebarCollapseService } from 'src/app/shared/services/sidebar-collapse';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-index-page',
  imports: [Sidebar, RouterOutlet, Navbar],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {
  @Input() collapsed = false;
  /* Sidebar Control */
  isSidebarCollapsed = false;

  constructor(private sidebarService: SidebarCollapseService) {}

  ngOnInit(): void {
    this.sidebarService.loadInitialState();

    this.sidebarService.collapsed$.subscribe((collapsed) => {
      this.isSidebarCollapsed = collapsed;
    });
  }
}
