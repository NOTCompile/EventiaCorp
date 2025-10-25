import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarIndex } from "../../components/navbar-index/navbar-index";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [NavbarIndex, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage { }
