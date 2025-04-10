import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//
// // use
// const { data } = await client.query({
//   query: gql`
//     {
//       project(name: "GraphQL") {
//         tagline
//       }
//     }`
// });
// console.log(data.project)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
