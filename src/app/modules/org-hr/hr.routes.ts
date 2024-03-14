import { Routes } from "@angular/router";
import { MembersComponent } from "../../shared/components/members/members.component";
import { AddMemberComponent } from "../../shared/components/add-member/add-member.component";

export const HR_ROUTES:Routes = [
    {
        path:'members',component:MembersComponent
    },
    {
        path:'member/:param',component:AddMemberComponent
    },
    {
        path:'', redirectTo:'members',pathMatch:'full'
    }
]