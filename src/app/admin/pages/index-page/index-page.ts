
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  imports: [],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage { }
