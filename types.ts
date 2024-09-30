import { Enums, Tables, TablesInsert, TablesUpdate } from "./types_db";

export interface UserDetails extends Tables<"users"> {}

export interface ProductWithPrice extends Tables<"products"> {
  prices?: Price[];
}

export interface CompanyDetails extends Tables<"company_details"> {}
export interface CompanyDetailsInsert extends TablesInsert<"company_details"> {}
export interface CompanyDetailsUpdate extends TablesUpdate<"company_details"> {}

export interface Customer extends Tables<"customers"> {}
export interface CustomerInsert extends TablesInsert<"customers"> {}
export interface CustomerUpdate extends TablesUpdate<"customers"> {}

export interface DemoInvoice extends Tables<"demoinvoices"> {}
export interface DemoInvoiceInsert extends TablesInsert<"demoinvoices"> {}
export interface DemoInvoiceUpdate extends TablesUpdate<"demoinvoices"> {}

export interface PaymentIntent extends Tables<"payment_intents"> {}
export interface PaymentIntentInsert extends TablesInsert<"payment_intents"> {}
export interface PaymentIntentUpdate extends TablesUpdate<"payment_intents"> {}

export interface Price extends Tables<"prices"> {}
export interface PriceInsert extends TablesInsert<"prices"> {}
export interface PriceUpdate extends TablesUpdate<"prices"> {}

export interface Product extends Tables<"products"> {}
export interface ProductInsert extends TablesInsert<"products"> {}
export interface ProductUpdate extends TablesUpdate<"products"> {}

export interface Subscription extends Tables<"subscriptions"> {}
export interface SubscriptionInsert extends TablesInsert<"subscriptions"> {}
export interface SubscriptionUpdate extends TablesUpdate<"subscriptions"> {}

export interface SubscriptionBackend extends Tables<"subscriptions_backend"> {}
export interface SubscriptionBackendInsert
  extends TablesInsert<"subscriptions_backend"> {}
export interface SubscriptionBackendUpdate
  extends TablesUpdate<"subscriptions_backend"> {}

export interface User extends Tables<"users"> {}
export interface UserInsert extends TablesInsert<"users"> {}
export interface UserUpdate extends TablesUpdate<"users"> {}

export type PricingPlanInterval = Enums<"pricing_plan_interval">;
export type PricingType = Enums<"pricing_type">;
export type SubscriptionStatus = Enums<"subscription_status">;
