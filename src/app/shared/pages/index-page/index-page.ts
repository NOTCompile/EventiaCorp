import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarIndex } from '../../components/navbar-index/navbar-index';
import { schemaCard } from '../../interfaces/schemaCard';
import dataCard from '../../../shared/data/dataCard.json';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-index-page',
  standalone:true,
  imports: [RouterLink, NavbarIndex, Card],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {
  dataCard: schemaCard[] = dataCard;
}
