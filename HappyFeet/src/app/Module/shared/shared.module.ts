import { NavContentComponent } from "../../navbar/nav-content.component";
import { NavbarComponent } from "../../navbar/navbar.component";


@NgModule({
    declaration: [
        NavbarComponent,
        FooterComponent,
        NavContentComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})
export class SharedModule { }