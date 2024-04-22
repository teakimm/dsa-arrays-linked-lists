/** IndexError: raised when index not found. */

class IndexError extends Error {}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    return this.insertAt(this.length, val);
    /*  const newNode = new NodeStr(val);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.length++;

    this.tail = newNode; */
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    return this.insertAt(0, val);
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    let current: NodeStr | null = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    console.log("this.length: ", this.length);
    console.log("idx: ", idx);

    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    let current: NodeStr | null = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    current!.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx > this.length || idx < 0) {
      throw new IndexError();
    }

    const newNode = new NodeStr(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else if (idx === this.length) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      let current: NodeStr | null = this.head;
      let count = 0;

      console.log(current);
      while (current !== null && count !== idx - 1) {
        count++;
        current = current.next;
      }

      newNode.next = current!.next;
      current!.next = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    if (idx === 0) {
      const headNode = this.head!;
      this.head = headNode!.next;

      if (this.head === null) {
        this.tail = null;
      }
      this.length--;

      return headNode.val;
    } else {
      let previous: NodeStr | null = this.head;
      let count = 0;

      while (previous !== null && count !== idx - 1) {
        count++;
        previous = previous.next;
      }

      const current = previous!.next;

      previous!.next = current!.next;

      if (idx === this.length - 1) {
        this.tail = previous;
      }

      this.length--;

      return current!.val;
    }
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}

export {IndexError, LLStr, NodeStr};
