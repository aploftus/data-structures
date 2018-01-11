// Sprint-Two Summary

// A linked list has a head and a tail.
// It contains nodes that each have two characteristics: a value,
//   and a Next pointer to the next node.
// The tail's Next points to null;
// We initialize the head and tail to point to null as well.
// To insert at tail, we create a new Node, with a default Next pointing to null.
//   If list is empty, then head and tail both point at the new Node.
//   If list has contents, then the current tail's Next should point to the new Node,
//     and the new Node's Next should point to null (it becomes the new tail).
// To remove from head, we make the head's Next point to the Node that comes after the old head.
//   (The head's Next will point to what the old Head's Next used to point to.)
//   The old head will be garbage collected once nothing is pointing to it.
// To check if the list contains an item, we can Search the list.
//   If we find it, return true. If not, return false;
// We can search the list for a target by tracking the item we are currently inspecting,
//   and the item that comes after it.
//   if the inspected item is the target, perform a "I found it!" action
//   else, inspect the next item.
//   if we hit the end of the list (if the next item is null), perform a "I didn't find it" action.
// To remove an item from the middle of the list, we can search the list for the item
//   In this case, we don't want to traverse until we are currently inspecting the item;
//     rather, we traverse until we see that the item subsequent to our
//     current position is the target
//     then, we make the current's Next point to the target's Next.
//     With nothing pointing to the target, it is garbage collected.

// A tree is a recursive structure with a value, an array of children trees, and a parent.
// Each child tree retains the same tree structure (hence the recursive structure).
// To add a child, we create a child tree, then we assign the tree to be the parent's child,
//   and push the child to the tree's children array.
// But to check if a tree contains a value, we need to check every node.
//   First we check the parent tree's node. If we find the target, return true;
//   Then we iterate through the parent's children array,
//     and recursively check if each child contains the target value.
//   If we have searched all the children, return false;
// To remove a tree from its' parent, we first remove the child from its parent's list of children,
//   and then reset the child's parent to be null.
//   In order to remove the child from its parent's list of children,
//     we iterate through all the parent's children (the siblings of the target tree)
//       until we find the target tree. Then we can splice the target from the list of siblings.
// To traverse a tree and execute a callback on each node, we can use