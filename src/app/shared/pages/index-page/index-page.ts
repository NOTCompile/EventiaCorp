import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavbarIndex } from "../../components/navbar-index/navbar-index";

@Component({
  selector: 'app-index-page',
  imports: [RouterLink, NavbarIndex],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage { }
