import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../shared/api.service';
import { CategoryModel } from './ajout-category.modal';

@Component({
  selector: 'app-ajout-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,FormsModule],
  templateUrl: './ajout-category.component.html',
  styleUrl: './ajout-category.component.css',
  providers: [ApiService]
})
export class AjoutCategoryComponent implements OnInit {

  formValue!: FormGroup;
  categoryModelObj: CategoryModel = new CategoryModel();
  categoryData!: any;
  
  currentMaxId: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;
  totalCategories: number = 0;
  totalPages: number = 0;
 
  filteredCategoryData: any[] = [];
  searchTerm: string = '';
  

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nomcategory: ['']
    });
    this.getAllCategories();
  }

  postCategoryDetails() {
    this.categoryModelObj.nomcategory = this.formValue.value.nomcategory;
    this.categoryModelObj.id = ++this.currentMaxId;

    this.api.postCategory(this.categoryModelObj).subscribe(res => {
      alert("Catégorie ajoutée avec succès");
      this.formValue.reset();
      this.getAllCategories();
    }, err => {
      alert("Erreur lors de l'ajout");
    });
  }

  getAllCategories() {
    this.api.getCategories().subscribe(res => {
      this.categoryData = res;
      if (this.categoryData && this.categoryData.length > 0) {
        const maxId = Math.max(...this.categoryData.map((c: any) => c.id));
        this.currentMaxId = maxId;
      }
        // Pagination
      this.totalCategories = this.categoryData.length;
      this.totalPages = Math.ceil(this.totalCategories / this.pageSize);
      this.currentPage = 1;
      this.getPaginatedCategories();
  });
    
  }

  deleteCategory(row: any) {
    this.api.deleteCategory(row.id).subscribe(res => {
      alert("Catégorie supprimée");
      this.getAllCategories();
    });
  }

  onEdit(row: any) {
    this.categoryModelObj.id = row.id;
    this.formValue.controls['nomcategory'].setValue(row.nomcategory);
  }

  updateCategory() {
    this.categoryModelObj.nomcategory = this.formValue.value.nomcategory;

    this.api.updateCategory(this.categoryModelObj, this.categoryModelObj.id).subscribe(res => {
      alert("Catégorie mise à jour !");
      this.formValue.reset();
      this.getAllCategories();
    });
  }
  

  filterCategory() {
      const term = this.searchTerm.toLowerCase();
      this.filteredCategoryData = this.categoryData.filter((article: {nomcategory: string}) => {
        return (
          article.nomcategory.toLowerCase().includes(term) 
           
        );
      });
      this.categoryData = this.filteredCategoryData;
  
      this.totalCategories = this.filteredCategoryData.length;
      this.totalPages = Math.ceil(this.totalCategories / this.pageSize);
      this.currentPage = 1;
      this.getPaginatedCategories();
    }

    getPaginatedCategories() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.filteredCategoryData = this.categoryData.slice(startIndex, endIndex);
    }
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.getPaginatedCategories();
      }
    }
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getPaginatedCategories();
      }
    }
    
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getPaginatedCategories();
      }
    }
    
    
}
