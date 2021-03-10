import { Component } from '@angular/core'; //kullanabilmek için bu şekilde import edilmesi gerekiyor

@Component({ // {} süslü parantez obje demek
  selector: 'app-root', // bu ifade index.html de body içinde <app-root> olarak kullanılıyor
  templateUrl: './app.component.html', //  './' aynı klasörde demek
  styleUrls: ['./app.component.css'] // [] köşeşi parantez array için kullanılıyor
})
export class AppComponent {
  title: string = 'northwind'; //title = 'northwind'; :string ile tip güvenli hale getirilebilir.
  user: string = 'Melek Karaca';
  
}
