import {ApplicationConfig, inject} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {
  InMemoryCache
} from '@apollo/client/core';
import {provideApollo} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import {provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideApollo(() => ({
    cache: new InMemoryCache(),
    link: inject(HttpLink).create({
      uri: `https://graphql-workshop-backend.vercel.app/graphql`
    })
  }))]
};
