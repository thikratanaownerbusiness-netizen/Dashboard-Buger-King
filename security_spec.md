# Security Specification - Burger King FlameOS

## Data Invariants
1. Orders must have a valid `storeId` and `customerName`.
2. Revenue in `Store` must be a non-negative number.
3. Employee `performance` must be between 0 and 100.
4. Inventory `stock` must be a non-negative number.

## The Dirty Dozen Payloads
1. Unauthorized order creation (missing auth).
2. Setting order status to 'completed' without preparing first.
3. Injecting a 1MB string into store name.
4. Setting employee performance to 999.
5. Modifying someone else's order (if we had customer-specific orders).
6. Changing `storeId` on an existing order.
7. Creating a store with `health` > 100.
8. Deleting a store document as a non-admin.
9. Updating an inventory item's `threshold` to a negative value.
10. Spoofing `createdAt` on an order (not using server timestamp).
11. Bypassing `isValidOrder` by adding a "ghost field" like `isVerified: true`.
12. Listing all stores without being authenticated.

## Test Runner
(Tests would be implemented in firestore.rules.test.ts)
