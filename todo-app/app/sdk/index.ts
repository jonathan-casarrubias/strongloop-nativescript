/* tslint:disable */
import { HTTP_PROVIDERS } from '@angular/http';
import { LoopBackAuth } from './services/auth.service';
import { ErrorHandler } from './services/errorHandler.service';
import {
UserApi,TodoApi,
} from './services/api.service'
export const API_PROVIDERS: any[] = [
	HTTP_PROVIDERS,
	LoopBackAuth,
	ErrorHandler,
  UserApi,
  TodoApi,

];
export * from './models';
export * from './services/api.service';
export * from './services/config.service';
export * from './services/auth.service';
