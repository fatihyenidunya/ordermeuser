import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ICategory } from '../model/category';
import { Product } from '../model/product'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categories: ICategory[] = [];
  public disable = true;
  public isEdit = false;
  public product = new Product();
  public selectedCategory = "";
  id: 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) {

    this.route.params.subscribe(params =>
      this.id = params['id']);
    this.getCategories();

    if (this.id != 0) {
      this.getProduct(this.id);
    } else {
      this.disable = false;
    }
  }

  ngOnInit() {
  }

  getCategories(): void {

    this.productService.getCategories().subscribe((res: any) => {
      this.categories = res;


    }, err => {
      console.log(err);
    });

  }


  selectCategory(category) {
    this.product.categoryId = category;
  }


  getProduct(id) {
    this.productService.getProduct(id).subscribe((res: Product) => {
      this.product = res;

   
      this.selectedCategory = this.categories.find(x => x.id == this.product.categoryId).id.toString();
      console.log(this.selectedCategory);

    }, err => {

      console.log(err);
    });
  }

  delete(): void {

    this.productService.delete(this.product).subscribe((res: any) => {

    }, err => {
      console.log(err)
    })
  }

  operation(): void {
    if (this.isEdit == true) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {

    this.productService.update(this.product).subscribe((res: any) => {


    }, err => {
      console.log(err);
    })
  }

  save() {

    this.productService.save(this.product).subscribe((res: any) => {

    }, err => {
      console.log(err);
    })
  }



  edit(): void {
    this.disable = false;
    this.isEdit = true;


  }

}
