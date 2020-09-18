//DATA STRUCTURES: QUEUES//

///////////////////////////////////////////////////////////////////////

class Queue {
  #items = [];
  enqueue = (item) => this.#items.splice(0, 0, item);
  dequeue = () => this.#items.pop();
  isempty = () => this.#items.length === 0;
  empty = () => this.#items.length = 0;
  size = () => this.#items.length;
}

//////////////////////////////////////////////////////////////////////

//Example:

const line = new Queue();

line.enqueue('Alice');       // ['Alice']
line.enqueue('Bob');         // ['Bob', 'Alice']
line.enqueue('Carl');        // ['Carl', 'Bob', 'Alice']

console.log(line.size());
line.dequeue();              // ['Carl', 'Bob']
