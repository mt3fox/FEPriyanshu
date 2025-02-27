export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      company_details: {
        Row: {
          address_line_1: string
          address_line_2: string | null
          bill_from: string
          city: string
          country: string
          created_at: string | null
          default: boolean
          email: string
          id: string
          phone: string
          postal_code: string
          state: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address_line_1: string
          address_line_2?: string | null
          bill_from: string
          city: string
          country: string
          created_at?: string | null
          default?: boolean
          email: string
          id?: string
          phone: string
          postal_code: string
          state: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address_line_1?: string
          address_line_2?: string | null
          bill_from?: string
          city?: string
          country?: string
          created_at?: string | null
          default?: boolean
          email?: string
          id?: string
          phone?: string
          postal_code?: string
          state?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_details_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      company_details_to: {
        Row: {
          bill_to: string
          created_at: string | null
          id: string
          to_address_line_1: string
          to_address_line_2: string | null
          to_city: string
          to_country: string
          to_email: string
          to_phone: string
          to_postal_code: string
          to_state: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          bill_to: string
          created_at?: string | null
          id?: string
          to_address_line_1: string
          to_address_line_2?: string | null
          to_city: string
          to_country: string
          to_email: string
          to_phone: string
          to_postal_code: string
          to_state: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          bill_to?: string
          created_at?: string | null
          id?: string
          to_address_line_1?: string
          to_address_line_2?: string | null
          to_city?: string
          to_country?: string
          to_email?: string
          to_phone?: string
          to_postal_code?: string
          to_state?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_details_to_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      deleted_invoices: {
        Row: {
          deleted_at: string | null
          id: string
          invoice_number: string | null
          user_id: string | null
        }
        Insert: {
          deleted_at?: string | null
          id: string
          invoice_number?: string | null
          user_id?: string | null
        }
        Update: {
          deleted_at?: string | null
          id?: string
          invoice_number?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deleted_invoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      demoinvoices: {
        Row: {
          amount_due: string | null
          bill_from: string | null
          bill_from_address_line_1: string | null
          bill_from_address_line_2: string | null
          bill_from_city: string | null
          bill_from_country: string | null
          bill_from_email: string | null
          bill_from_phone: string | null
          bill_from_postal_code: string | null
          bill_from_state: string | null
          bill_to: string | null
          bill_to_address_line_1: string | null
          bill_to_address_line_2: string | null
          bill_to_city: string | null
          bill_to_country: string | null
          bill_to_email: string | null
          bill_to_phone: string | null
          bill_to_postal_code: string | null
          bill_to_state: string | null
          created_at: string | null
          currency: string | null
          date_due: string | null
          date_of_issue: string | null
          discount: string | null
          id: string
          invoice_number: string
          is_stripe_charge: boolean | null
          isedited: boolean | null
          items: Json | null
          paidmanual: boolean | null
          paidstripe: boolean | null
          stripe_amount: number | null
          stripe_charge_id: string | null
          stripe_currency: string | null
          stripe_customer: string | null
          stripe_payment_intent: string | null
          thankyou_note: string | null
          total: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount_due?: string | null
          bill_from?: string | null
          bill_from_address_line_1?: string | null
          bill_from_address_line_2?: string | null
          bill_from_city?: string | null
          bill_from_country?: string | null
          bill_from_email?: string | null
          bill_from_phone?: string | null
          bill_from_postal_code?: string | null
          bill_from_state?: string | null
          bill_to?: string | null
          bill_to_address_line_1?: string | null
          bill_to_address_line_2?: string | null
          bill_to_city?: string | null
          bill_to_country?: string | null
          bill_to_email?: string | null
          bill_to_phone?: string | null
          bill_to_postal_code?: string | null
          bill_to_state?: string | null
          created_at?: string | null
          currency?: string | null
          date_due?: string | null
          date_of_issue?: string | null
          discount?: string | null
          id?: string
          invoice_number: string
          is_stripe_charge?: boolean | null
          isedited?: boolean | null
          items?: Json | null
          paidmanual?: boolean | null
          paidstripe?: boolean | null
          stripe_amount?: number | null
          stripe_charge_id?: string | null
          stripe_currency?: string | null
          stripe_customer?: string | null
          stripe_payment_intent?: string | null
          thankyou_note?: string | null
          total?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount_due?: string | null
          bill_from?: string | null
          bill_from_address_line_1?: string | null
          bill_from_address_line_2?: string | null
          bill_from_city?: string | null
          bill_from_country?: string | null
          bill_from_email?: string | null
          bill_from_phone?: string | null
          bill_from_postal_code?: string | null
          bill_from_state?: string | null
          bill_to?: string | null
          bill_to_address_line_1?: string | null
          bill_to_address_line_2?: string | null
          bill_to_city?: string | null
          bill_to_country?: string | null
          bill_to_email?: string | null
          bill_to_phone?: string | null
          bill_to_postal_code?: string | null
          bill_to_state?: string | null
          created_at?: string | null
          currency?: string | null
          date_due?: string | null
          date_of_issue?: string | null
          discount?: string | null
          id?: string
          invoice_number?: string
          is_stripe_charge?: boolean | null
          isedited?: boolean | null
          items?: Json | null
          paidmanual?: boolean | null
          paidstripe?: boolean | null
          stripe_amount?: number | null
          stripe_charge_id?: string | null
          stripe_currency?: string | null
          stripe_customer?: string | null
          stripe_payment_intent?: string | null
          thankyou_note?: string | null
          total?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "demoinvoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      email_tracking: {
        Row: {
          id: number
          manual_invoice_emails_sent: number | null
          stripe_invoice_emails_sent: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          manual_invoice_emails_sent?: number | null
          stripe_invoice_emails_sent?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          manual_invoice_emails_sent?: number | null
          stripe_invoice_emails_sent?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_tracking_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      export_stats: {
        Row: {
          created_at: string | null
          downloads_csv: number | null
          downloads_pdf: number | null
          exported_csv: number | null
          exported_filtered_csv: number | null
          id: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          downloads_csv?: number | null
          downloads_pdf?: number | null
          exported_csv?: number | null
          exported_filtered_csv?: number | null
          id?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          downloads_csv?: number | null
          downloads_pdf?: number | null
          exported_csv?: number | null
          exported_filtered_csv?: number | null
          id?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "export_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_intents: {
        Row: {
          amount: number | null
          created: string | null
          created_at: string | null
          currency: string | null
          customer: string | null
          id: string
          metadata: Json | null
          payment_method: string | null
          receipt_email: string | null
          status: string | null
          stripe_event_id: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created?: string | null
          created_at?: string | null
          currency?: string | null
          customer?: string | null
          id: string
          metadata?: Json | null
          payment_method?: string | null
          receipt_email?: string | null
          status?: string | null
          stripe_event_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created?: string | null
          created_at?: string | null
          currency?: string | null
          customer?: string | null
          id?: string
          metadata?: Json | null
          payment_method?: string | null
          receipt_email?: string | null
          status?: string | null
          stripe_event_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_intents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions_backend: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer: string | null
          id: string
          latest_invoice: string | null
          metadata: Json | null
          stripe_event_id: string | null
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer?: string | null
          id: string
          latest_invoice?: string | null
          metadata?: Json | null
          stripe_event_id?: string | null
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer?: string | null
          id?: string
          latest_invoice?: string | null
          metadata?: Json | null
          stripe_event_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          auto_send_invoice: boolean | null
          avatar_url: string | null
          full_name: string | null
          id: string
          sender_email: string | null
          stripe_api_key: string | null
          stripe_webhook_secret: string | null
          thankyou_note: string | null
        }
        Insert: {
          auto_send_invoice?: boolean | null
          avatar_url?: string | null
          full_name?: string | null
          id: string
          sender_email?: string | null
          stripe_api_key?: string | null
          stripe_webhook_secret?: string | null
          thankyou_note?: string | null
        }
        Update: {
          auto_send_invoice?: boolean | null
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          sender_email?: string | null
          stripe_api_key?: string | null
          stripe_webhook_secret?: string | null
          thankyou_note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_field: {
        Args: {
          field_name: string
          user_id_param: string
        }
        Returns: {
          id: number
          user_id: string
          downloads_pdf: number
          downloads_csv: number
          exported_csv: number
          exported_filtered_csv: number
          created_at: string
          updated_at: string
        }[]
      }
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
