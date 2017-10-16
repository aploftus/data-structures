// Sprint-One Summary:

// A queue tracks two ends, a head and a tail.
// If we initialize both to 0, we can access the size of the queue in O(1) by calculating tail - head.
// With every enqueue, the tail is incremented after insertion
//   (the tail is always 1 index higher than the last item).
// With every dequeue, the item at head is stored, then deleted from queue, then returned.
//   The head must be incremented.

// Pitfalls: Given enough enqueue and dequeue, it is possible for the tail to reach integer overflow.
//   Therefore, reset head/tail to 0 whenever queue empties (size = 0);


// A Stack tracks only one end, a head (we could call it a tail, but pick one).
// If we initialize head to 0, we can access size of stack in O(1) by calculating head.
// With every push, the head is incremented before insertion.
//   This way, head is always tracking the size; size = head.
// With every pop, therefore, ensure the Stack is not empty, and decrement the head.
//   If head ever reaches nums < 0, the Stack must be empty, so reset head = 0;