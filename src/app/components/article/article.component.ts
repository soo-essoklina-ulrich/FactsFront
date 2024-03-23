import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../administrateur/service/article/article.service";
import {Article} from "../../models/article/article";
import {FormGroup} from "@angular/forms";
import  * as bootstrap from "bootstrap";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',


})
export class ArticleComponent implements OnInit{
  ArtList: Article[] = []
  ArticleToUpadate!: Article | undefined;


  formulaire!: FormGroup
  formUpdate!: FormGroup
    ngOnInit(): void {
      this.finAllArticles();
      this.createForm();
      this.createUpdateForm();

    }


    constructor(
      private articleService: ArticleService
    ) {
    }



    //formulaire de creation de Article
    createForm() {
      this.formulaire = this.articleService.createForm();
    }
    // formulaire de modification de Article
    createUpdateForm() {
      this.formUpdate = this.articleService.createUpdateFrom();
    }

  /**
   * get article to update
   * @param id
   */
  findAricletToUpdate(id : number){

      this.ArticleToUpadate = this.ArtList.find(article => article.id === id);
      console.log(this.ArticleToUpadate);
      const editarticle = new bootstrap.Modal(document.getElementById('editArticle') as HTMLElement);
      editarticle.show();
    }

  /**
   * create article
   *
   */
  createArticle() {
      this.articleService.create(this.formulaire.value).subscribe(
        (article) => {
          this.ArtList.push(article);
          this.formulaire.reset();
        },
        error => {
          console.log(error);
        }
      )

    }

  /**
   * get all articles
   */
  finAllArticles() {
      this.articleService.findAll().subscribe(
        (articles) => {
          this.ArtList = articles;


        },
        error => {
          console.log(error);
        }
      )
    }

  /**
   * delete article
   * @param id
   */
  deleteArticle(id: number) {
    const confirm = window.confirm('Etes Vous sur de Supprimer cette article?');
    if (confirm) {

      this.articleService.delete(id).subscribe(
        res => {
          this.ArtList = this.ArtList.filter(article => article.id !== id);
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  editArticle() {
    if (this.ArticleToUpadate) {
      this.formUpdate.value.libelle? this.formUpdate.value.libelle : this.formUpdate.value.libelle = this.ArticleToUpadate.libelle;
      this.formUpdate.value.prix_unitaire? this.formUpdate.value.prix_unitaire : this.formUpdate.value.prix_unitaire = this.ArticleToUpadate.prix_unitaire;
      this.articleService.update(this.ArticleToUpadate?.id, this.formUpdate.value).subscribe(
        (article) => {
          const index = this.ArtList.findIndex(article => article.id === this.ArticleToUpadate?.id);
          this.ArtList[index] = article;


        },
        error => {
          console.log(error);
        }
      );
    }
    this.formUpdate.reset();
    const editarticle = new bootstrap.Modal(document.getElementById('editArticle') as HTMLElement, {
      backdrop: undefined,
      focus: false,
      keyboard: true
    });
    editarticle.hide();
  }
}
