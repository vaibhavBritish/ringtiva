import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Lead {
  id: string;
  countryRegion: string;
  stateProvince: string;
  city: string;
  postalCode: string;
  category: string;       
  subCategory: string;
  fullName: string;
  offerType: string;
  payouts: number;
  isMerchantAllowedToRefuseLeads: boolean;
  leadsLimit: number;     
  materialModeration: string;
  tools?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

interface LeadState {
  leads: Lead[];
}

const initialState: LeadState = {
  leads: [],
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setLeads(state, action: PayloadAction<Lead[]>) {
      state.leads = action.payload;
    },
    addLead(state, action: PayloadAction<Lead>) {
      state.leads.push(action.payload);
    },
    deleteLead(state, action: PayloadAction<string>) {
      state.leads = state.leads.filter(
        (lead) => lead.id !== action.payload
      );
    },
    updateLead(state, action: PayloadAction<Lead>) {
      state.leads = state.leads.map((lead) =>
        lead.id === action.payload.id ? action.payload : lead
      );
    },
  },
});

export const { addLead, deleteLead, setLeads, updateLead } =
  leadSlice.actions;

export default leadSlice.reducer;
