import { MatButtonModule, MatInputModule, MatCardModule, MatIconModule } from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCardModule, MatIconModule ],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatIconModule ],
})
export class MaterialModule {}
