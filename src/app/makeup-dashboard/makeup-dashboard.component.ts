import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ArticleModel } from './makeup-dashboard.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-makeup-dashboard',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  templateUrl: './makeup-dashboard.component.html',
  styleUrl: './makeup-dashboard.component.css',
  providers: [ApiService]
})
export class MakeupDashboardComponent implements OnInit {
  formValue!: FormGroup;
  articleModelObj: ArticleModel = new ArticleModel();
  articleData !: any;
  currentMaxId: number = 0;
  filteredMakeupData: any[] = [];
  searchTerm: string = '';

  selectedImageBase64: string = '';


  currentPage: number = 1;
  pageSize: number = 5;
  totalArticles: number = 0;
  totalPages: number = 0;
  

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nomArticle: [''],
      description: [''],
      prix: ['']
    });
    this.getAllArticles(); 
  }
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  postArticleDetails() {
    this.articleModelObj.nomArticle = this.formValue.value.nomArticle;
    this.articleModelObj.description = this.formValue.value.description;
    this.articleModelObj.prix = this.formValue.value.prix;
    this.articleModelObj.photo = this.selectedImageBase64;

    this.articleModelObj.id = ++this.currentMaxId;

    this.api.postArticle(this.articleModelObj)
      .subscribe(res => {
        alert("Article ajouté avec succès");
        this.formValue.reset();
        this.getAllArticles();
      }, err => {
        alert("Une erreur s'est produite");
      });
  }
  getAllArticles() {
    this.api.getArticles().subscribe(res => {
      this.articleData = res;
      this.filteredMakeupData =[...this.articleData];

      if(this.articleData && this.articleData.length >0)
      {
        const maxId =Math.max(...this.articleData.map((art:any)=> art.id));
        this.currentMaxId =maxId;
      }

      this.totalArticles = this.articleData.length;
      this.totalPages = Math.ceil(this.totalArticles / this.pageSize);
      this.currentPage = 1;
      this.getPaginatedArticles(); 
    });
    this.filteredMakeupData =[...this.articleData];

  }
  deleteArticle(row: any) {
    this.api.deleteArticle(row.id).subscribe(res => {
      alert("Article supprimé");
      this.getAllArticles();
    });
  }
  
  onEdit(row: any) {
    this.articleModelObj.id = row.id;
    this.formValue.controls['nomArticle'].setValue(row.nomArticle);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['prix'].setValue(row.prix);
    this.selectedImageBase64 = row.photo;

  }

  updateArticle() {
    this.articleModelObj.nomArticle = this.formValue.value.nomArticle;
    this.articleModelObj.description = this.formValue.value.description;
    this.articleModelObj.prix = this.formValue.value.prix;
    this.articleModelObj.photo = this.selectedImageBase64;

    this.api.updateArticle(this.articleModelObj, this.articleModelObj.id).subscribe(res => {
      alert("Mise à jour réussie !");
      this.formValue.reset();
      this.getAllArticles();
    });
  }

  filterMakeup() {
    const term = this.searchTerm.toLowerCase();
    this.filteredMakeupData = this.articleData.filter((article: ArticleModel) => {
      return (
        article.nomArticle.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term) ||
        article.prix.toString().includes(term)  
      );
    });
    this.articleData = this.filteredMakeupData;

    this.totalArticles = this.filteredMakeupData.length;
    this.totalPages = Math.ceil(this.totalArticles / this.pageSize);
    this.currentPage = 1;
    this.getPaginatedArticles();
  }
  


    getPaginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.filteredMakeupData = this.articleData.slice(startIndex, endIndex);
    }
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.getPaginatedArticles();
      }
    }
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getPaginatedArticles();
      }
    }
    
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getPaginatedArticles();
      }
    }
    
}
