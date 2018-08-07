import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

export interface HasId {
  id: string;
}

@Injectable()
export class BaseService<T extends HasId> {

  constructor(private storageKey: string, private factory: new(t:T) => T) { }

  getAll(): Observable<T> {
    return this.loadAll();
  }

  getOne(id): Observable<T> {
    return Observable.create(observer => {
      this.loadAll().first(one => { return one.id === id; })
      .subscribe(one => {
        observer.next(one);
        observer.complete();
      });
    });
  }

  save(one: T) {
    this.loadAll().toArray().subscribe(all => {
      one.id = UUID.UUID();
      all.push(one);
      this.saveAll(all);
    });
  }

  update(one: T) {
    this.loadAll().toArray().subscribe(all => {
      for(let i=0; i<all.length; i++) {
        if (all[i].id === one.id) {
          all[i] = one;
          this.saveAll(all);
          break;
        }
      }
    });;
  }

  delete(one: T) {
    this.loadAll()
      .filter(t => { return t.id !== one.id; })
      .toArray().subscribe(all => {
        this.saveAll(all);
      }
    );
  }

  private saveAll(all: T[]) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(all));
    }
  }

  private loadAll(): Observable<T> {
    return Observable.create(observer => {
      if (typeof Storage !== 'undefined') {
        const json = JSON.parse(localStorage.getItem(this.storageKey)) as Array<any>;
        if (!!json) {
          json.forEach(c => {
            const one = new this.factory(c);
            observer.next(one);
          });
        }
      }
      observer.complete();
    });
  }
}
