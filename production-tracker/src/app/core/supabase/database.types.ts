export type UserRole = 'admin' | 'warehouse' | 'cutter' | 'sewing' | 'qa' | 'store';

export type FabricStatus =
  | 'received'
  | 'delivered_to'
  | 'accepted'
  | 'cutting_complete';

export type BatchStatus =
  | 'cutting_complete'
  | 'sewing_in_progress'
  | 'sewing_complete'
  | 'qa_in_progress'
  | 'qa_complete'
  | 'store_received'
  | 'store_rejected';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          role: UserRole;
          full_name: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          role: UserRole;
          full_name?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: UserRole;
          full_name?: string | null;
        };
      };
      inventory: {
        Row: {
          id: string;
          material_name: string;
          quantity_meters: number;
          status: FabricStatus;
          recipient_id: string | null;
          date_received: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          material_name: string;
          quantity_meters: number;
          status?: FabricStatus;
          recipient_id?: string | null;
          date_received: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          material_name?: string;
          quantity_meters?: number;
          status?: FabricStatus;
          recipient_id?: string | null;
          updated_at?: string;
        };
      };
      production_batches: {
        Row: {
          id: string;
          inventory_id: string;
          batch_code: string;
          status: BatchStatus;
          pieces_back: number;
          pieces_front: number;
          pieces_right_side: number;
          pieces_left_side: number;
          pieces_top: number;
          pieces_inside_separator: number;
          pieces_side_pocket: number;
          backpacks_completed: number;
          backpacks_approved: number;
          backpacks_returned: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          inventory_id: string;
          batch_code: string;
          status?: BatchStatus;
          pieces_back?: number;
          pieces_front?: number;
          pieces_right_side?: number;
          pieces_left_side?: number;
          pieces_top?: number;
          pieces_inside_separator?: number;
          pieces_side_pocket?: number;
          backpacks_completed?: number;
          backpacks_approved?: number;
          backpacks_returned?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: BatchStatus;
          pieces_back?: number;
          pieces_front?: number;
          pieces_right_side?: number;
          pieces_left_side?: number;
          pieces_top?: number;
          pieces_inside_separator?: number;
          pieces_side_pocket?: number;
          backpacks_completed?: number;
          backpacks_approved?: number;
          backpacks_returned?: number;
          updated_at?: string;
        };
      };
      qa_logs: {
        Row: {
          id: string;
          batch_id: string;
          inspector_id: string;
          approved_count: number;
          returned_count: number;
          details: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          batch_id: string;
          inspector_id: string;
          approved_count: number;
          returned_count: number;
          details?: string | null;
          created_at?: string;
        };
        Update: {
          approved_count?: number;
          returned_count?: number;
          details?: string | null;
        };
      };
    };
  };
}
