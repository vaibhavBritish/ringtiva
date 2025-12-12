import { off } from "process";

interface Leads{
    id :string,
    countryRegion :string,
    stateProvince:string,
    city:string,
    postalCode:string,
    Category:string,
    subCategory:string,
    fullName:string,
    offerType:string,
    payouts:number,
    isMerchantAllowedToRefuseLeads:boolean,
    LeadsLimit:number,
    materialModeration:string,
    tools:string,
    imageUrl:string,
    createdAt:string,
    updatedAt:string,
    deletedAt:string|null
}