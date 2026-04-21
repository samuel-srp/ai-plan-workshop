# Production Tracking System: Development Plan

## 🎯 Project Overview
A role-based tracking application built with **Angular 20+** and **Supabase** to monitor the lifecycle of a backpack from raw fabric to the store shelf.

---

## 🏗 Milestone 1: Foundation & Auth (Infrastructure)
* **Task 1.1: Project Initialization**
    * Run `ng new` with Standalone and SSR enabled.
    * Configure **Tailwind CSS** and **Angular Material**.
* **Task 1.2: Supabase Integration**
    * Initialize Supabase client and define Database Types.
    * Create tables: `profiles` (with roles), `inventory`, `production_batches`, and `qa_logs`.
* **Task 1.3: Authentication System**
    * Implement Login/Logout using Supabase Auth.
    * Create `RoleGuard` (Functional Guard) to protect routes based on role: `admin`, `warehouse`, `cutter`, `sewing`, `qa`, `store`.

## 📦 Milestone 2: Warehouse & Material Management
* **Task 2.1: Fabric Inventory Dashboard**
    * Display list of fabrics with status: `received`.
    * Fields: Material Name, Quantity (meters), Date Received.
* **Task 2.2: Transfer Logic**
    * Create a transfer form to move fabric to the **Cutter**.
    * Update status to `delivered_to` and log the recipient.

## ✂️ Milestone 3: Cutting & Piece Production
* **Task 3.1: Cutter Reception**
    * Display received fabrics with "Accept" action to change status to `accepted`.
* **Task 3.2: Output Calculation**
    * Form to input cutting results: Total pieces produced.
    * Specific piece tracking: `back`, `front`, `right_side`, `left_side`, `top`, `inside_separator`, `side_pocket`.
* **Task 3.3: Hand-off to Sewing**
    * Generate a batch ID for the set of pieces.

## 🧵 Milestone 4: Sewing & Assembly
* **Task 4.1: Sewing Reception**
    * Component to accept pieces from the Cutter.
* **Task 4.2: Production Logging**
    * Input field for "How many backpacks" completed from a specific batch.
    * Update batch status to `sewing_complete`.

## 🧪 Milestone 5: Quality Assurance (QA)
* **Task 5.1: QA Inspection Queue**
    * View received backpacks from Sewing.
* **Task 5.2: Verification Logic**
    * Form to input: `how many approved` vs `how many returned`.
    * Mandatory `details` field for returned/failed items.

## 🏪 Milestone 6: Store & Admin Overview
* **Task 6.1: Store Reception**
    * Accept/Reject interface for items arriving from QA.
    * Status tracking: `Accepted` or `Rejected` with description field.
* **Task 6.2: Admin Master Dashboard (The "Big Picture")**
    * Global view of all production stages using **Angular Signals** for real-time updates.
    * Summary charts (e.g., Fabric vs. Finished Backpacks) using Material components.

---

## 🛠 Technical Implementation Loop (Per Task)
Follow the workflow defined in `workflow.md`:
1. **Generate:** `ng g c features/<milestone>/<component-name>`.
2. **State:** Define Signals for local UI state and RxJS for Supabase streams.
3. **UI:** Layout with **Tailwind**, logic-heavy elements with **Material**.
4. **Test:** Create Vitest unit tests for business logic.
5. **Validate:** Run `ng lint` and clear any `// TODO` comments before committing.