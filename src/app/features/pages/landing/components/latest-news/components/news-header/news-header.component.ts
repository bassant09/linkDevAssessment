import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../../../../../core/models/Category.Model';

@Component({
  selector: 'app-news-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-header.component.html',
  styleUrl: './news-header.component.scss'
})
export class NewsHeaderComponent {
  @Input() categoryData: Category[] = []
  @Output() filterClickEvent = new EventEmitter<string>()
  selectedCategoryId: string = '0'
  setSelectedCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.filterClickEvent.emit(categoryId)
  }
}
