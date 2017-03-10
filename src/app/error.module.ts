import{ErrorHandler} from "@angular/core";
import{NgModule} from "@angular/core";
export class CustomErrorHandler implements ErrorHandler {
//Handle the given error.
public handleError( error: any ): void {
  console.log('cutsom error handler', error);
 }

}
@NgModule({
providers: [
  {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
  }
   ]
})
export class CustomErrorHandlerModule {}
