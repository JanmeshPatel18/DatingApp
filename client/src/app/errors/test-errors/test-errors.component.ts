import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
    private http = inject(HttpClient)
    url = "http://localhost:5000/api/"
    validationErrors: string[] = []

    get400Error(){
        this.http.get(this.url + 'buggy/bad-request').subscribe({
          next: response => console.log(response),
          error: error => console.log(error)
        });
    }

    get401Error(){
      this.http.get(this.url + 'buggy/auth').subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      });
    }
    get404Error(){
      this.http.get(this.url + 'buggy/not-found').subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      });
    }
    get500Error(){
      this.http.get(this.url + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
    }
    get400ValidationError(){
      this.http.post(this.url + 'account/register' ,{}).subscribe({
        next: response => console.log(response),
        error: error => {console.log(error)
          this.validationErrors = error
        }
      });
    }
}
