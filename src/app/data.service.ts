import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  prolangs = [
    {
      image: 'beginners.jpg',
      title: 'JavaScript & TypeScript',
      description:
        'JavaScript makes your webpage dynamic and more interactive and TypeScript has almost the same features as JavaScript but more specific on data types.',
    },
    {
      image: 'intermediate.jpg',
      title: 'SQL & PHP',
      description:
        'Structured Query Language(SQL) implements your database using CRUD operations. Hypertext PreProcessor(PHP) is a server side language used to create dynamic websites. It is also used to bind database with your website, alongside MySQL as part of an "XAMPP" configuration.',
    },
    {
      image: 'advanced.jpg',
      title: 'Angular & React',
      description:
        'Angular is a Javascript framework built using Typescript used to build complex enterprise-grade apps like single-page apps and progressive web apps, while React is a Javascript library and built using JSX used to build UI components in any app with frequently variable data.',
    },
  ];
  PHP_API_SERVER = 'http://localhost/isd-project/api-project';
  constructor(private httpClient: HttpClient) {}

  readUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/index.php`);
  }

  readLogin(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/login.php`);
  }

  readFeedback(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(
      `${this.PHP_API_SERVER}/feedback.php`
    );
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${this.PHP_API_SERVER}/create_user.php`,
      user
    );
  }

  createFeedback(feedbacks: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(
      `${this.PHP_API_SERVER}/create_feedback.php`,
      feedbacks
    );
  }

  // deleteUser(id: number) {
  //   return this.httpClient.delete<User>(
  //     `${this.PHP_API_SERVER}/delete_user.php/?id=${id}`
  //   );
  // }
}
