import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarCollapseService } from '../../services/sidebar-collapse';
import { MenuOptionSidebar } from '../../interfaces/menuOptionSidebar';
import optionsSidebar from '../../../admin/data/optionsSidebar.json';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  optionSidebar: MenuOptionSidebar[] = optionsSidebar;

  constructor(private sidebarService: SidebarCollapseService) {}

  @Input() collapsed = false;

  onToggleClick(): void {
    /* Nombre de la funcion */
    this.sidebarService.toggleSidebar();
  }
}
