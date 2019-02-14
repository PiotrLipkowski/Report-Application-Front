import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { CommentDialogComponent, StudentDetailsComponent} from './student-details/student-details.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,  MatTabsModule,
  MatSidenavModule,  MatIconModule,
  MatButtonModule,  MatListModule,
  MatFormFieldModule, MatInputModule,
  MatCardModule, MatStepperModule,
  MatSelectModule, MatProgressBarModule,
  MatDialogModule, MatChipsModule,
  MatSnackBarModule, MatExpansionModule,
  MatTooltipModule, MatSlideToggleModule } from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ListSingleUploadComponent } from './upload/list-single-upload/list-single-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    HeaderComponent,
    SidenavListComponent,
    StudentDetailsComponent,
    StudentListComponent,
    ListSingleUploadComponent,
    CommentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSlideToggleModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [CommentDialogComponent]
})
export class AppModule { }
